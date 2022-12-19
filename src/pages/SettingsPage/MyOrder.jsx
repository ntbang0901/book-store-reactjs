import { useState } from "react";
import { useHistory } from "react-router-dom";

function MyOrder() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState(null);
  const history = useHistory();
  const handleOnChange = (e) => {
    const { value } = e.target;
    let pattern = /[^0-9]/g;
    if (value.match(pattern)) return;
    if (value.length <= 6) setText(value);
  };
  const handleVerifyOTP = () => {
    if (text === "123456") {
      history.push("/");
    } else {
      setMessage("OPT không chính xác");
    }
  };

  return (
    <div>
      OTP:
      <input type="text" onChange={(e) => handleOnChange(e)} value={text} />
      <button type="button" onClick={() => handleVerifyOTP()}>
        Gửi
      </button>
      {message ? message : ""}
    </div>
  );
}

export default MyOrder;
