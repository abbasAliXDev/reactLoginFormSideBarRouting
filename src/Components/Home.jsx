import React, { useState } from 'react'
import Header from './Header.jsx'
import SideBar from './SideBar.jsx'

const Home = () => {

    const [sideBarOpen, setSideBarOpen] = useState(false);


    return (
        <>
            <Header sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
            <SideBar setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen} />

            <span className='magicalLine'>Click Hamburger And Login Btn To See</span>
        </>
    )
}

export default Home