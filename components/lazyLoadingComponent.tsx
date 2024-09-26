import { delay } from "@/utils/delay";
import React from "react";

const LazyLoadingComponent = async () => {
  await delay(5000);
  return <div>늦은 컴포넌트</div>;
};

export default LazyLoadingComponent;
