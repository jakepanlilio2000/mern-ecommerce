import React from "react";
import Image from "next/image";

function AppLogo() {
  return (
    <Image
      src="/images/logo.png"
      height="10"
      width="10"
      alt="App Logo"
      className="rounded-full h-5 w-5"
    />
  );
}

export default AppLogo;
