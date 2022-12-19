import { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderListItem from "../components/layouts/components/SliderListItem";
import * as actions from "../actions";
import { getProductsApi } from "../services/productService";
import Books from "./Books";
import VPP from "./VPP";
const FeatureBook = lazy(() => import("./FeaturedBook"));
const Category = lazy(() => import("./Category"));

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState([]);
  const [bookTN, setBookTN] = useState([]);
  const [dochoi, setDochoi] = useState([]);

  const FecthData = async (setData, id, ten, page, elementOfPage, options) => {
    try {
      let res = await getProductsApi(id, ten, page, elementOfPage, options);
      if (res.data.error === 0) {
        setData(res.data.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    FecthData(setBook, null, null, null, null, { loaisanphamid: 2 });
    FecthData(setBookTN, null, null, null, null, {
      loaisanphamid: 2,
      book: {
        theloai: 8,
      },
    });
    FecthData(setDochoi, null, null, null, null, {
      loaisanphamid: 1,
      stationery: {
        loaivpp: 12,
      },
    });
    document.title = "Home";
  }, []);

  const products = useSelector((state) => state.product.products);

  // xử lý data trước khi xuống server

  return (
    <div className="home-page">
      <Books />
      <Suspense fallback={<div className="text-center">Loading...!</div>}>
        <Category />
        <FeatureBook products={products} />

        {/* <Arrivals /> */}
        <VPP />
        <SliderListItem title={"Sách"} productList={book} />
        <SliderListItem title={"Thiếu nhi"} productList={bookTN} />
        <SliderListItem title={"Đờ chơi"} productList={dochoi} />
      </Suspense>
      {/* <SliderListItem title={"Thiếu nhi"} productList={products} />
        <SliderListItem title={"đồ chơi"} productList={products} />
        <SliderListItem title={"văn học"} productList={products} />}
      

      {/* <section className="deal">
        <div className="content">
          <h3>deal of the day</h3>
          <h1>upto 50% off</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            perspiciatis in atque dolore tempora quaerat at fuga dolorum natus
            velit.
          </p>
          <a href="#" className="btn">
            shop now
          </a>
        </div>

        <div className="image">
          <img src="image/deal-img.jpg" alt="" />
        </div>
      </section>

      <section className="reviews" id="reviews">
        <h1 className="heading">
          <span>client's reviews</span>
        </h1>

        <div className="swiper reviews-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <img src="image/pic-1.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                facere hic.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/pic-2.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                facere hic.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/pic-3.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                facere hic.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div className="swiper-slide box">
              <img src="image/pic-4.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                facere hic.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/pic-5.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                facere hic.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/pic-6.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                facere hic.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default HomePage;
