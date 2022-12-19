import FeaturedBookSlider from "./FeaturedBookSlider";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../actions";
import "./FeaturedBook.scss";

function FeatureBook() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchProductStart(null, null, null, 12));
  }, [dispatch]);

  return (
    <section className="featured">
      <div className="container ">
        <h1 className="heading">
          <span>Top 12 Bán chạy nhất tuần</span>
        </h1>
        <div className="feature-list-item ">
          <FeaturedBookSlider products={products} />
        </div>
      </div>
    </section>
  );
}

export default FeatureBook;
