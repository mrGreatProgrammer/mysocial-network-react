import { useState } from "react";
import Input from "../../../components/InputForms/Input";
import { registration } from "../../../redux/auth-reducer";

function SignIn(props) {
  let [userName, setUserName] = useState("");
  let [secondName, setSecondName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  return (
    <div ref={props.signinRef} className="sign_up_form sign_up_form--active">
      <div className="form_item">
        <img src={props.userImg} alt="" className="img_icon" />{" "}
        <Input
          type="text"
          name="sign_up_name"
          id="sign_up_name"
          placeholder="First Name"
          className="input"
          value={userName}
          setValue={setUserName}
        />
      </div>
      <div className="form_item">
        <img src={props.userImg} alt="" className="img_icon" />{" "}
        <Input
          type="text"
          name="sign_up_last_name"
          id="sign_up_last_name"
          placeholder="Last Name"
          className="input"
          value={secondName}
          setValue={setSecondName}
        />
      </div>
      <div className="form_item">
        <img src={props.mailImg} alt="" className="img_icon" />{" "}
        <Input
          type="email"
          name="sign_up_email"
          id="sign_up_email"
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
            id="password_img_sign_up"
            className="img_icon"
          />
        </button>
        <Input
          type={props.passwordInput}
          name="sign_up_password"
          id="sign_up_password"
          placeholder="Password"
          className="input"
          value={password}
          setValue={setPassword}
        />
      </div>
      <div className="form_item">
        <button
          className="create_account_act reg-btn"
          onClick={() => registration(userName, secondName, email, password)}
        >
          Create An Account
        </button>
      </div>
    </div>
  );
}

export default SignIn;
