import LayoutDefault2 from "../LayoutDefault2";
import routesConfig from "../../../config/routes";

function LayoutPayment({ children }) {
  return (
    <LayoutDefault2
      children={children}
      title="Thanh toán"
      to={routesConfig.home}
    />
  );
}

export default LayoutPayment;
