import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash, faIdCard } from '@fortawesome/free-regular-svg-icons'
import './accountForm.css'
import toast from 'react-hot-toast'

const SignInForm = () => {

    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const InputDiv = ({ icon, textName, type }) => {

        const [data, setData] = useState('');

        return (
            <div className='inputDiv'>
                <span className='iconSpan'>{icon}</span>
                <input onChange={(e) => setData(e.target.value)} value={data} type={type || "text"} />
                <span className={`textSpan ${data !== "" ? "writtenSpan" : ""}`}>{textName}</span>
            </div>
        )
    }

    const handleData = () => {
        if(!password.trim() || !email.trim() || !lastName.trim() || !firstName.trim()){
            return toast.error("Please Enter All Details", {style: {fontWeight: "600"}})
        }

        if(!email.includes("@")){
            return toast.error("Please Enter a Valid Email", {style: {fontWeight: "600"}})
        }

        const userData = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim(),
            password: password.trim()
        }

        console.log(userData);

        setLastName('');
        setFirstName('');
        setPassword('');
        setEmail('');
    }

    return (
        <div className='signInForm'>
            <div className="overlaySignInForm">
                <div>

                    <div className='startForFree'>Start For Free</div>
                    <div className='createYourAccount'>Create Your Account<span>.</span></div>
                    <div className='alreadyAccount'>Already A Member?<span>Log in</span></div>

                    <div className='namingDiv'>

                        <div className="inputDiv">
                            <span className={`textSpan ${firstName!==""?"writtenSpan":null}`}>first name</span>
                            <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" />
                            <span className="iconSpan"><FontAwesomeIcon icon={faIdCard} /></span>
                        </div>

                        <div className="inputDiv">
                            <span className={`textSpan ${lastName!==""?"writtenSpan":""}`}>last name</span>
                            <input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" />
                            <span className='iconSpan'><FontAwesomeIcon icon={faIdCard} /></span>
                        </div>

                    </div>
                    <div className='mainEmailInputDiv'>

                        <div className="inputDiv">
                            <span className={`textSpan ${email!==""?"writtenSpan":""}`}>email</span>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
                            <span className='iconSpan'><FontAwesomeIcon icon={faEnvelope} /></span>
                        </div>

                    </div>

                    <div className='mainEmailInputDiv mainPassDiv'>

                        <div className="inputDiv">
                            <span className={`textSpan ${password ? "writtenSpan" : null}`}>Password</span>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPass ? "text" : "password"} />
                            <span onClick={() => setShowPass((prev) => !prev)} className='iconSpan'><FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} /></span>
                        </div>

                    </div>

                    <div className='btnDivAccount'>
                        <button onClick={handleData}>Create Account</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignInForm