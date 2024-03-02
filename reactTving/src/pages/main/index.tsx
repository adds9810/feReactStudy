import Header from "~/component/common/header";
import Footer from "~/component/common/footer";
import Slider from "~/component/common/slider";

// style 구현
import "./main.scss";

export default () => {
  const mainSlideDate = [
    {
      id: 1,
      name: "slide 1",

      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 2,
      name: "slide 2",

      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 3,
      name: "slide 3",

      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 4,
      name: "slide 4",

      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 5,
      name: "slide 5",

      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 6,
      name: "slide 6",

      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 7,
      name: "slide 7",

      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 8,
      name: "slide 8",

      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 9,
      name: "slide 9",

      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 10,
      name: "slide 10",

      imgUrl: "test.webp",
      link: "/genre",
    },
  ];
  const cateSlideDate = [
    {
      id: 1,
      name: "category 1",
      imgUrl: "logo.png",
      link: "/genre",
    },
    {
      id: 2,
      name: "category 2",
      imgUrl: "logo.png",
      link: "/genre",
    },
    {
      id: 3,
      name: "category 3",
      imgUrl: "logo.png",
      link: "/genre",
    },
    {
      id: 4,
      name: "category 4",
      imgUrl: "logo.png",
      link: "/genre",
    },
    {
      id: 5,
      name: "category 5",
      imgUrl: "logo.png",
      link: "/genre",
    },
    {
      id: 6,
      name: "category 6",
      imgUrl: "logo.png",
      link: "/genre",
    },
    {
      id: 7,
      name: "category 7",
      imgUrl: "logo.png",
      link: "/genre",
    },
    {
      id: 8,
      name: "category 8",
      imgUrl: "logo.png",
      link: "/genre",
    },
    {
      id: 9,
      name: "category 9",
      imgUrl: "logo.png",
      link: "/genre",
    },
    {
      id: 10,
      name: "category 10",
      imgUrl: "logo.png",
      link: "/genre",
    },
  ];

  // 관람등급 전체 : 0 / 7세 : 1 / 12세 : 2 / 15세 : 3 / 18세 : 4
  const rankSlider = [
    {
      id: 1,
      name: "program 1",
      newVal: true,
      subtitleVal: false,
      viewingGrade: 0,
      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 2,
      name: "program 2",
      newVal: false,
      subtitleVal: false,
      viewingGrade: 1,
      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 3,
      name: "program 3",
      newVal: true,
      subtitleVal: true,
      viewingGrade: 2,
      imgUrl: "test.webp",
      link: "/genre",
    },
  ];

  const popularitySlider = [
    {
      id: 1,
      name: "program 1",
      newVal: true,
      subtitleVal: false,
      viewingGrade: 0,
      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 2,
      name: "program 2",
      newVal: false,
      subtitleVal: false,
      viewingGrade: 1,
      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 3,
      name: "program 3",
      newVal: true,
      subtitleVal: true,
      viewingGrade: 2,
      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 4,
      name: "program 1",
      newVal: true,
      subtitleVal: false,
      viewingGrade: 0,
      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 5,
      name: "program 2",
      newVal: false,
      subtitleVal: false,
      viewingGrade: 1,
      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 6,
      name: "program 3",
      newVal: true,
      subtitleVal: true,
      viewingGrade: 2,
      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 7,
      name: "program 1",
      newVal: true,
      subtitleVal: false,
      viewingGrade: 0,
      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 8,
      name: "program 2",
      newVal: false,
      subtitleVal: false,
      viewingGrade: 1,
      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 9,
      name: "program 3",
      newVal: true,
      subtitleVal: true,
      viewingGrade: 2,
      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 10,
      name: "program 1",
      newVal: true,
      subtitleVal: false,
      viewingGrade: 0,
      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 11,
      name: "program 2",
      newVal: false,
      subtitleVal: false,
      viewingGrade: 1,
      imgUrl: "test.webp",
      link: "/genre",
    },
    {
      id: 12,
      name: "program 3",
      newVal: true,
      subtitleVal: true,
      viewingGrade: 2,
      imgUrl: "test.webp",
      link: "/genre",
    },
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
          <Slider slideName="rankSlider" slideView={5} slideDate={rankSlider} />

          <h3>누구나 무료</h3>
          <Slider
            slideName="normalSlider"
            slideView={7}
            slideDate={popularitySlider}
          />

          <h3>지금 방영중인 인기 예능</h3>
          <Slider
            slideName="normalSlider"
            slideView={7}
            slideDate={popularitySlider}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};
