import TotalPrice from "./TotalPrice";
import VoucherCard from "./VoucherCard";

function ResultProductCart() {
  return (
    <div className="col-sm-4 hidden-max-width-992">
      <div className="total-cart-right">
        <div className="effect-scroll-cart-right">
          <div className="cart-event-promo-outer">
            <VoucherCard />
          </div>
          <div style={{ clear: "both" }}></div>
          <TotalPrice />
          <div
            id="fhs_error_message_cart"
            style={{
              marginTop: "10px",
              background: "white",
              padding: "10px",
              display: "none",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ResultProductCart;
