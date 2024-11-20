import React from 'react'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'
import Home from '../components/Home'
import Patient from '../components/Patient'
import Doctor from '../components/Doctor'
import Appointment from '../components/Appointment'
import Services from '../components/Services'
import Contact from '../components/Contact'
import HospitalList from '../components/HospitalList'
import Treatments from '../components/Treatments'
import Logout from '../components/Logout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loginform from '../components/Loginform'

const Routingconfig = () => {
  return (
    <div>
        <BrowserRouter>
       <Routes>
        <Route path='/' element={<Loginform/>}></Route>
        <Route path='Dashboard' element={<Dashboard/>}></Route>
        <Route path='Header' element={<Header/>}></Route>
        <Route path='Home' element={<Home/>}></Route>
        <Route path='Patient' element={<Patient/>}></Route>
        <Route path='Doctor' element={<Doctor/>}></Route>
        <Route path='Appointment' element={<Appointment/>}></Route>
        <Route path='Services' element={<Services/>}></Route>
        <Route path='Contact' element={<Contact/>}></Route>
        <Route path='HospitalList' element={<HospitalList/>}></Route>
        <Route path='Treatments' element={<Treatments/>}></Route>
        <Route path='Logout' element={<Logout/>}></Route>
       </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routingconfig