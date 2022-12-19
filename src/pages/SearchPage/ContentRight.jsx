import SearchPageResultList from "./SearchPageResultList";

function ContentRight({ resultSearch, value }) {
  return (
    <div className="centent-right">
      <h1>
        {value !== "" && value !== null
          ? `Kết quả tìm kiếm với "${value}"`
          : ""}
      </h1>
      <SearchPageResultList resultList={resultSearch} value={value} />
    </div>
  );
}

export default ContentRight;
