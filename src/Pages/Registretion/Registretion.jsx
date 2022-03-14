import { useRef, useState } from "react";
import LogIn from "./LogIn/LogIn";
import "./Registration.css";
import SignIn from "./SignIn/SignIn";
import hiddenEye from "../../imgs/registr/hidden.png";
import opennedEye from "../../imgs/registr/view.png";
import mailImg from "../../imgs/registr/mail.png";
import userImg from "../../imgs/registr/user.png";
import { useSelector } from "react-redux";
import Square from "../../components/SquareAnimetion/Square";

function Registration() {
  let loginRef = useRef();
  let signinRef = useRef();
  let loginBtnRef = useRef();
  let signinBtnRef = useRef();
  const responseStatusMessage = useSelector(
    (state) => state.auth.responseMessage
  );

  let [passwordImg, setPasswordImg] = useState(hiddenEye);
  let [passwordInput, setPasswordInput] = useState("password");

  function showPassword() {
    if (passwordInput === "password") {
      setPasswordImg(opennedEye);
      setPasswordInput("text");
    } else if (passwordInput === "text") {
      setPasswordImg(hiddenEye);
      setPasswordInput("password");
    }
  }

  function chooseSignIn() {
    signinRef.current.className = "sign_up_form sign_up_form--active";
    loginRef.current.className = "log_in_form log_in_form--notactive";
    signinBtnRef.current.className = "sign_up_btn";
    loginBtnRef.current.className = "log_in_btn reg-notactive";
  }
  function chooseLogIn() {
    loginRef.current.className = "log_in_form log_in_form--active";
    signinRef.current.className = "sign_up_form sign_up_form--notactive";
    signinBtnRef.current.className = "sign_up_btn reg-notactive";
    loginBtnRef.current.className = "log_in_btn";
  }

  return (
    <div className="registration">
      <Square />
      <Square />
      <Square />
      <Square />

      <div className="response_status_message"> {responseStatusMessage} </div>
      <div className="coveralldiv"></div>
      <div className="enter_div">
        <div className="choose_how_enter">
          <div
            className="sign_up_btn"
            onClick={chooseSignIn}
            ref={signinBtnRef}
          >
            Sign In
          </div>
          <div
            className="log_in_btn reg-notactive"
            onClick={chooseLogIn}
            ref={loginBtnRef}
          >
            Log In
          </div>
        </div>

        <SignIn
          passwordImg={passwordImg}
          mailImg={mailImg}
          userImg={userImg}
          signinRef={signinRef}
          showPassword={showPassword}
          passwordInput={passwordInput}
        />
        <LogIn
          passwordImg={passwordImg}
          mailImg={mailImg}
          loginRef={loginRef}
          showPassword={showPassword}
          passwordInput={passwordInput}
        />
      </div>
    </div>
  );
}

export default Registration;
