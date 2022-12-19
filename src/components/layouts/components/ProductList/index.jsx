import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actions from "../../../../actions";
import ProductItem from "../../../ProductItem";
import Rating from "../../../Rating";
import "./ProductList.scss";

function ProductList({ products }) {
  return (
    <>
      {products &&
        products.length > 0 &&
        products.map((item) => {
          return (
            <div
              className="col-lg-2 .col-lg-3 col-md-3 col-sm-4 col-6"
              key={item.image}>
              <ProductItem />
            </div>
          );
        })}
    </>
  );
}

export default ProductList;
