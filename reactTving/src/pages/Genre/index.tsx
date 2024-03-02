import Header from "~/component/common/header";
import Footer from "~/component/common/footer";
import Slider from "~/component/common/slider";

export default () => {
  const cateSlideDate = [
    {
      id: 1,
      name: "드라마",
      link: "/detail",
    },
    {
      id: 2,
      name: "액션",
      link: "/detail",
    },
    {
      id: 3,
      name: "호러",
      link: "/detail",
    },
    {
      id: 4,
      name: "로맨스",
      link: "/detail",
    },
    {
      id: 5,
      name: "판타지",
      link: "/detail",
    },
    {
      id: 6,
      name: "스릴러",
      link: "/detail",
    },
    {
      id: 7,
      name: "미스테리",
      link: "/detail",
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
      link: "/detail",
    },
    {
      id: 2,
      name: "program 2",
      newVal: false,
      subtitleVal: false,
      viewingGrade: 1,
      imgUrl: "test.webp",
      link: "/detail",
    },
    {
      id: 3,
      name: "program 3",
      newVal: true,
      subtitleVal: true,
      viewingGrade: 2,
      imgUrl: "test.webp",
      link: "/detail",
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
      link: "/detail",
    },
    {
      id: 2,
      name: "program 2",
      newVal: false,
      subtitleVal: false,
      viewingGrade: 1,
      imgUrl: "test.webp",
      link: "/detail",
    },
    {
      id: 3,
      name: "program 3",
      newVal: true,
      subtitleVal: true,
      viewingGrade: 2,
      imgUrl: "test.webp",
      link: "/detail",
    },
    {
      id: 4,
      name: "program 1",
      newVal: true,
      subtitleVal: false,
      viewingGrade: 0,
      imgUrl: "test.webp",
      link: "/detail",
    },
    {
      id: 5,
      name: "program 2",
      newVal: false,
      subtitleVal: false,
      viewingGrade: 1,
      imgUrl: "test.webp",
      link: "/detail",
    },
    {
      id: 6,
      name: "program 3",
      newVal: true,
      subtitleVal: true,
      viewingGrade: 2,
      imgUrl: "test.webp",
      link: "/detail",
    },
    {
      id: 7,
      name: "program 1",
      newVal: true,
      subtitleVal: false,
      viewingGrade: 0,
      imgUrl: "test.webp",
      link: "/detail",
    },
    {
      id: 8,
      name: "program 2",
      newVal: false,
      subtitleVal: false,
      viewingGrade: 1,
      imgUrl: "test.webp",
      link: "/detail",
    },
    {
      id: 9,
      name: "program 3",
      newVal: true,
      subtitleVal: true,
      viewingGrade: 2,
      imgUrl: "test.webp",
      link: "/detail",
    },
    {
      id: 10,
      name: "program 1",
      newVal: true,
      subtitleVal: false,
      viewingGrade: 0,
      imgUrl: "test.webp",
      link: "/detail",
    },
    {
      id: 11,
      name: "program 2",
      newVal: false,
      subtitleVal: false,
      viewingGrade: 1,
      imgUrl: "test.webp",
      link: "/detail",
    },
    {
      id: 12,
      name: "program 3",
      newVal: true,
      subtitleVal: true,
      viewingGrade: 2,
      imgUrl: "test.webp",
      link: "/detail",
    },
  ];

  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Slider
            slideName="cateRoundSlider"
            slideView={12}
            slideDate={cateSlideDate}
          />
          <h3>실시간 인기 영화</h3>
          <Slider slideName="rankSlider" slideView={5} slideDate={rankSlider} />

          <h3>코미디 액션 영화</h3>
          <Slider
            slideName="normalSlider"
            slideView={7}
            slideDate={popularitySlider}
          />

          <h3>최신 업데이트 영화</h3>
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
