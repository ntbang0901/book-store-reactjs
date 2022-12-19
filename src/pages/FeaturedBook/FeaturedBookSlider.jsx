import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actions from "../../actions";
import ProductItem from "../../components/ProductItem";
import Rating from "../../components/Rating";

function FeaturedBookSlider({ products }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleOnClick = (item) => {
    history.push(`/book-details/${item.id}`);
  };

  // const priceSpecial = (price, percentSale) => {
  //   price = price.slice(1);
  //   return (price - price * percentSale).toFixed(2);
  // };

  return (
    <>
      {products &&
        products.length > 0 &&
        products.map((item) => {
          return (
            <div
              className="col-lg-2 .col-lg-3 col-md-3 col-sm-4 col-6"
              key={item.ten}>
              <ProductItem item={item} />
            </div>
          );
        })}
    </>
  );
}

export default FeaturedBookSlider;
