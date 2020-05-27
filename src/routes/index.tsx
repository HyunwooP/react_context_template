import React, { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginComponent from "../pages/Login/LoginComponet";

const Root: FC = () => (
    <Router>
      <Route path="/" component={LoginComponent} />
    </Router>
);

export default Root;
