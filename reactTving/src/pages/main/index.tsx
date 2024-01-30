import Header from "~/component/common/header";
import Footer from "~/component/common/footer";
import Slider from "~/component/common/slider";

// style 구현
import "./main.scss";

export default () => {
  const mainSlideDate = [
    { id: 1, name: "slide 1", link: "/genre" },
    { id: 2, name: "slide 2", link: "/genre" },
    { id: 3, name: "slide 3", link: "/genre" },
    { id: 4, name: "slide 4", link: "/genre" },
    { id: 5, name: "slide 5", link: "/genre" },
    { id: 6, name: "slide 6", link: "/genre" },
    { id: 7, name: "slide 7", link: "/genre" },
    { id: 8, name: "slide 8", link: "/genre" },
    { id: 9, name: "slide 9", link: "/genre" },
    { id: 10, name: "slide 10", link: "/genre" },
  ];
  const cateSlideDate = [
    { id: 1, name: "category 1", link: "/genre" },
    { id: 2, name: "category 2", link: "/genre" },
    { id: 3, name: "category 3", link: "/genre" },
    { id: 4, name: "category 4", link: "/genre" },
    { id: 5, name: "category 5", link: "/genre" },
    { id: 6, name: "category 6", link: "/genre" },
    { id: 7, name: "category 7", link: "/genre" },
    { id: 8, name: "category 8", link: "/genre" },
    { id: 9, name: "category 9", link: "/genre" },
    { id: 10, name: "category 10", link: "/genre" },
  ];
  const rankSlider = [
    { id: 1, newVal: true, name: "category 1", link: "/genre" },
    { id: 2, newVal: true, name: "category 2", link: "/genre" },
    { id: 3, newVal: false, name: "category 3", link: "/genre" },
    { id: 4, newVal: false, name: "category 4", link: "/genre" },
    { id: 5, newVal: false, name: "category 5", link: "/genre" },
    { id: 6, newVal: false, name: "category 6", link: "/genre" },
    { id: 7, newVal: false, name: "category 7", link: "/genre" },
    { id: 8, newVal: false, name: "category 8", link: "/genre" },
    { id: 9, newVal: false, name: "category 9", link: "/genre" },
    { id: 10, newVal: false, name: "category 10", link: "/genre" },
  ];
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Slider
            slideName="visualSlider"
            slideView={1}
            slideDate={mainSlideDate}
          />
          <Slider
            slideName="cateSlider"
            slideView={5}
            slideDate={cateSlideDate}
          />
          <h3>오늘의 티빙 TOP 20</h3>
          <Slider slideName="rankSlider" slideView={4} slideDate={rankSlider} />
          <h3>지금 방영중인 인기 예능</h3>
        </div>
      </main>
      <Footer />
    </>
  );
};
