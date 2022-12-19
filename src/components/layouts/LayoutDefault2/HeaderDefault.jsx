import { Link } from "react-router-dom";

function HeaderDefault({ title, to }) {
  return (
    <header className="header ">
      <div className="container header-payment ">
        <Link to={to} className="logo">
          <img src="/logo2.svg" />
        </Link>
        <span className="header-title">| {title}</span>
      </div>

      {/* <div className={`header-2 ${activeHeader ? "active" : ""}`}>
          <nav className="navbar">
            <Link to="/">home</Link>
            <a href="#featured">featured</a>
            <a href="#arrivals">arrivals</a>
            <a href="#reviews">reviews</a>
            <a href="#blogs">blogs</a>
          </nav>
        </div> */}
    </header>
  );
}

export default HeaderDefault;
