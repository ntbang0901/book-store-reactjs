import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";

function BlogSlider() {
  return (
    <div className="swiper books-slider">
      <div className="swiper-wrapper">
        <Swiper
          autoplay={{
            delay: 5000,
          }}
          slidesPerView={3}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          navigation={true}
          loopFillGroupWithBlank={true}
          modules={[Navigation, Autoplay]}
          className="swiper blogs-slider"
        >
          <div className="swiper-wrapper">
            <SwiperSlide>
              <div className="swiper-slide box">
                <div className="image">
                  <img src="image/blog-1.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>blog 1 --------------</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, odio.
                  </p>
                  <Link to="/readmore" className="btn-default-bookstore">
                    read more
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide box">
                <div className="image">
                  <img src="image/blog-2.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>blog title goes here</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, odio.
                  </p>
                  <a href="#" className="btn-default-bookstore">
                    read more
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide box">
                <div className="image">
                  <img src="image/blog-3.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>blog title goes here</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, odio.
                  </p>
                  <a href="#" className="btn-default-bookstore">
                    read more
                  </a>
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="swiper-slide box">
                <div className="image">
                  <img src="image/blog-4.jpg" alt="" />
                </div>
                <div className="content">
                  <h3>blog title goes here</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio, odio.
                  </p>
                  <a href="#" className="btn-default-bookstore">
                    read more
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default BlogSlider;
