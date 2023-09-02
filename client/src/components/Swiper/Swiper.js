import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Styles from "./Swiper.module.scss";
import { Pagination, Navigation } from "swiper";
import { useCallback, useEffect, useRef } from "react";
import arrow from "../../images/arrow.svg";

const SwipingGallery = ({
  slidesPerView,
  arrowSize,
  slideDimentions,
  arrowPosition,
  swiperWidth,
}) => {
  const attachmentsArray = [1, 2, 3, 4];
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);

  return (
    <div className={Styles.swiper_box} style={{ width: swiperWidth }}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        navigation={{
          prevEl: navPrevRef.current,
          nextEl: navNextRef.current,
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className={Styles.swiper}
      >
        {attachmentsArray.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                height: slideDimentions.height,
                width: slideDimentions.width,
              }}
              className={Styles.slide}
            ></div>
          </SwiperSlide>
        ))}
        <div
          style={{
            width: arrowSize,
            height: arrowSize,
            top: `calc(50% - ${arrowSize} / 2 )`,
            left: arrowPosition,
          }}
          className={`${Styles.arrow} ${Styles.prev}`}
          ref={navPrevRef}
        >
          <img src={arrow} alt="arrow" />
        </div>
        <div
          style={{
            width: arrowSize,
            height: arrowSize,
            top: `calc(50% - ${arrowSize} / 2 )`,
            right: arrowPosition,
          }}
          className={`${Styles.arrow} ${Styles.next}`}
          ref={navNextRef}
        >
          <img src={arrow} alt="arrow" />
        </div>
      </Swiper>
    </div>
  );
};

export default SwipingGallery;
