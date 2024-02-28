import { useEffect, useRef, useState } from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperRef, SwiperClass } from "swiper/react";

// 데이터가 없을 경우
import Empty from "../board";

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
  name: string;
  viewingGrade?:number;
  imgUrl?: string;
  newVal?: boolean;
  subtitleVal?: boolean;
  link: string;
}
interface props {
  slideName: string;
  slideView: number;
  slideDate: slideItem[] | null; // 데이터가 있을 때와 빈 값일 때 구분
}

const Slider = (props: props) => {
  const slideName = props.slideName,
    slideView = props.slideView,
    slideDate = props.slideDate;

    // slide Opt
  const [instance, setInstance] = useState<SwiperClass | null>(null);
  const swiperElRef = useRef<SwiperRef>(null);
  useEffect(() => {
    instance?.slideTo(2)
    // ref usage
    console.log(swiperElRef.current?.swiper.activeIndex);
  }, [])
  return (
    <div className={slideName}>
      <div> 
        {slideDate ? (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={8}
          slidesPerView={slideView}
          navigation
          loop={false}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={setInstance}
          onSlideChange={() => console.log("slide change")}
          ref={swiperElRef}
        >
          {slideDate.map(item => (
            <SwiperSlide key={item.id}>
              {/* {({ isActive }) => ( */}
              <Link to={item.link}>{item.name}</Link>
              {/* )} */}
            </SwiperSlide>
          ))}
        </Swiper>): (
    
    <Empty />
      )}
      </div>
    </div>
  );
};

export default Slider;
