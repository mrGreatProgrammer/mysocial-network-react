import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Input from '../../components/InputForms/Input'
import { sendMail } from '../../redux/auth-reducer'

function ForgotPassword() {
    let [mailPass, setMailPass] = useState("")
    let dispatch = useDispatch()

  return (
    <div className="forgot__password">
        <div className="form_item">
        {/* <img src={props.mailImg} alt="" className="img_icon" />{" "} */}
        <Input
          type="email"
          name="email"
          id="forgot_password_email"
          placeholder="Email"
          className="input"
          value={mailPass}
          setValue={setMailPass}
        />
      </div>
      <div className="form_item">
        <button onClick={() => dispatch(sendMail(mailPass))}>send me email</button>
      </div>
    </div>
  )
}

export default ForgotPassword