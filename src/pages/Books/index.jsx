import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import BookSlider from "./BooksSlider";

function Books() {
  return (
    <section className="home" id="home">
      <div className="row">
        <div className="content">
          <h3>upto 75% off</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex
            minima at!
          </p>
          <a href="#" className="btn">
            shop now
          </a>
        </div>

        <BookSlider />
      </div>
    </section>
  );
}

export default Books;
