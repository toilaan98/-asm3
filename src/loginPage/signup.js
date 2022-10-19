import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  SaveFormLocalStorage,
  setFormLocalstorage,
} from "../LocalStorage/localStore";
import { validateAction } from "../store";
import classes from "./Login.module.scss";
function SingnUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEmail, setIsEmail] = useState(null);
  const [isPassword, setIsPassword] = useState(null);
  const { enteredEmail, enteredPassword, isSign } = useSelector(
    (state) => state.validate
  );

  const arr = SaveFormLocalStorage("arrUser");

  const handleActiveUser = () => {
    // if(!!SaveFormLocalStorage('arrActive') === true){

    //   dispatch (validateAction.OnLogin(true))
    // }
    if (arr === null) {
      navigate("/register", { replace: true });
    }
    const arrActive = arr.find(
      (item) => item.email === enteredEmail && item.Password === enteredPassword
    );
    const arrActiveUser = arr.find((item) => item.email === enteredEmail);
    !!arrActiveUser ? setIsEmail(false) : setIsEmail(true);
    const arrActivePassword = arr.find(
      (item) => item.Password === enteredPassword
    );
    !!arrActivePassword === true ? setIsPassword(false) : setIsPassword(true);

    const isArr = !!arrActive;
    console.log(isArr);

    if (isArr === true) {
      setFormLocalstorage("arrActive", arrActive);
      dispatch (validateAction.OnLogin(true))
      navigate('/home',{replace : true})
    }
  };
  return (
    <div className={classes.wrapper}>
      <div>
        <img src={require("../images/banner1.jpg")} alt="hinh1" />
      </div>

      <div className={classes.formContainer}>
        <div style={{ paddingTop: "80px" }}>
          <h2>Sign In</h2>
        </div>
        <div className={classes.enteredInput}>
          <div>
            <input
              value={enteredEmail}
              onChange={(e) => {
                dispatch(validateAction.enteredEmail(e.target.value));
              }}
              type="text"
              placeholder="Email"
            />
            {isEmail && (
              <p
                style={{
                  fontSize: "19px",
                  position: "relative",
                  right: "30%",
                  textAlign: "left",
                  left: "10%",
                  color: "red",
                }}>
                Tài khoản chưa được đăng kí
              </p>
            )}
          </div>
          <div>
            {" "}
            <input
              onChange={(e) => {
                dispatch(validateAction.enteredPassword(e.target.value));
              }}
              type="text"
              placeholder="Password"
            />
            {isPassword && (
              <p
                style={{
                  fontSize: "19px",
                  position: "relative",
                  textAlign: "left",
                  left: "10%",
                  top: "-10px",
                  color: "red",
                }}>
                Mật khẩu không đúng , vui lòng kiểm tra lại
              </p>
            )}
          </div>
          <div style={{ paddingTop: "30px" }}>
            <button onClick={handleActiveUser}>Sign In</button>
          </div>
          <div style={{ paddingTop: "30px" }}>
            <span>Login?</span>{" "}
            <span>
              <NavLink to={"/register"}>Sign In</NavLink>
            </span>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default SingnUser;
