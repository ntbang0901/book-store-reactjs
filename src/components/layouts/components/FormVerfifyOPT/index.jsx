import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actions from "../../../../actions";
import { createOtp, verifyOTP } from "../../../../services/userService";
import "./FormVerfifyOPT.scss";

function FormVerfifyOPT({
  goBack,
  user,
  initialMinute = 0,
  initialSeconds = 0,
}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [text, setText] = useState("");
  const [messageOTP, setMessageOTP] = useState(null);

  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const handleOnChange = (e) => {
    const { value } = e.target;
    let pattern = /[^0-9]/g;
    if (value.match(pattern)) return;
    if (value.length <= 6) setText(value);
  };

  const handleVerifyOTP = async () => {
    try {
      let res = await verifyOTP(user.email, text);
      if (res.data.code === 200) {
        await dispatch(
          actions.LoginStart(
            { username: user.username, pwd: user.password },
            history
          )
        );
      } else {
        setMessageOTP(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleResend = async () => {
    try {
      setLoading(true);
      let res = await createOtp(user.email);
      if (res.data.message === "ok") {
        setMinutes(2);
        setLoading(false);
      }
    } catch (error) {}
  };

  return (
    <div className="form-opt">
      <div className="content">
        {/* <h3 className="btn-goback" onClick={() => goBack()} type="button">
          <img
            width={"40px"}
            src="https://img.icons8.com/pastel-glyph/512/circled-left.png"
            alt="goback"
          />
        </h3> */}
        <span className="title">
          Vui lòng mở mail đăng ký tài khoản để xem mã xác nhận kích hoạt tài
          khoản
        </span>
        <span className="text-danger"> {messageOTP ? messageOTP : ""}</span>

        <div className="form-group row form-input-otp">
          <label
            htmlFor="inputPassword"
            className="col-sm-3 col-form-label title-form">
            <span className="title">Mã xác nhận</span>
          </label>
          <div className="col-sm-9 input-form">
            <input
              onChange={(e) => handleOnChange(e)}
              type="text"
              className={"form-control"}
              value={text}
              id="inputPassword"
            />
          </div>
        </div>
        <div className="form-group row form-input-otp">
          <label
            htmlFor="inputPassword"
            className="col-sm-3 col-form-label title-form"></label>
          <div className="col-sm-9 input-form">
            <button
              className="btn-send-opt"
              type="submit"
              onClick={(e) => handleVerifyOTP(e)}>
              Gửi
            </button>
            <div>
              <div className="count-down">
                <h2>
                  {" "}
                  {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </h2>
                <button
                  className="btn-resend"
                  disabled={loading}
                  onClick={() => handleResend()}>
                  {loading ? <Spinner animation="border" /> : "Gửi lại OTP"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormVerfifyOPT;
