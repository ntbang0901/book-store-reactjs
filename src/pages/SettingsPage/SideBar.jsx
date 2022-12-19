import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function SideBar({ routes }) {
  const currentUser = useSelector((state) => state.auth.currentUser);
  console.log(currentUser);
  return (
    <div className="sidebar-nav" style={{ padding: "10px" }}>
      <div className="sidebar-nav-avatar">
        <div className="profile">
          <img
            className="avatar-image"
            src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-6.png"
            alt="avatar"
          />
          <span className="name">{currentUser?.ten}</span>
        </div>
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {routes.map((route) => (
          <li key={route.path} className="sidebar-nav-item">
            <NavLink
              to={route.path}
              exact={route.exact}
              className="sidebar-nav-item_title"
              activeClassName="is-active">
              <span>{route.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
