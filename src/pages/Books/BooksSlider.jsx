import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";

function BookSlider() {
  return (
    <div className="swiper books-slider">
      <div className="swiper-wrapper">
        <Swiper
          autoplay={{
            delay: 5000,
          }}
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Autoplay]}
          className="swiper books-slider"
        >
          <SwiperSlide>
            <Link to={`/book-details/1`} className="swiper-slide">
              <img src="image/book-1.png" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="swiper-slide">
              <img src="image/book-2.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="swiper-slide">
              <img src="image/book-3.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="swiper-slide">
              <img src="image/book-4.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="swiper-slide">
              <img src="image/book-5.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="swiper-slide">
              <img src="image/book-6.png" alt="" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
      <img src="image/stand.png" className="stand" alt="" />
    </div>
  );
}

export default BookSlider;
