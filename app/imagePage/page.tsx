import Image from "next/image";
import React from "react";

const ImagePage = () => {
  return (
    <div>
      <Image width={200} height={220} src="/talktee.png" alt="talktee" />
    </div>
  );
};

export default ImagePage;
