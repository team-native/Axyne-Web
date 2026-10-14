import { useLayoutEffect, useRef } from 'react';

const ease = 'cubic-bezier(.3,0,0,1)';
const reveals = '[data-name="Hero"] > *, [data-name="Page Header"] > *, [data-name="Grid"] > *, [data-name="Feature Grid"] > div > *, [data-name="Platform Cards"] > *, [data-name="Download Cards"] > *, [data-name="Details"] > *, [data-name="Article"] > *, [data-name="Content"] > h1, [data-name="Next Steps"] > *, [data-name="CTA Band"] > *, [data-name="Download CTA"] > *';

export function usePageMotion(route: string) {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    const frames = new Set<number>();
    const counters = new Map<HTMLElement, string>();
    const targets = Array.from(element.querySelectorAll<HTMLElement>(reveals + ', [data-name="Stats"], [data-name="Shape"], [data-name="Stacked Bar"] > *'));
    targets.forEach(target => {
      target.classList.remove('motion-visible', 'revealed');
      if (!target.matches('[data-name="Shape"], [data-name="Stacked Bar"] > *')) target.setAttribute('data-reveal', '');
    });
    let scrollFrame = 0;
    const progress = element.querySelector<HTMLElement>('.scroll-progress');
    const header = element.querySelector<HTMLElement>('.site-header');
    const preview = element.querySelector<HTMLElement>('[data-name="IDE Window"]');
    function animate(target: HTMLElement, keyframes: Keyframe[], options: KeyframeAnimationOptions) {
      if (preference.matches) return;
      const animation = target.animate(keyframes, options);
      animations.add(animation);
      animation.finished.then(() => animations.delete(animation)).catch(() => {});
    }
    function schedule(callback: FrameRequestCallback) {
      const id = requestAnimationFrame(time => { frames.delete(id); callback(time); });
      frames.add(id);
    }
    function count(target: HTMLElement) {
      const original = target.textContent || '';
      const number = original.match(/\d+(?:\.\d+)?/);
      if (!number || +number[0] === 0 || preference.matches) return;
      counters.set(target, original);
      const final = +number[0], decimals = number[0].includes('.') ? 1 : 0, start = performance.now();
      target.textContent = original.replace(number[0], (0).toFixed(decimals));
      function tick(time: number) {
        const fraction = Math.min(1, (time - start) / 1200);
        target.textContent = original.replace(number![0], (final * (1 - Math.pow(1 - fraction, 3))).toFixed(decimals));
        if (fraction < 1 && !preference.matches) schedule(tick);
        else target.textContent = original;
      }
      schedule(tick);
    }
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const target = entry.target as HTMLElement;
        const delay = Math.min(3, Array.from(target.parentElement?.children || []).indexOf(target)) * 80;
        if (target.matches('[data-name="Shape"], [data-name="Stacked Bar"] > *')) {
          target.classList.add('motion-visible');
          animate(target, [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 900, easing: ease, delay, fill: 'backwards' });
        } else if (target.matches('[data-name="Stats"]')) {
          target.querySelectorAll<HTMLElement>(':scope > div > p:first-child').forEach(count);
          target.classList.add('revealed');
        } else {
          target.style.transitionDelay = `${delay}ms`;
          target.classList.add('revealed');
        }
        observer.unobserve(target);
      }
    }, { threshold: .18 });
    targets.forEach(target => observer.observe(target));
    function updateScroll() {
      scrollFrame = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      if (progress) progress.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
      header?.classList.toggle('scrolled', scrollY > 8);
      if (preview) {
        const fraction = Math.min(1, Math.max(0, (innerHeight - preview.getBoundingClientRect().top) / (innerHeight * .95)));
        preview.style.setProperty('--preview-angle', preference.matches ? '0deg' : `${8 * (1 - fraction)}deg`);
        preview.style.setProperty('--preview-scale', preference.matches ? '1' : `${.95 + .05 * fraction}`);
      }
    }
    function onScroll() { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll); }
    function onPreferenceChange() {
      if (preference.matches) {
        targets.forEach(target => target.classList.add('motion-visible', 'revealed'));
        animations.forEach(animation => animation.cancel());
        frames.forEach(cancelAnimationFrame);
        counters.forEach((original, target) => { target.textContent = original; });
      }
      updateScroll();
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    preference.addEventListener('change', onPreferenceChange);
    updateScroll();
    return () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      frames.forEach(cancelAnimationFrame);
      counters.forEach((original, target) => { target.textContent = original; });
      cancelAnimationFrame(scrollFrame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      preference.removeEventListener('change', onPreferenceChange);
    };
  }, [route]);
  return root;
}
