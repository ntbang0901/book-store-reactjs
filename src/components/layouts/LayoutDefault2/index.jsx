import HeaderDefault from "./HeaderDefault";
import "./LayoutPayment.scss";

function LayoutDefault2({ children, title, to }) {
  return (
    <div className="warpper ">
      <HeaderDefault title={title} to={to} />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default LayoutDefault2;
