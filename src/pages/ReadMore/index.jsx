import { Link } from "react-router-dom";

function ReadMore({ activeHeader }) {
  return (
    <div>
      <iframe
        width="1170"
        height="800"
        src="https://vnexpress.net/"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default ReadMore;
