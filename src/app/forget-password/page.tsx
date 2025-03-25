import React from 'react'
import Navbar from '@/Components/LandingPage/Navbar'
import ForgetPassword from '@/Components/common/ForgetPassword'
import Footer from '@/Components/LandingPage/Footer'
const page = () => {
  return (
    <div>
        <Navbar/>
        <ForgetPassword/>
        <Footer/>
    </div>
  )
}

export default page
