import RegisterForm from "./RegisterForm";
import "./Register.scss";
import FormVerfifyOPT from "../FormVerfifyOPT";
import FormInput from "../../../FormInput";
import { useState } from "react";
import { createUserService } from "../../../../services/userService";
import { Spinner } from "react-bootstrap";

function Register() {
  const [values, setValues] = useState({
    ho: "",
    ten: "",
    username: "",
    email: "",
    ngaysinh: "",
    gioitinh: true,
    sdt: "",
    diachi: "",
    password: "",
    confirmPassword: "",
  });

  const [isshowFormVerify, setIsShowFromVerify] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const inputs = [
    {
      id: 9,
      name: "ho",
      type: "text",
      placeholder: "Họ",
      label: "Họ",
      required: true,
    },
    {
      id: 10,
      name: "ten",
      type: "text",
      placeholder: "Tên",
      label: "Tên",
      required: true,
    },
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
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
    {
      id: 3,
      name: "ngaysinh",
      type: "date",
      placeholder: "ngaysinh",
      required: true,
      label: "ngaysinh",
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
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    {
      id: 6,
      label: "Giới tính",
      name: "gioitinh",
      typeInput: "select",
      options: [
        {
          value: true,
          title: "Nam",
        },
        {
          value: false,
          title: "Nữ",
        },
      ],
    },
    {
      id: 7,
      name: "sdt",
      type: "text",
      placeholder: "Số điện thoại",
      errorMessage: "sdt is not required!",
      label: "Số điện thoại",
      pattern: "^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$",
      required: true,
    },
    {
      id: 8,
      typeInput: "textarea",
      name: "diachi",
      type: "text",
      placeholder: "Địa chỉ",
      required: true,
      label: "Địa chỉ",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res = await createUserService(values);
      if (res?.data?.error === 0) {
        setLoading(false);
        setIsShowFromVerify(true);
      }
      if (res.date.code === 1) {
        setLoading(false);
        setMessage("username đã tồn tại");
      }
      if (res.date.code === 2) {
        setLoading(false);
        setMessage("email đã tồn tại");
      }
      if (res.date.code === 3) {
        setLoading(false);
        setMessage("Số điện thoại đã tồn tại");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const checkValue = () => {
    const {
      ho,
      ten,
      username,
      email,
      ngaysinh,
      gioitinh,
      sdt,
      diachi,
      password,
      confirmPassword,
    } = values;

    const regexPass =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    const regexsdt =
      /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
    const regexUsername = /^[A-Za-z0-9]{3,16}$/;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (
      ho === "" ||
      ten === "" ||
      username === "" ||
      email === "" ||
      ngaysinh === "" ||
      gioitinh === "" ||
      sdt === "" ||
      password === "" ||
      confirmPassword === "" ||
      diachi === ""
    ) {
      return true;
    }

    if (
      !sdt.match(regexsdt) ||
      !password.match(regexPass) ||
      !email.match(regexEmail) ||
      !username.match(regexUsername)
    ) {
      return true;
    }
    if (password !== confirmPassword) {
      return true;
    }
    return false;
  };

  return (
    <div className="register-page">
      {/* <div className="container">
        <RegisterForm />
      </div> */}
      {isshowFormVerify ? (
        <FormVerfifyOPT user={values} initialMinute={2} />
      ) : (
        <div className="register-form">
          <span className="text-danger">{message}</span>
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
              <div>{loading ? <Spinner animation="border" /> : "Đăng ký"}</div>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Register;
