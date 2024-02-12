// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// style 구현
import "./slider.scss";
import { Link } from "react-router-dom";

interface slideItem {
  id: number;
  newVal?: boolean;
  name: string;
  link: string;
}
interface props {
  slideName: string;
  slideView: number;
  slideDate: slideItem[];
}

const Slider = (props: props) => {
  const slideName = props.slideName,
    slideView = props.slideView,
    slideDate = props.slideDate;
  return (
    <div className={slideName}>
      <div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={8}
          slidesPerView={slideView}
          navigation
          loop={false}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {slideDate.map(item => (
            <SwiperSlide key={item.id}>
              {/* {({ isActive }) => ( */}
              <Link to={item.link}>{item.name}</Link>
              {/* )} */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
