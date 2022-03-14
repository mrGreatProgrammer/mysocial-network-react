import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Input from "../../../components/InputForms/Input";
import { login } from "../../../redux/auth-reducer";

function LogIn(props) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <div ref={props.loginRef} className="log_in_form log_in_form--notactive">
      <div className="form_item">
        <img src={props.mailImg} alt="" className="img_icon" />{" "}
        <Input
          type="email"
          name="email"
          id="log_in_email"
          placeholder="Email"
          className="input"
          value={email}
          setValue={setEmail}
        />
      </div>
      <div className="form_item">
        <button onClick={props.showPassword}>
          <img
            src={props.passwordImg}
            alt=""
            id="password_img_log_in"
            className="img_icon"
          />
        </button>
        <Input
          type={props.passwordInput}
          name="password"
          id="log_in_password"
          placeholder="Password"
          className="input"
          value={password}
          setValue={setPassword}
        />
      </div>
      <div className="form_item">
        <NavLink to={"/forgotpassword"}> forgot password ? </NavLink>
      </div>
      <div className="form_item">
        <button
          className="create_account_act reg-btn"
          onClick={() => dispatch(login(email, password))}
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default LogIn;
