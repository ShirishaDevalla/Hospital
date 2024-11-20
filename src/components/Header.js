import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Header = () => {
    const[menu, setMenu]=useState([
        {name:"Home",url:"/Home"},
        {name:"Patient",url:"/Patient"},
        {name:"Doctor",url:"/Doctor"},
        {name:"Appointment",url:"/Appointment"},
        {name:"Services",url:"/Services"},
        {name:"HospitalList",url:"/HospitalList"},
        {name:"Treatments",url:"/Treatments"},
        {name:"Contact",url:"/Contact"},
        {name:"Logout",url:"/"}
        
    ])
  return (
    <div className='container'>
    <div className=' row header m-3'>
        <div className='col-md-2 d-flex align-items-center px-4'>
            <div className='' style={{fontWeight:'bold'}}>Hospital Admin</div>
        </div>
        <div className='col-md-8 d-flex flex-wrap  align-items-center'>
            <div className='d-flex flex-wrap gap-3 justify-content-center align-items-center'>
                {
                    menu?.map((v,i)=>{
                        return(
                            <NavLink to ={v.url} className={({isActive})=>isActive? 'text-dark' : 'text-white'} style={{textDecoration:"none"}}>
                                
                                {v.name}

                            </NavLink>
                        )
                    })
                }


            </div>
        </div>
        <div className='col-md-2 d-flex justify-content-end align-items-center px-5 gap-2'>
       <div>
       <FaUserCircle size={25}/>
       
       </div>
       <div>
        shirisha
       </div>


        </div>

        

    </div>
    </div>
  )
}

export default Header