import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="w-fill h-screen flex flex-col justify-center items-center">
      <Image src="/logo.png" alt="sketchsync logo" width={100} height={100} className="animate-ping duration-1000"/>
    </div>
  );
};

export default Loader;
