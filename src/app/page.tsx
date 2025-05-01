import { SignInButton } from "@clerk/nextjs";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <SignInButton mode="modal"/>
    </div>
  );
};

export default HomePage;
