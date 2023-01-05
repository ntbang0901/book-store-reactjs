import { Link } from "react-router-dom";
import "./MenuAccountItem.scss";

function MenuAccountItem({ data }) {
  return (
    <>
      {data?.to ? (
        <Link className="menu-item" to={data.to}>
          {data.icon ? (
            <img
              width="18"
              className="menu-item-icon"
              src={data?.icon}
              alt={data.title}
            />
          ) : (
            ""
          )}
          <span className="menu-item__title">{data.title}</span>
        </Link>
      ) : (
        <div className="menu-item" onClick={data.onClick}>
          <img
            width="18"
            className="menu-item-icon"
            src={data?.icon}
            alt={data.title}
          />
          <span className="menu-item__title">{data.title}</span>
        </div>
      )}
    </>
  );
}

export default MenuAccountItem;
