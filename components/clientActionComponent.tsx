"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ClientActionComponent = () => {
  const router = useRouter();
  const handleClickNormalAction = () => {
    router.push("/");
  };
  return <button onClick={handleClickNormalAction}>일반액션 클릭</button>;
};

export default ClientActionComponent;
