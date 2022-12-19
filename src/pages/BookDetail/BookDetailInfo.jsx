import * as actions from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../../components/Rating";
import { useHistory } from "react-router-dom";

function BookDetailInfo({ productsDetail, quantity, setQuantity }) {
  const dispatch = useDispatch();
  const histoty = useHistory();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const onUpdateQuantity = (qty) => {
    if (qty > 0) {
      setQuantity(qty);
    }
  };

  const addToCart = () => {
    if (isLogin) {
      dispatch(actions.AddCart(productsDetail, quantity));
    } else {
      histoty.push("/login");
    }
  };

  return (
    <div className="product-view-detail">
      <h1> {productsDetail.ten}</h1>
      <div>
        {productsDetail.sach ? (
          <div className="product-view-sa">
            <div className="product-view-sa-one">
              <div className="product-view-sa-supplier">
                <span>Tác giả:</span>
                <a href="#">{productsDetail.sach.tacgia.ten}</a>
              </div>
              <div className="product-view-sa-author">
                <span>Nhà cung cấp:</span>
                <span>Rainbow Rowell</span>
              </div>
            </div>

            <div className="product-view-sa-two">
              <div className="product-view-sa-supplier">
                <span>Nhà xuất bản:</span>
                <span>{productsDetail.sach.nhaphathanh.ten}</span>
              </div>
              <div className="product-view-sa-author">
                <span>Hình thức bìa:</span>
                <span>Bìa Mềm</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="product-view-sa">
            <div className="product-view-sa-one">
              <div className="product-view-sa-supplier">
                <span>Nhà cung cấp:</span>
                <a href="#">ATWEB</a>
              </div>
              <div className="product-view-sa-author">
                <span>Thương hiệu:</span>
                <span>{productsDetail.vanphongpham.thuonghieu}</span>
              </div>
            </div>

            <div className="product-view-sa-two">
              <div className="product-view-sa-supplier">
                <span>Xuất sứ:</span>
                <span>{productsDetail.vanphongpham.xuatxu}</span>
              </div>
              <div className="product-view-sa-author">
                <span>Kiểu dáng</span>
                <span>{productsDetail.vanphongpham.kieudang}</span>
              </div>
            </div>
          </div>
        )}
        <div className="product-view-rate">
          <span>Rating:</span>
          <Rating stars={productsDetail.rating} />
        </div>{" "}
        <div className="product-view-soluongton">
          <span>Số lương:</span>
          <span>{productsDetail.soluongton}</span>
        </div>
        <div className="col-md-12 product-view-price">
          <div className="price-box">
            <p className="special-price">
              <span className="product-price">
                {productsDetail.giasanpham.length > 0
                  ? productsDetail.giasanpham[0].gia + "đ"
                  : "liên hệ"}{" "}
              </span>
            </p>
            <p className="old-price">
              <span className="product-price">234.567 đ</span>
              <span className="discount-percent">3%</span>
            </p>
          </div>
        </div>
        <div className="product-view-policy">
          <div>
            <div>Chính sách đổi trả</div>
            <div>
              <div>
                <div>
                  <span>Đổi trả sản phẩm trong 30 ngày</span>
                </div>
                <div>
                  <a href="#">Xem thêm</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-view-quantity">
          <div className="product-view-quantity-box">
            <label>Số lượng: </label>
            <div className="product-view-quantity-box-block">
              <button
                disabled={quantity <= 0 ? true : false}
                type="button"
                className="btn"
                onClick={(e) => onUpdateQuantity(quantity - 1)}>
                -
              </button>

              <input
                min={1}
                className="input-quantity text-center"
                type="text"
                onChange={(e) => onUpdateQuantity(+e.target.value)}
                value={quantity}
              />
              <button
                type="button"
                className="btn "
                onClick={(e) => onUpdateQuantity(quantity + 1)}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-view-add__box">
        <button
          className="btn-add-to-cart"
          type="button"
          onClick={() => addToCart()}>
          Thêm vào giỏ hàng
        </button>
        <button className="btn btn-primary btn-buy-now" type="button">
          Mua ngay
        </button>
      </div>
    </div>
  );
}

export default BookDetailInfo;
