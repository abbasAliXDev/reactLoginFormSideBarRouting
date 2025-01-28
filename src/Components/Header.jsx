import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ sideBarOpen, setSideBarOpen }) => {
    return (
        <header>
            <nav>
                <div id="lftSide">
                    <div id="logo">ease</div>
                </div>
                <div id="rgtSide">
                    <ul>
                        <li>About</li>
                        <li>Terms</li>
                        <li>Help</li>
                    </ul>
                    <div id="btnDiv">
                        <Link to='/login'><button className='loginBtn'>Login</button></Link>
                        <button className='signUpBtn'>Sign up</button>
                    </div>
                    <div className="iconDiv">
                        <FontAwesomeIcon onClick={()=>setSideBarOpen((prev)=>!prev)} icon={sideBarOpen?faXmark:faBars} />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header