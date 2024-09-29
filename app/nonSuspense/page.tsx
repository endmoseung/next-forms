import { Suspense } from "react";
import ClientComponent from "../../components/clientComponent";
import Server1 from "../../components/server1";
import Server2 from "../../components/server2";
import Server3 from "../../components/server3";
import Loading from "@/components/Loading";

export default async function NonSuspense() {
  return (
    <div>
      <p>스태틱하다잉</p>
      <a href="/">뒤로가기</a>
      <Server1 />
      <Server2 />
      <Server3 />
      <ClientComponent />
    </div>
  );
}
