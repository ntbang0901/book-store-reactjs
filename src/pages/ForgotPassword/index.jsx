import RegisterForm from "./RegisterForm";
import "./Register.scss";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import FormVerfifyOPT from "../../components/layouts/components/FormVerfifyOPT";
import FormInput from "../../components/FormInput";
import { sendOtpFogot, updatePassFogot } from "../../services/userService";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function ForgotPassword({}) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const history = useHistory();
  const [isshowFormVerify, setIsShowFromVerify] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {}, [isVerified]);

  const inputs = [
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email diachi!",
      label: "Email",
      pattern: `^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$`,
      IsverifiedOTP: false,
      required: true,
    },

    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
      IsverifiedOTP: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      IsverifiedOTP: true,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (isVerified === false) {
      let sendOtp = await sendOtpFogot(values);
      if (sendOtp.data.error === 0) {
        setIsShowFromVerify(true);
        setLoading(false);
      }
      try {
      } catch (error) {
        console.log(error);
      }
    } else {
      let update = await updatePassFogot({
        email: values.email,
        password: values.password,
      });
      console.log(update);
      if (update.data.code === 200) {
        setLoading(false);
        history.push("/login");
      }
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const checkValue = () => {
    const {
      email,

      password,
      confirmPassword,
    } = values;

    const regexPass =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (isVerified === false) {
      if (email === "") {
        return true;
      }
      if (!email.match(regexEmail)) {
        return true;
      }
    } else {
      if (!password.match(regexPass)) {
        return true;
      }
      if (password !== confirmPassword) {
        return true;
      }
    }

    return false;
  };

  console.log(isVerified, isshowFormVerify);

  return (
    <div className="register-page">
      {/* <div className="container">
        <RegisterForm />
      </div> */}

      {isshowFormVerify ? (
        <FormVerfifyOPT
          setIsVerified={setIsVerified}
          setIsShowFromVerify={setIsShowFromVerify}
          type="fogot"
          user={values}
          initialMinute={2}
        />
      ) : (
        <div>
          <span className="message-error">{message}</span>

          <div className="register-form">
            <form onSubmit={handleSubmit}>
              {inputs.map((input) => {
                if (input.IsverifiedOTP === false) {
                  if (isVerified === false) {
                    return (
                      <FormInput
                        key={input.id + input.name}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                      />
                    );
                  } else {
                    return;
                  }
                }
                if (input.IsverifiedOTP === true && isVerified === true) {
                  return (
                    <FormInput
                      key={input.id + input.name}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  );
                }
              })}

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
