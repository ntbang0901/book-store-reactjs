import RegisterForm from "./RegisterForm";
import "./Register.scss";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import FormVerfifyOPT from "../../components/layouts/components/FormVerfifyOPT";
import FormInput from "../../components/FormInput";
import { fogotPassword } from "../../services/userService";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function ForgotPassword({}) {
  const [values, setValues] = useState({
    email: "",
  });
  const history = useHistory();
  const [isshowFormVerify, setIsShowFromVerify] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const inputs = [
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email diachi!",
      label: "Email",
      pattern: `^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$`,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res = await fogotPassword(values.email);
      if (res.data.error === 0) {
        setLoading(false);
        setIsSuccess(true);
        setTimeout(() => {
          history.push("/login");
        }, 2000);
      }
    } catch (error) {}
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const checkValue = () => {
    const { email } = values;
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "") {
      return true;
    }
    if (!email.match(regexEmail)) {
      return true;
    }

    return false;
  };

  return (
    <div className="register-page">
      {/* <div className="container">
        <RegisterForm />
      </div> */}

      {isSuccess === true ? (
        <div className="success">
          <img
            width={"50px"}
            src="http://taxiadvertisingvn.com/wp-content/uploads/2020/02/icon-tick.png"
          />
          <span style={{ fontSize: "16px" }}>
            Gửi thành công vui lòng kiểm tra mail của bạn
          </span>
        </div>
      ) : (
        <div>
          <span className="message-error">{message}</span>

          <div className="register-form">
            <form onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <FormInput
                  key={input.id + input.name}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}

              <button
                className={"btn-register " + (checkValue() ? "disabled" : "")}
                type="submit"
                disabled={checkValue() || loading}
                onClick={(e) => handleSubmit(e)}>
                <div>{loading ? <Spinner animation="border" /> : "Gửi"}</div>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
