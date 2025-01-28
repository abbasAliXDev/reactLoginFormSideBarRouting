import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import SignInForm from './Components/SignInForm.jsx'


const App = () => {

    return (
        <>
            <Toaster  />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<SignInForm />}></Route>
            </Routes>
        </>


    )
}

export default App