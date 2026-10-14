import { Header, Footer, Button, DocSidebar, installerUrl, handleInstallerClick } from "../components";

export default function NotFound() {
  return (
    <div className="design-160" data-node-id="25:6141" data-name="State / 404 페이지">
      <Header />
      <div className="design-178" data-node-id="25:6153" data-name="Content">
        <p className="design-179" data-node-id="25:6154">
          404
        </p>
        <p className="design-180" data-node-id="25:6155">
          페이지를 찾을 수 없습니다
        </p>
        <div className="design-181" data-node-id="25:6156">
          <p className="design-146">주소가 바뀌었거나 삭제된 페이지일 수 있어요.</p>
          <p className="design-147">아래 버튼으로 돌아가 보세요.</p>
        </div>
        <div className="design-86" data-node-id="25:6157" data-name="Row">
          <Button  className="design-169" label="홈으로 가기"  href="/" />
          <Button  className="design-170" label="문서 보기" style="Secondary"  href="/docs" />
        </div>
      </div>
    </div>
  );
}
