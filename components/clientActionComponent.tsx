"use client";

import React from "react";

const ClientActionComponent = () => {
  const handleClickNormalAction = () => {
    alert("일반액션!");
  };
  return <button onClick={handleClickNormalAction}>일반액션 클릭</button>;
};

export default ClientActionComponent;
