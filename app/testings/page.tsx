import { Suspense } from "react";
import ClientComponent from "../components/clientComponent";
import Server1 from "../components/server1";
import Server2 from "../components/server2";
import Server3 from "../components/server3";

export default async function Testings() {
  return (
    <div>
      <p>스태틱하다잉</p>
      <a href="/">뒤로가기</a>
      <Suspense fallback={<p>로딩중</p>}>
        <Server1 />
      </Suspense>
      <Suspense fallback={<p>로딩중</p>}>
        <Server2 />
      </Suspense>
      <Suspense fallback={<p>로딩중</p>}>
        <Server3 />
      </Suspense>

      <ClientComponent />
    </div>
  );
}
