import { useEffect, useState, Suspense } from "react"
import { useParams, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import "./BookDetail.scss"
import * as actions from "../../actions"
import BookDetailMedia from "./BookDetailMedia"
import BookDetailInfo from "./BookDetailInfo"
import ProductInfo from "./ProductInfo"

function BookDetail() {
    const { id } = useParams()
    const productsDetail = useSelector((state) => state.product.productDetail)
    const status = useSelector((state) => state.product.status)

    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.fetchProductDetailStart(id))

        return () => dispatch(actions.removeProductDetail())
    }, [dispatch, id])

    return (
        <div className="book-details-container">
            {Object.keys(productsDetail).length > 0 ? (
                <div className="container">
                    <div className="container-deital-inner content-inner">
                        <div className="container-shadow content-shadow"></div>
                        <div className="container-content">
                            <div className="product-view">
                                <BookDetailMedia
                                    productsDetail={productsDetail}
                                    quantity={quantity}
                                />
                                <BookDetailInfo
                                    productsDetail={productsDetail}
                                    quantity={quantity}
                                    setQuantity={setQuantity}
                                />
                            </div>
                        </div>
                    </div>
                    <ProductInfo data={productsDetail} />
                </div>
            ) : (
                <div className="text-warning text-center display-1">
                    {status && status === "failed"
                        ? "not exists"
                        : "loading..."}
                </div>
            )}
        </div>
    )
}

export default BookDetail
