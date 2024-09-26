import { Suspense } from "react";
import ClientComponent from "../../components/clientComponent";
import Server1 from "../../components/server1";
import Server2 from "../../components/server2";
import Server3 from "../../components/server3";
import Loading from "@/components/Loading";

export default async function Testings() {
  return (
    <div>
      <p>스태틱하다잉</p>
      <a href="/">뒤로가기</a>
      <Suspense fallback={<Loading />}>
        <Server1 />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Server2 />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Server3 />
      </Suspense>

      <ClientComponent />
    </div>
  );
}
