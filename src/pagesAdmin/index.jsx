import Dashboard from "./DashBoard";
import Sidebar from "./SideBar";

function HomePageAdmin() {
  return (
    <div className="container-fluid" style={{ fontSize: "14px" }} id="main">
      <div className="row row-offcanvas row-offcanvas-left">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default HomePageAdmin;
