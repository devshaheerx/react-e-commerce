import { SignIn } from "@clerk/react";
import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn />
    </div>
  )
};

export default Login;
