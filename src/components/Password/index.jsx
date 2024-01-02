import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { FaLock } from "react-icons/fa";

const Password = () => {
    const [eyeIcon, setEyeIcon] = useState(false);
    const [eyeIcon2, setEyeIcon2] = useState(false);
    const [pass, setPass] = useState("");
    const [cPass, setCpass] = useState("");

    const handleUpdate = () => {
        toast.success("Password updated succesfully")
    }
    return (
        <div className='setPassword'>
            <p className='setPassword_title'>Change Password</p>
            <div className='setPassword_wrap'>
                <label className='setPassword_label'>New Password</label>
                <div className='setPassword_inputSec'>
                    {/* <img src={lockIcon} alt="lockIcon" className='lockIcon' /> */}
                    <FaLock className='lockIcon' />
                    <input value={pass} type={eyeIcon === false ? "password" : "text"} placeholder='New Password' onChange={(e) => setPass(e.target.value)} />
                    <i
                        onClick={() => setEyeIcon(!eyeIcon)}
                        className={
                            eyeIcon === false
                                ? "fa-regular showEye fa-eye-slash"
                                : "fa-regular showEye fa-eye"
                        }
                    ></i>

                </div>

                <br />
                <label className='setPassword_label'>Confirm Password</label>
                <div className='setPassword_inputSec'>
                    <FaLock className='lockIcon' />
                    {/* <img src={lockIcon} alt="lockIcon" className='lockIcon' /> */}
                    <input value={cPass} type={eyeIcon2 === false ? "password" : "text"} placeholder='Confirm Password' onChange={(e) => setCpass(e.target.value)} />
                    <i
                        onClick={() => setEyeIcon2(!eyeIcon2)}
                        className={
                            eyeIcon2 === false
                                ? "fa-regular showEye fa-eye-slash"
                                : "fa-regular showEye fa-eye"
                        }
                    ></i>

                    <div className='setPassword_update'>
                        <button onClick={handleUpdate}>Update</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Password