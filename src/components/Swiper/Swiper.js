import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Styles from "./Swiper.module.scss";
import { Pagination, Navigation } from "swiper";
import { useRef } from "react";
import arrow from "../../images/arrow.svg";

const SwipingGallery = () => {
  const attachmentsArray = [1, 2, 3, 4];
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);

  return (
    <div className={Styles.swiper_box}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={20}
        slidesPerView={2}
        navigation={{
          prevEl: navPrevRef.current,
          nextEl: navNextRef.current,
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className={Styles.swiper}
      >
        {attachmentsArray.map((slide, index) => (
          <SwiperSlide>
            <div key={index} className={Styles.slide}></div>
          </SwiperSlide>
        ))}
        <div className={`${Styles.arrow} ${Styles.prev}`} ref={navPrevRef}>
          <img src={arrow} alt="arrow" />
        </div>
        <div className={`${Styles.arrow} ${Styles.next}`} ref={navNextRef}>
          <img src={arrow} alt="arrow" />
        </div>
      </Swiper>
    </div>
  );
};

export default SwipingGallery;
