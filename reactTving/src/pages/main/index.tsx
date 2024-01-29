import Header from "~/component/common/header";
import Footer from "~/component/common/footer";
import Slider from "~/component/common/slider";

// style 구현
import "./main.scss";

export default () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Slider slideName="visualSlider" slideView={1} />
        </div>
      </main>
      <Footer />
    </>
  );
};
