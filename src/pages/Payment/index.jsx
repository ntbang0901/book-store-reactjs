import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserByUsername } from "../../services/userService";
import Countrystatecity from "./Countrystatecity";
import "./Payment.scss";
import ProductPayment from "./ProductPayment";

function Payment() {
  const dispatch = useDispatch();
  const history = useHistory();
  const carts = useSelector((state) => state.carts.cart);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setshowSuccess] = useState(false);
  const [isSpinner, setIsSpinner] = useState(false);

  const FecthDataUser = async () => {
    try {
      let res = await getUserByUsername();
      if (res.data.errCode === 0) {
        setUser(res.data.user);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const totalPrice = (itemSelected) => {
    let result = 0;
    if (carts && carts.length > 0) {
      carts.map((item) => {
        result += item?.giasanpham[0]?.gia * item.quantity;
      });
    }
    return result;
  };

  const currentUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
  });

  useEffect(() => {
    setLoading(true);
    FecthData();
    FecthDataUser();
  }, []);

  const FecthData = async () => {
    try {
      let res = await getUserByUsername();
      if (res.data.errCode === 0) {
        setUser(res.data.user);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    setLoading(true);
    FecthData();
  }, []);

  const handleCheckout = () => {
    setIsSpinner(true);
    setshowSuccess(true);

    setTimeout(() => {
      setIsSpinner(false);
      setshowSuccess(false);
      history.push("/");
    }, 2000);
  };

  return (
    <div className="pament-page">
      <div className="container">
        <div className="container-inner">
          {!loading ? (
            <>
              {showSuccess ? (
                <div className="success">
                  <img
                    width={"50px"}
                    src="http://taxiadvertisingvn.com/wp-content/uploads/2020/02/icon-tick.png"
                  />
                  <span style={{ fontSize: "16px" }}>
                    T???o ????n h??ng th??nh c??ng
                  </span>
                </div>
              ) : (
                <div>
                  <div className="row">
                    <div className="col">
                      <h2>Th??ng tin giao h??ng</h2>
                      <div className="info-user">
                        <span className="name">
                          H??? t??n : {user?.ho + user?.ten}
                        </span>
                        <span className="phone">
                          S??? ??i???n tho???i : {user?.sdt}
                        </span>
                        <div className="choose-address">
                          <Countrystatecity FecthData={FecthData} user={user} />
                        </div>
                      </div>

                      <div className="product-list">
                        <h2>S???n ph???m</h2>
                        <div className="product-cart-left">
                          {carts && carts.length > 0 ? (
                            carts.map((item, index) => {
                              return (
                                <ProductPayment
                                  key={item.ten + index}
                                  cartItem={item}
                                />
                              );
                            })
                          ) : (
                            <div></div>
                          )}
                        </div>
                      </div>
                      <div className="payment-method">
                        <h3 className="payment-method-title">
                          Ph????ng th???c thanh to??n
                        </h3>
                        <label className="payment-method-content">
                          <input
                            defaultChecked
                            type="radio"
                            name="payment-method"
                          />
                          <span className="label">
                            <div className="label-method">
                              <div className="label-method-content">
                                <img
                                  className="method-icon"
                                  src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-cod.svg"
                                />
                                <div className="method-content">
                                  <div className="method-content__title">
                                    <span>
                                      Thanh to??n ti???n m???t khi nh???n h??ng
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </label>
                        <label className="payment-method-content">
                          <input type="radio" name="payment-method" />
                          <span className="label">
                            <div className="label-method">
                              <div className="label-method-content">
                                <img
                                  className="method-icon"
                                  src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-momo.svg"
                                />
                                <div className="method-content">
                                  <div className="method-content__title">
                                    <span>Thanh to??n b???ng v?? Momo</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </label>
                        <label className="payment-method-content">
                          <input type="radio" name="payment-method" />
                          <span className="label">
                            <div className="label-method">
                              <div className="label-method-content">
                                <img
                                  className="method-icon"
                                  src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-zalo-pay.svg"
                                />
                                <div className="method-content">
                                  <div className="method-content__title">
                                    <span>Thanh to??n b???ng v?? ZaloPay</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="total-price">
                    <div className="total-item-title title">Ph?? v???n chuy???n</div>
                    <div className="total-item-title price">0 ??</div>
                    <div className="total-item-title title">T???ng ti???n h??ng</div>
                    <div className="total-item-title price">
                      {totalPrice()} ??
                    </div>
                    <div className="total-item-title title">
                      T???ng thanh to??n
                    </div>
                    <div className="total-item-title price total">
                      {totalPrice()} ??
                    </div>
                    <div className="checkout">
                      <div className="FXKjae">
                        <div className="gLbpKW">
                          Nh???n "?????t h??ng" ?????ng ngh??a v???i vi???c b???n ?????ng ?? tu??n
                          theo{" "}
                          <a
                            href="https://help.shopee.vn/portal/article/77242"
                            target="_blank"
                            rel="noopener noreferrer">
                            ??i???u kho???n c???a Shop
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCheckout()}
                        className="btn-checkout">
                        Thanh to??n
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div>Loading..</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;
