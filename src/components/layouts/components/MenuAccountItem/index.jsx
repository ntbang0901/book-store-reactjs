import Tippy from "@tippyjs/react/headless";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Wrapper as PopperWrapper } from "../Popper";
import * as actions from "../../../../actions";
import MenuItem from "./MenuItem";
function MenuAccount({ children }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.auth.currentUser);

  const handleLogout = () => {
    console.log(currentUser);

    dispatch(actions.Logout(currentUser));
  };

  const menuProfileLogin = [
    {
      title: "Đơn hàng của tôi",
      icon: "https://lzd-img-global.slatic.net/g/tps/tfs/TB1xEeTdBGw3KVjSZFDXXXWEpXa-75-66.png",
      to: "/cart",
    },
    {
      title: "Quản lý đổi trả",
      icon: "https://icons.veryicon.com/png/o/business/purchase-sale-and-inventory-management/return-management-of-online-shopping.png",
      to: "/",
    },
    {
      title: "Thông báo của tôi",
      icon: "https://icons.veryicon.com/png/o/internet--web/truckhome/notification-3.png",
      to: "/",
    },
    {
      title: "Tài khoản của tôi",
      icon: "https://icons.veryicon.com/png/o/file-type/linear-icon-2/user-132.png",
      to: "/account/profile",
    },
    {
      title: "Đánh giả sản phẩm",
      icon: "https://icons.veryicon.com/png/o/miscellaneous/iconpack-2/rating-5.png",
      to: "/",
    },
    {
      title: "Đăng xuất",
      icon: "https://icons.veryicon.com/png/o/commerce-shopping/online-retailers/logout-15.png",
      onClick: () => handleLogout(),
    },
  ];

  const menuProfileNotLogin = [
    {
      title: "Đăng nhập",
      icon: "https://icons.veryicon.com/png/o/miscellaneous/convenient-svn-icon/login-10.png",
      to: "/login",
    },
    {
      title: "Đăng ký",
      icon: "image/register-svgrepo-com.svg",
      to: "/register",
    },
  ];

  const isLogin = useSelector((state) => state.auth.isLogin);

  const menu = isLogin ? menuProfileLogin : menuProfileNotLogin;

  return (
    <Tippy
      interactive
      placement="bottom"
      render={(attrs) => (
        <div className="menu-account-list" tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {menu.map((item, index) => (
              <MenuItem key={item + index} data={item} />
            ))}
          </PopperWrapper>
        </div>
      )}>
      {children}
    </Tippy>
  );
}

export default MenuAccount;
