function BookDetailMedia({ productsDetail, quantity }) {
  return (
    <div className="product-media">
      <div className="product-view-image">
        <div className="product-view-thumbnail">
          <div className="lightgallery">
            <a>
              <img
                className="image_product"
                src={productsDetail.hinh}
                alt="book1"
              />
            </a>
            <a>
              <img
                className="image_product"
                src={productsDetail.hinh}
                alt="book1"
              />
            </a>
            <a>
              <img
                className="image_product"
                src={productsDetail.hinh}
                alt="book1"
              />
            </a>
            <a>
              <img
                className="image_product"
                src={productsDetail.hinh}
                alt="book1"
              />
            </a>
            <a>
              <img
                className="image_product"
                src={productsDetail.hinh}
                alt="book1"
              />
            </a>
          </div>
        </div>
        <div className="product-view-image-product">
          <img
            className="image_product"
            src={productsDetail.hinh}
            alt="book1"
          />
        </div>
      </div>
    </div>
  );
}

export default BookDetailMedia;
