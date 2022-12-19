import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actions from "../../../../actions";

//CSS
import { Spinner } from "react-bootstrap";
import "./Login.scss";
import FormVerfifyOPT from "../FormVerfifyOPT";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLogin = useSelector((state) => state.auth.isLogin);
  const message = useSelector((state) => state.auth.message);
  const error = useSelector((state) => state.auth.error);
  const isFetching = useSelector((state) => state.auth.isFetching);

  const [isverify, setIsverify] = useState(false);

  const clearLogin = () => {
    dispatch(actions.clearLogin());
  };

  useEffect(() => {
    clearLogin();
    if (isLogin) {
      history.push("/");
    }
    document.title = "Đăng nhập";
  }, []);

  const [user, setUser] = useState({
    username: "",
    pwd: "",
  });

  const handleOnchange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const { username, pwd } = user;

  const handlLogin = (user, e) => {
    e.preventDefault();
    dispatch(actions.loadingLogin());
    dispatch(actions.LoginStart(user, history));
  };

  const checkEmpty = () => {
    if (user.username === "" || user.pwd === "") {
      return true;
    }
    return false;
  };

  const errMessage = () => {
    console.log(message == "Login faild");
    if (message) {
      if (message === "Login faild") {
        return "Tài khoản hoặc mật khẩu không chính xác";
      }
      if (message === "user is not verified!") {
        setIsverify(true);
      }
      return message;
    }
  };

  const goBack = () => {
    setUser({
      username: "",
      pwd: "",
    });
    setIsverify(false);
    dispatch(actions.clearLogin());
  };

  return (
    <div className={`login-form-container`}>
      <div id="close-login-btn" className=""></div>
      {isverify && isverify ? (
        <FormVerfifyOPT user={user} goBack={goBack} />
      ) : (
        <form action="">
          <div style={{ height: "20px" }}>
            {error ? (
              <h4 className="text-danger">
                {message !== null
                  ? errMessage()
                  : "Tài khoản hoặc mật khẩu không chính xác"}
              </h4>
            ) : (
              ""
            )}
          </div>
          <h3>sign in</h3>
          <span>username</span>
          <input
            type="text"
            name="username"
            value={username}
            className="box"
            onChange={(e) => handleOnchange(e)}
            placeholder="enter your email"
          />
          <span>password</span>
          <input
            type="password"
            name="pwd"
            value={pwd}
            className="box"
            onChange={(e) => handleOnchange(e)}
            placeholder="enter your password"
          />
          <button
            type="submit"
            onClick={(e) => handlLogin(user, e)}
            disabled={checkEmpty()}
            className={`btn-default-bookstore ${
              checkEmpty() ? "disabled" : ""
            }`}>
            {isFetching ? <Spinner animation="border" /> : "Sign in"}
          </button>
          <p>
            forget password ? <a href="#">click here</a>
          </p>
          <p>
            don't have an account ? <a href="#">create one</a>
          </p>
        </form>
      )}
    </div>
  );
}

export default Login;
