import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <main className="flex justify-center items-center w-full h-screen">
      <SignIn />
    </main>
  );
};

export default SignInPage;
