import { Link } from "react-router-dom";

import Header from "~/component/common/header";
import Footer from "~/component/common/footer";
import Slider from "~/component/common/slider";

// style 구현
import "./detail.scss";

export default () => {
  const title = "제모모록",
    content = "내용용",
    tagData = ["111", "222", "33"],
    ingUrl = "test.webp",
    popularitySlider = [
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
      <main className="detail">
        <div className="container">
          <div className="detailContent">
            <div className="textBox">
              <h2>{title}</h2>
              <div className="tagBox">
                {tagData.map((item, index) => (
                  <span className="tagItem">토일 드라마</span>
                ))}
              </div>
              <div>
                <Link to="" className="btn">
                  <span> 이용권 구매하기</span>
                </Link>
              </div>
              <div className="infoBox">
                <dl>
                  <dt>크리에이터</dt>
                  <dd>제작자, 제작작</dd>
                </dl>
                <dl>
                  <dt>출연</dt>
                  <dd>
                    출연자, 출연자, 출연자, 출연자, 출연자, 출연자, 출연자,
                  </dd>
                </dl>
                <p className="contentTxt">{content}</p>
              </div>
            </div>
            <div className="imgBox">
              <img src={require(`~/assets/images/${ingUrl}`)} alt={title} />
            </div>
          </div>
          <h3>비슷한 영화</h3>
          <Slider
            slideName="normalSlider viewName"
            slideView={7}
            slideDate={popularitySlider}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};
