import { Link } from "react-router-dom";

function ItemSearch({ data, setShowResult }) {
  return (
    <Link
      to={`/book-details/${data.id}`}
      onClick={() => setShowResult(false)}
      className="wrapper-search-item">
      <img className="thumbnail" src={data.hinh} />
      <div className="info">
        <p className="name">{data.ten}</p>
        <span className="price">
          {data.giasanpham.length > 0
            ? data.giasanpham[data.giasanpham.length - 1].gia + "Đ"
            : "liên hệ"}
        </span>
        <span>{data.sach ? "sách" : "văn phòng phẩm"}</span>
      </div>
    </Link>
  );
}

export default ItemSearch;
