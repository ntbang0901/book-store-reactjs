import { useEffect } from "react";
import "./PageNotFound.scss";

function PageNotFound() {
  useEffect(() => {
    document.title = "Page Not Found";
  });

  return <div className="page-not-found">Page Not Found 404 </div>;
}

export default PageNotFound;
