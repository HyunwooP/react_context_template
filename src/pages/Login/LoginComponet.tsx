import React, { FC } from "react";
import { GetState } from "../../context";

const Login: FC = () => {
  const store = GetState();
  console.log('store', store);

  return <div>Login Component</div>;
};

export default Login;
