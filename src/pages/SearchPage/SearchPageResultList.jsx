import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/ProductItem";
import * as actions from "../../actions";

function SearchPageResultList({ resultList, value }) {
  const status = useSelector((state) => state.product.status);

  const dispatch = useDispatch();

  const [page, setPage] = useState(2);

  const seeMore = (page) => {
    setPage(page + 1);
    dispatch(actions.fetchProducSearchStart(value, page));
  };

  return (
    <div>
      <div className="feature-list-item center-justify">
        {resultList && resultList?.result?.length > 0 ? (
          resultList.result.map((item, index) => (
            <div key={item.ten + index} className="">
              <ProductItem item={item} />
            </div>
          ))
        ) : (
          <div>
            {status && status === "failed"
              ? `Không tìm thấy sản phẩm với từ khoá ${value}`
              : "loading..."}
          </div>
        )}
      </div>
      {resultList?.result?.length < resultList.total && (
        <div className="see-more">
          <span onClick={() => seeMore(page)} className="btn-see-more">
            Xem thêm
          </span>
        </div>
      )}
    </div>
  );
}

export default SearchPageResultList;
