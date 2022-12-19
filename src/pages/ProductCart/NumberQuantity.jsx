import * as actions from "../../actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

function NumberQuantity({ item, setItem }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const showSubTotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  const onUpdateCartItem = (item, e) => {
    if (item.quantity > 0) {
      setItem(item);
      dispatch(actions.UpdateCart(item, item.quantity));
      dispatch(actions.getCartItemStart());
    }
  };

  const handleOnchange = (e, item) => {
    setQuantity(item.quantity);
    dispatch(actions.UpdateCart(item, item.quantity));
    dispatch(actions.getCartItemStart());
  };

  return (
    <div className="number-product-cart">
      <div className="product-view-quantity-box">
        <div className="product-view-quantity-box-block ">
          <a
            className="btn-subtract-qty"
            onClick={(e) =>
              handleOnchange(e, { ...item, quantity: +item.quantity - 1 })
            }>
            <img
              style={{
                width: "12px",
                height: "auto",
                verticalAlign: "middle",
              }}
              src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/ico_minus2x.png"
            />
          </a>
          <input
            type="text"
            className="qty-carts"
            name="cart[395676][qty]"
            id="qty-395676"
            maxLength="12"
            align="center"
            value={quantity}
            onChange={(e) =>
              handleOnchange(e, { ...item, quantity: +e.target.value })
            }
            title="So luong"
          />
          <a
            className="btn-add-qty"
            onClick={(e) =>
              handleOnchange(e, { ...item, quantity: +item.quantity + 1 })
            }>
            <img
              style={{
                width: "12px",
                height: "auto",
                verticalAlign: "middle",
              }}
              src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_plus2x.png"
            />
          </a>
        </div>
        <div
          className="product-view-icon-remove-mobile"
          style={{ display: "none" }}>
          <a title="Remove item" id="395676" className="btn-remove-mobile-cart">
            <i className="fa fa-trash-o" style={{ fontSize: "22px" }}></i>
          </a>
        </div>
      </div>
      <div className="cart-price-total">
        <span className="cart-price">
          <span className="price">
            {showSubTotal(item.giasanpham[0].gia, item.quantity)}
          </span>
        </span>
      </div>
    </div>
  );
}

export default NumberQuantity;
