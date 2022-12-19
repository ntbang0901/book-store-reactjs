import * as actions from "../../actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ProductPayment({ cartItem }) {
  const dispatch = useDispatch();

  const [item, setItem] = useState(cartItem);

  const isSelectedItem = () => {
    if (item.isSelected !== cartItem.isSelected) {
      setItem(cartItem);
    }
  };

  isSelectedItem();

  useEffect(() => {
    setItem(cartItem);
  }, [cartItem]);

  const onDeleteCartItem = (item) => {
    dispatch(actions.DeleteCart(item));
  };
  const showSubTotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };
  const UpdateSelectedCartItem = (e, cartItem) => {
    const newCartItem = {
      ...cartItem,
      isSelected: e.target.checked,
    };
    setItem(newCartItem);
    dispatch(
      actions.UpdateIsSelectCartItem({
        ...newCartItem,
      })
    );
  };

  return (
    <div className="item-product-cart">
      <div className="checked-product-cart">
        {/* <input
          type="checkbox"
          id="checkbox-product-395676"
          onChange={(e) => UpdateSelectedCartItem(e, item)}
          checked={item.isSelected}
          name="checkbox_product_395676"
          className="checkbox-add-cart"
        /> */}
        {/* <CheckBox
          checked={checkSeletedAll === null ? item.isSelected : checkSeletedAll}
          cartItem={item}
          onChange={UpdateSelectedCartItem}
        /> */}
      </div>
      <div className="img-product-cart">
        <Link className="product-image" to={`/book-details/${item.id}`}>
          <img src={item.hinh} alt="Sổ Tay Công Thức Hóa Học THPT" />
        </Link>
      </div>
      <div className="group-product-info">
        <div className="info-product-cart">
          <div>
            <h2 className="product-name-full-text">
              <Link to={`/book-details/${item.id}`}>{item.ten}</Link>
            </h2>
          </div>
          <div className="price-original">
            <div className="cart-price">
              <div className="cart-fhsItem-price">
                <div>
                  <span className="price">
                    giá:{item.giasanpham[0].gia} đồng
                  </span>
                </div>
                {/* <div className="fhsItem-price-old">
                  <span className="price">{item.giasanpham[0].gia}</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="cart-price-total">
          <span className="cart-price">
            <span className="price">
              {showSubTotal(item.giasanpham[0].gia, item.quantity)} đồng
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductPayment;
