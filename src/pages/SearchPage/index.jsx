import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import * as actions from "../../actions";
import ContentRight from "./ContentRight";
import "./SearchPage.scss";
import SearchPageResultList from "./SearchPageResultList";

function SearchPage() {
  const resultSearch = useSelector((state) => state.product.resultSearch);

  const dispatch = useDispatch();

  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();

  const value = query.get("q");
  console.log(value);

  useEffect(() => {
    if (query === null) return;
    document.title = `Kết quả tìm kiếm với "${value}"`;
  }, []);

  return (
    <div className="search-page">
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className="centent-left">
                <h1>TÌM KIẾM THEO</h1>
                <div className="filter-result-search">
                  <div className="filter-with-price">
                    <h3>Giá</h3>
                    <div className="input-price">
                      Từ
                      <input type="number" defaultValue={0} />
                      đến
                      <input type="number" defaultValue={5000000} />
                    </div>
                  </div>
                  <div className="filter-with-language">
                    <h3>Ngôn ngữ</h3>
                    <div className="checkbox-language">
                      <label>
                        <input type="checkbox" name="ilter-with-language" />
                        Tiếng việt
                      </label>
                      <label>
                        <input type="checkbox" name="ilter-with-language" />
                        Tiếng Anh
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 ">
              <ContentRight resultSearch={resultSearch} value={value} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
