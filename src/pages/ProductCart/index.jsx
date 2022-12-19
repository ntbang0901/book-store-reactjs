import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCartItem from "./ProductCartItem";
import * as actions from "../../actions";
import "./ProductCart.scss";
import ResultProductCart from "./ResultProductCart";
import CheckBox from "../../components/Checkbox";

import { getAllCart } from "../../services/cartService";
import { useHistory, useLocation } from "react-router-dom";
import { Logout } from "../../actions";

function ProductCart() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const carts = useSelector((state) => state.carts.cart);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const isLogin = useSelector((state) => state.auth.isLogin);
  useEffect(() => {
    if (!currentUser) {
      history.push({
        pathname: "/login",
        state: { prevPath: location.pathname },
      });
    }
  }, []);

  let itemsIsSNotelected =
    carts && carts.length > 0
      ? carts.filter((item) => item.isSelected === false)
      : null;

  let checkSeletedAll =
    itemsIsSNotelected && itemsIsSNotelected.length === 0 ? true : null;
  useEffect(() => {
    dispatch(actions.getCartItemStart());
  }, []);

  const selectedAll = (e, carts) => {
    const newCart = carts.map((item) => {
      item.isSelected = e.target.checked;
      return item;
    });
    dispatch(actions.selectedAllCartItems([...newCart]));
  };

  return (
    <div className="main-container">
      <div className="container-cart">
        <div className="container-cart-inner">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 cart-page">
              <div className="content">
                <div className="cart">
                  <div className="page-title-container">
                    <h1 style={{ display: "inline-block", width: "auto" }}>
                      Giỏ hàng
                    </h1>
                    <span className="cart-title-num-items">
                      ({carts ? carts.length : "0"} sản phẩm)
                    </span>
                  </div>
                  <div className="cart-ui-content row ">
                    <div className="col-lg-8 col-xs-12">
                      <div className="header-cart-item d-flex">
                        <div className="checkbox-all-product">
                          {/* <input
                            onChange={(e) => selectedAll(e, carts)}
                            className="checkbox-add-cart"
                            type="checkbox"
                            checked={isSelectedAll}
                            id="checkbox-all-products"></input> */}
                          {/* <CheckBox
                            checked={
                              checkSeletedAll !== null ? checkSeletedAll : false
                            }
                            cartItem={carts}
                            onChange={selectedAll}
                          /> */}
                        </div>
                        <div className="title-checkbox-all">
                          <span>
                            Chọn tất cả (
                            <span className="num-items-checkbox">
                              {carts ? carts.length : "0"}
                            </span>{" "}
                            sản phẩm)
                          </span>
                        </div>
                        {/* <div className="qty">Số lượng</div>
                        <div className="amount">Thành tiền</div> */}
                        <div></div>
                      </div>
                      <div className="product-cart-left">
                        {carts && carts.length > 0 ? (
                          carts.map((item, index) => {
                            return (
                              <ProductCartItem
                                key={item.ten + index}
                                cartItem={item}
                                checkSeletedAll={checkSeletedAll}
                              />
                            );
                          })
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>
                    <ResultProductCart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
