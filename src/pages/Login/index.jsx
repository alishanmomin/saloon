import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const Login = () => {
  const [eyeIcon, setEyeIcon] = useState(true);
  const [inputValues, setInputValues] = useState({})
  const [required, setRequired] = useState(false)
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;


  // handle value change
  const handleValueChange = (e) => {
    setInputValues({ ...inputValues, [e?.target?.name]: e?.target?.value })
  }
  // handle login
  const handleLogin = () => {
    if (!inputValues?.email) {
      setRequired("email")
    } else if (!emailRegex.test(inputValues?.email)) {
      setRequired("emailValid")
    } else if (!inputValues?.password) {
      setRequired("password")
    } else {
      setRequired("")
      window.localStorage.setItem("token", true);
      window.location.reload(true);
    }

  };

  const handleKey = (e) => {
    if (e?.key === "Enter") {
      handleLogin()
    }
  }


  return (
    <div className="login">
      <div className="login_boxLeft">

      </div>

      <div className="login_boxRight">
        <div className="login_loginSec">
          <img className="login_logo" src={logo} alt="" />
          <p className="login_topHead">SUPER ADMIN</p>
          <p className="login_topPara">Enter your email and password to sign in</p>

          <div className="login_inputWrap">
            <label>Email</label>
            <input onChange={(e) => handleValueChange(e)} value={inputValues?.email} name="email" type="text" placeholder='Enter Email' />
            {required === "email" && <p className="login_required">Email Required</p>}
            {required === "emailValid" && <p className="login_required">Email Valid Required</p>}
          </div>

          <div className="login_inputWrap">
            <label>Password</label>
            <div className="login_inputsec">
              <input type={eyeIcon ? "password" : "text"} name="password" value={inputValues?.password} onChange={(e) => handleValueChange(e)} placeholder='Enter Password' />
              {!eyeIcon ? <IoIosEye className="eye" onClick={() => setEyeIcon(!eyeIcon)} /> : <IoIosEyeOff className="eye" onClick={() => setEyeIcon(!eyeIcon)} />}
            </div>
            {required === "password" && <p className="login_required">Password Required</p>}
          </div>

          {/* <div className="login_rememberMe">
            <label className="switch">
              <input
                // onChange={() => handleToggler(res)}
                type="checkbox"
              // checked={res?.isActive === true ? true : false}
              />
              <span className="slider round"></span>
            </label>
            <p>Remember me</p>
          </div> */}

          <button onClick={handleLogin} onKeyDown={(e) => handleKey(e)} className="login_btn">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
