import { useDispatch } from "react-redux";

function NumberQuantityBox({ item, setItem }) {
  const dispatch = useDispatch();

  const onUpdateCartItem = (item, e) => {
    if (item.quantity > 0) {
      setItem(item);
      dispatch(actions.UpdateCart(item));
    }
  };

  return (
    <div className="product-view-quantity-box-block ">
      <a
        className="btn-subtract-qty"
        onClick={(e) =>
          onUpdateCartItem(
            {
              ...item,
              quantity: item.quantity - 1,
            },
            e
          )
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
        defaultValue={item.quantity}
        onBlur={(e) =>
          onUpdateCartItem(
            {
              ...item,
              quantity: +e.target.value,
            },
            e
          )
        }
        title="So luong"
      />
      <a
        className="btn-add-qty"
        onClick={(e) =>
          onUpdateCartItem(
            {
              ...item,
              quantity: item.quantity + 1,
            },
            e
          )
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
  );
}

export default NumberQuantityBox;
