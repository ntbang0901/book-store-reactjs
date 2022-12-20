import Tippy from "@tippyjs/react/headless";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Wrapper as PopperWrapper } from "../Popper";
import * as actions from "../../../../actions";
import MenuItem from "./MenuItem";
function MenuAccount({ children }) {
  const history = useHistory();
  const localtion = useLocation();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.auth.currentUser);
  console.log(localtion);
  const handleLogout = () => {
    if (localtion.pathname === "/admin") {
      dispatch(actions.Logout(currentUser, history));
    } else {
      dispatch(actions.Logout(currentUser));
    }
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
      title: "Quản lý",
      icon: "https://icons.veryicon.com/png/o/miscellaneous/yuanql/icon-admin.png",
      to: "/admin",
      isAdmin: true,
    },
    {
      title: "Đánh giả sản phẩm",
      icon: "https://icons.veryicon.com/png/o/miscellaneous/iconpack-2/rating-5.png",
      to: "/",
    },
    {
      title: "Lưu ý",
      icon: "https://media.istockphoto.com/id/912742254/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-gi%E1%BA%A5y-v%C3%A0-b%C3%BAt.jpg?s=612x612&w=is&k=20&c=PBHK26J0MB-lTIiWA5kCrouCbgrQt6W24DDIF6tXvD8=",
      to: "/luuy",
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
    {
      title: "Lưu ý",
      icon: "https://media.istockphoto.com/id/912742254/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-gi%E1%BA%A5y-v%C3%A0-b%C3%BAt.jpg?s=612x612&w=is&k=20&c=PBHK26J0MB-lTIiWA5kCrouCbgrQt6W24DDIF6tXvD8=",
      to: "/luuy",
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
            {menu.map((item, index) => {
              if (
                item.isAdmin &&
                currentUser &&
                currentUser?.loaiuserid === 2
              ) {
                return;
              } else {
                return <MenuItem key={index} data={item} />;
              }
            })}
          </PopperWrapper>
        </div>
      )}>
      {children}
    </Tippy>
  );
}

export default MenuAccount;
