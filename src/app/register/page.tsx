import React from 'react'
import Navbar from '@/Components/LandingPage/Navbar'
import UserRegister from '@/Components/common/UserRegister'
import Footer from '@/Components/LandingPage/Footer'
const page = () => {
  return (
    <div>
    <Navbar/>
    <UserRegister/>
    <Footer/>
    </div>
  )
}

export default page
