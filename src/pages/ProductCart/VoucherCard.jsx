import { useEffect, useState } from "react";

function VoucherCard() {
  const [sticky, setSticky] = useState(false);

  // handle scroll event
  const handleScroll = () => {
    if (window.pageYOffset > 80) {
      setSticky(true);
    }
    if (window.pageYOffset <= 90) {
      setSticky(false);
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScrollEvent, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [sticky]);

  return (
    <div
      className="col-xs-12 col-sm-12 block event-promotion-block"
      id="block-totals">
      <div className={`totals ${sticky ? "mtop-20" : ""}`}>
        <div className="fhs_checkout_event_promotion">
          <div className="fhs-event-promo">
            <div className="fhs-event-promo-title">
              <div className="fhs-event-promo-title-left">
                <span>
                  <img src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/promotion/ico_coupon.svg" />
                </span>
                <span>Khuyến mãi</span>
              </div>
              <div className="fhs-event-promo-title-viewmore">
                <span>Xem thêm</span>
                <span>
                  <img src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/ico_seemore_blue.svg" />
                </span>
              </div>
            </div>
            <div className="fhs-event-promo-item fhs-event-promo-item-line ">
              <div className="fhs-event-promo-item__top">
                <div className="fhs-event-promo-list-item-content">
                  <div className="fhs-event-promo-list-item-content__header">
                    <div className="fhs-event-promo-list-item-content-title">
                      MÃ GIẢM 30K
                    </div>
                    <div className="fhs-event-promo-list-item-detail fhs_blue_link">
                      Chi tiết
                    </div>
                  </div>
                  <div className="fhs-event-promo-list-item-content-description">
                    Cho đơn hàng từ 250K - Toàn Sàn - Không áp dụng cho Phiếu
                    Quà Tặng
                  </div>
                </div>
              </div>
              <div className="fhs-event-promo-item__bottom">
                <div className="fhs-event-promo-item-progress-bar">
                  <div className="fhs-event-promo-item-progress">
                    <hr style={{ width: "0%" }} />
                    <img
                      className="progress-cheat"
                      src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico-cheatprogresss.svg?q=101435"
                    />
                  </div>
                  <div className="fhs-event-promo-item-minmax">
                    <span>Mua thêm 250.000 đ để nhận mã</span>
                    <span>250.000 đ</span>
                  </div>
                </div>
                <div className="btn-buy-more">
                  <a href="/deal-hot-pages?fhs_campaign=GIO_HANG_GAN_DAT">
                    <button
                      type="button"
                      title="Mua Thêm"
                      className="fhs-btn-view-promo">
                      <span>Mua Thêm</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="fhs-event-promo-sumary">
                                    <div className="fhs_label_note">
                                      <div className="fhs_label_coupon_label_info">
                                        <div>
                                          Có thể áp dụng đồng thời nhiều mã{" "}
                                        </div>
                                        <div
                                          className="fhs_tooltip"
                                          style={{ marginLeft: " 0.25em" }}
                                        >
                                          <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/promotion/ico-alert-grey.svg?q=101435" />
                                          <span>
                                            Áp dụng tối đa 1 mã giảm giá <br />
                                            và 1 mã freeship
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div> */}
        </div>
      </div>
    </div>
  );
}

export default VoucherCard;
