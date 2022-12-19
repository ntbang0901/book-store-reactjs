import { useState, useEffect, useRef, useMemo } from "react";
import Tippy from "@tippyjs/react/headless";
import { useDispatch } from "react-redux";
import { Wrapper as PopperWrapper } from "../Popper";
import ItemSearch from "./ItemSearch";
import { useDebounce } from "../../../../hooks";
import * as actions from "../../../../actions";

import "./SearchBox.scss";
import { useHistory, useLocation } from "react-router-dom";
import { getProductsApi } from "../../../../services/productService";

function SearchBox() {
  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();

  const value = query.get("q");

  const [searchValue, setSearchValue] = useState(value || "");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  const history = useHistory();

  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      let res = await getProductsApi(null, searchValue);
      if (res.data.error === 0) {
        setLoading(false);
        setSearchResult(res.data.data);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    fetchData();
  }, [debounced]);

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleSearch = () => {
    if (searchValue.trim() === "") {
      return;
    }
    dispatch(actions.fetchProducSearchStart(searchValue));
    setShowResult(false);
    history.push(`/search?q=${searchValue}`);
  };

  return (
    <Tippy
      interactive
      visible={showResult && searchResult?.length > 0}
      render={(attrs) => (
        <div className="search-result" tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className="search-title">Kết quả tìm kiếm</h4>
            {searchResult &&
              searchResult.slice(0, 5).map((item) => {
                return (
                  <ItemSearch
                    key={item.ten}
                    data={item}
                    setShowResult={setShowResult}
                  />
                );
              })}
            {searchResult && searchResult.length > 5 && (
              <a className="btn-seemore">
                <span>Xem thêm</span>
              </a>
            )}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}>
      <div className="search-box">
        <div className="border-search-box"></div>
        <div className="search-form">
          <input
            ref={inputRef}
            spellCheck={false}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowResult(true)}
            type="search"
            name="search"
            placeholder="Tìm kiếm sản phẩm..."
            id="search-box"
          />
          <label
            onClick={() => handleSearch()}
            className="fas fa-search"></label>
        </div>
      </div>
    </Tippy>
  );
}

export default SearchBox;
