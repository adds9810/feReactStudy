import { BrowserRouter, Routes, Route } from "react-router-dom";

import Test from "~/pages/test";
import Main from "~/pages/main";

const routes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </BrowserRouter>
);

export default routes;
