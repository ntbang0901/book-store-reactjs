import { Autoplay, Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { Swiper, SwiperSlide } from "swiper/react"
import ProductItem from "../../../ProductItem"

function ListSlider({ products }) {
    return (
        <div className="swiper books-slider">
            <div className="swiper-wrapper">
                <Swiper
                    autoplay={{
                        delay: 5000,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        480: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        900: { slidesPerView: 4 },
                        900: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                        1200: { slidesPerView: 6 },
                    }}
                    slidesPerView={products.length < 6 ? products.length : 6}
                    spaceBetween={0}
                    slidesPerGroup={1}
                    navigation={true}
                    loopFillGroupWithBlank={true}
                    modules={[Navigation, Autoplay]}
                    className="swiper blogs-slider"
                >
                    <div className="swiper-wrapper">
                        {products.length > 0 &&
                            products?.map((item) => (
                                <SwiperSlide key={item.ten}>
                                    <div className="swiper-slide box">
                                        <ProductItem item={item} />
                                    </div>
                                </SwiperSlide>
                            ))}
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

export default ListSlider
