import Header from "~/component/common/header";
import Footer from "~/component/common/footer";

// style 구현
import "./main.scss";

export default () => {
  return (
    <>
      <Header />
      <div className="main">메인인다.</div>
      <Footer />
    </>
  );
};
