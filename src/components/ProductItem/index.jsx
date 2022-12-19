import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actions from "../../actions";
import "./ProductItem.scss";
import Rating from "../Rating";

function ProductItem({ item }) {
  const dispatch = useDispatch();

  const history = useHistory();

  const handleOnClick = (item) => {
    document.title = `${item.ten}`;
    history.push(`/book-details/${item.id}`);
  };

  const priceSpecial = (price, percentSale) => {
    return (+price - price * percentSale).toFixed(2);
  };

  return (
    <>
      <div className="feature-item ">
        <div
          className="feature-item-shadow content-shadow"
          onClick={() => handleOnClick(item)}></div>
        <div className="feature-item-inner content-inner">
          <div>
            <div onClick={() => handleOnClick(item)}>
              <div className="feature-item__image">
                <img src={item.hinh} alt={item.ten} />
              </div>
              <div className="content">
                <div className="content__title">
                  <h3>{item.ten}</h3>
                </div>
                <div className="content__price">
                  <p className="special-price">
                    <span>
                      {" "}
                      {item?.giasanpham.length > 0
                        ? priceSpecial(item?.giasanpham[0].gia, 0.2)
                        : "Liên hệ"}
                    </span>{" "}
                    <span className="percent-sale">-20%</span>
                  </p>
                  <span className="old-price">
                    {item.giasanpham.length < 0
                      ? "???"
                      : item?.giasanpham[0]?.gia}
                  </span>
                </div>
                <div className="content__rating">
                  <Rating />
                </div>{" "}
                <div className="content__type">
                  <span>
                    {item.vanphongpham === null ? "Sách" : "Văn phòng phẩm"}
                  </span>
                </div>
              </div>
            </div>
            {/* <button
              onClick={() =>
                dispatch(actions.AddCart({ ...item, quantity: 1 }))
              }
              className="btn-add-to-cart ">
              Thêm giỏ hàng
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
