"use client";

import { usePathname } from "next/navigation";

const ClientComponent = () => {
  const pathname = usePathname();
  const myPathname = pathname === "/testings" ? "testings" : "nono";

  return (
    <div>
      <p>클라이언트에서 렌더링됨</p>
      <p>{myPathname}</p>
    </div>
  );
};

export default ClientComponent;
