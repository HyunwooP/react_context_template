import React from "react";
import Route from './routes';
import ContextWrapper from "./component/ContextWrapper";

const App = () => {
  return (
    <ContextWrapper>
      <Route />
    </ContextWrapper>
  );
};

export default App;
