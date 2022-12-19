import "bootstrap/dist/css/bootstrap.css";
import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.scss";

import { lazy } from "react";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./ScrollToTop";
import { instance } from "./utils/request";
import { useDispatch } from "react-redux";
import * as actions from "./actions";
import { getRefreshToken } from "./services/authService";
import { Spinner } from "react-bootstrap";

const ComponentRoute = lazy(() => {
  return import("./routes/ComponentRoute");
});

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="text-primary text-center display-1">
            <Spinner animation="border"></Spinner>
          </div>
        }>
        <ScrollToTop />
        <div className="App">{<ComponentRoute />}</div>
        <ToastContainer
          position="bottom-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
      </Suspense>
    </Router>
  );
}

export default App;
