import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function TotalPrice() {
  const carts = useSelector((state) => state.carts.cart);
  const isLogin = useSelector((state) => state.auth.isLogin);

  const history = useHistory();

  let itemSelected =
    carts &&
    carts.length > 0 &&
    carts.filter((item) => item.isSelected === true);

  const totalPrice = (itemSelected) => {
    let result = 0;
    if (carts && carts.length > 0) {
      carts.map((item) => {
        result += item?.giasanpham[0]?.gia * item.quantity;
      });
    }
    return result;
  };

  const handleOnClick = () => {
    if (carts?.length > 0) {
      if (isLogin) {
        history.push("/payment");
      } else {
        history.push("/login");
      }
    }
  };

  return (
    <div className="block-total-cart">
      <div className="block-totals-cart-page">
        <div className="total-cart-page ">
          <div className="title-cart-page-left">Thành tiền</div>
          <div className="number-cart-page-right">
            <span className="price">{totalPrice(itemSelected)} $</span>
          </div>
        </div>
        <div className="border-product"></div>
        <div className="total-cart-page title-final-total">
          <div className="title-cart-page-left">Tổng Số Tiền (gồm VAT)</div>
          <div className="number-cart-page-right">
            <span className="price">{totalPrice(itemSelected)} đồng</span>
          </div>
        </div>
      </div>
      <div
        className="checkout-type-button-cart"
        style={{ textAlign: "center" }}>
        <div className="method-button-cart">
          <button
            onClick={() => handleOnClick()}
            type="button"
            title="Thanh toán"
            className={`btn btn-proceed-checkout btn-checkout ${
              carts && carts.length > 0 ? "" : "btn-checkout-disable"
            }`}>
            <span>Thanh toán</span>
          </button>
          <div className="retail-note">
            <a
              href="https://www.fahasa.com/chinh-sach-khach-si/"
              target="_blank">
              (Giảm giá trên web chỉ áp dụng cho bán lẻ)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalPrice;
