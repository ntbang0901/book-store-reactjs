import React, { useState, useEffect, useRef } from "react";
import { Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { updateUser } from "../../services/userService";

function Countrystatecity({ user, FecthData }) {
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [country, setCountry] = useState([]);
  const [st, setSt] = useState([]);
  const [city, setCity] = useState([]);
  const [address, setAddress] = useState("");
  const [isShowFrom, setIsShowForm] = useState(user?.diachi ? false : true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getcountry = async () => {
      const rescountry = await fetch(
        "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
      );
      const rescon = await rescountry.json();
      setCountry(await rescon);
    };
    getcountry();
  }, []);

  const huyenRef = useRef();

  const handlecountry = (event) => {
    const getcountryid = event.target.value;
    const resst = country.find((item) => item.Id === event.target.value);
    setAddress(resst.Name);
    huyenRef.current.value = "";
    setSt(resst.Districts);
    setCity([]);
  };

  const handlestate = (event) => {
    const resst = st.find((item) => item.Id === event.target.value);
    setAddress(resst.Name + ", " + address);
    setCity(resst.Wards);
  };
  const handleXa = (event) => {
    const resst = city.find((item) => item.Id === event.target.value);
    setAddress(resst.Name + ", " + address);
  };

  // useEffect(() => {
  //   const getcity = async () => {
  //     const rescity = await fetch(
  //       `http://localhost/devopsdeveloper/city/getcity/${stateid}`
  //     );
  //     const rcity = await rescity.json();
  //     setCity(await rcity);
  //   };
  //   getcity();
  // }, [stateid]);

  const handleSubmit = async () => {
    if (address === "") {
      return;
    }
    try {
      let res = await updateUser({ diachi: address });
      if (res.data.code === 200) {
        FecthData();
        setIsShowForm(false);
      } else {
        setMessage(res.data.message);
      }
    } catch (error) {}
  };

  const changeAddress = () => {
    setIsShowForm(true);
    setAddress("");
  };

  return (
    <React.Fragment>
      <Container className="content-select-address">
        <div className="row">
          <div className="col-sm-12">
            {message}
            {isShowFrom ? (
              <div>
                ?????a ch???:
                <input
                  className="input-address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <form className="row g-3">
                  <div className="col-md-3">
                    <label className="form-label">T???nh/Th??nh Ph??? </label>
                    <select
                      name="country"
                      className="form-control p-2"
                      onChange={(e) => handlecountry(e)}>
                      <option value="">--T???nh/Th??nh Ph???--</option>
                      {country.map((getcon, index) => (
                        <option key={index} value={getcon.Id}>
                          {getcon.Name}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Qu???n/Huy???n</label>
                    <select
                      className="form-select"
                      name="state"
                      ref={huyenRef}
                      onChange={(e) => handlestate(e)}>
                      <option value="">--Qu???n/Huy???n--</option>
                      {st.map((getst, index) => (
                        <option key={index} value={getst.Id}>
                          {getst.Name}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Ph?????ng/X??</label>
                    <select
                      className="form-select"
                      name="city"
                      onChange={(e) => handleXa(e)}>
                      <option value="">--Ph?????ng/X??--</option>
                      {city.map((gcity, index) => (
                        <option key={index} value={gcity.Id}>
                          {gcity.Name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-3">
                    <button
                      onClick={() => handleSubmit()}
                      type="button"
                      className="btn btn-save-address ">
                      L??u
                    </button>
                    <button
                      onClick={() => setIsShowForm(false)}
                      type="button"
                      className="btn btn-save-address ">
                      Hu???
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="address">
                <span>?????a ch???:{user?.diachi}</span>
                <button
                  className="btn-change-address"
                  onClick={() => changeAddress()}>
                  Thay ?????i
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Countrystatecity;
