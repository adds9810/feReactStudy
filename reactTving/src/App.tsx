import React from "react";
import Router from "~/routes";
import { RecoilRoot } from "recoil";

// style 구현
import "./reset.scss";

function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}

export default App;
