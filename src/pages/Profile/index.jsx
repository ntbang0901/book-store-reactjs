import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import SettingsPage from "../SettingsPage";
import SideBar from "../SettingsPage/SideBar";

function Profile() {
  const localtion = useLocation();
  const history = useHistory();

  console.log(localtion);
  useEffect(() => {
    if (localtion.pathname === "/account") {
      history.push("/account/profile");
    }
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <SettingsPage />
    </div>
  );
}

export default Profile;
