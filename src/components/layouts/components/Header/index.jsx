import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { routesConfig } from "../../../../config/routes";
import MenuAccount from "../MenuAccountItem";
import SearchBox from "../SearchBox";

import "./Header.scss";

function Header({ handleShowFormLogin }) {
  const numberCart = useSelector((state) => state.carts.numberCart);

  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);

  const currentUser = useSelector((state) => state.auth.currentUser);

  const isLogin = useSelector((state) => state.auth.isLogin);

  const headerRef = useRef(null);
  const [sticky, setSticky] = useState(false);

  // handle scroll event
  const handleScroll = () => {
    if (window.pageYOffset > 80) {
      setSticky(true);
    }
    if (window.pageYOffset <= 90) {
      setSticky(false);
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScrollEvent, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [sticky]);

  const getFullname = () => {
    if (currentUser) {
      return currentUser.ten;
    }
  };

  return (
    <>
      <header className={`header`} ref={headerRef}>
        <div className={`header-1`}>
          <Link
            onClick={() => (document.title = `Home`)}
            to={routesConfig.home}
            className="logo">
            <img src="/logo2.svg" />
          </Link>

          <SearchBox />
          <div className="icons">
            <div id="search-btn" className="fas fa-search"></div>
            <a href="#" className="fas fa-heart "></a>
            <Link
              to={isLogin ? routesConfig.cart : routesConfig.login}
              onClick={() => (document.title = "Giỏ hàng")}
              className="cart-icon">
              <img
                className=""
                src="https://lzd-img-global.slatic.net/g/tps/tfs/TB1xEeTdBGw3KVjSZFDXXXWEpXa-75-66.png"
              />
              <span className="numbercart">{numberCart}</span>
            </Link>

            {/* <Link
              to={routesConfig.login}
              id="login-btn"
              className="fas fa-user"></Link>{" "} */}
            <MenuAccount>
              <a
                onClick={() =>
                  (document.title = `${
                    isLogin && isLogin ? "Băng" : "Đăng nhập"
                  }`)
                }
                id="login-btn"
                className="">
                {isLogin && isLogin ? (
                  getFullname()
                ) : (
                  <>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 25 25"
                      style={{ transform: "scale(1.2)" }}
                      height="25px"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                    </svg>
                  </>
                )}
              </a>
            </MenuAccount>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="h-9 w-9">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
            </svg> */}
          </div>
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
      <nav className="bottom-navbar">
        <a href="#home" className="fas fa-home"></a>
        <a href="#featured" className="fas fa-list"></a>
        <a href="#arrivals" className="fas fa-tags"></a>
        <a href="#reviews" className="fas fa-comments"></a>
        <a href="#blogs" className="fas fa-blog"></a>
      </nav>
    </>
  );
}

export default Header;
