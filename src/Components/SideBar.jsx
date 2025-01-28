import React from 'react'
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const SideBar = ({ sideBarOpen, setSideBarOpen }) => {
    return (
        <div className={`sideBarDiv ${sideBarOpen?"sideBarDivActive":""}`}>
            <div onClick={()=>setSideBarOpen((prev)=>!prev)} className="crossMark">
                <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className="logo">ease</div>
            <div className="linkDiv">
                <ul className='mainLink'>
                    <li>Team</li>
                    <li>Products</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                    <li className='byDefaultHidden'>About</li>
                    <li className='byDefaultHidden'>Help</li>
                </ul>
                <ul className='subLink'>
                    <li>Blog</li>
                    <li>Support</li>
                    <li className='byDefaultHidden'>Terms</li>
                    <li>Newsletter</li>
                    <li>Login</li>
                    <li>Logout</li>
                </ul>
                <div className='socialIcons'>
                    <div>
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar