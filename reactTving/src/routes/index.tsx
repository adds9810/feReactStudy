import { BrowserRouter, Routes, Route } from "react-router-dom";

import Test from "~/pages/test";
import Genre from "~/pages/Genre";
import Detail from "~/pages/Detail";
import Main from "~/pages/main";

const routes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/genre" element={<Genre />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </BrowserRouter>
);

export default routes;
