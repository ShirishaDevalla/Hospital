import React from 'react'
import Header from './Header'
import { MdAddIcCall } from "react-icons/md";
import { FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className='container'>
  <div className='d-flex justify-content-start m-4'>
    <h3>Contact us</h3>
  </div> 

  <div className='row'>
    <div className='col-md-3 m-4'>
      <div className='card rounded shadow-sm'>
        <div className="bg-card2 d-flex align-items-center p-4">
          <MdAddIcCall style={{ fontSize: '2.5rem', color: 'black', marginRight: '10px' }} />
          <div>
            <h5 className="mb-1">24x7 Helpdesk</h5>
            <p>0120-6933404, +91-7859939940</p>
          </div>
        </div>
      </div>
    </div>

    <div className='col-md-3 m-4'>
      <div className='card rounded shadow-sm'>
        <div className="bg-card2 d-flex align-items-center p-4">
          <FaMailBulk style={{ fontSize: '2.5rem', color: 'black', marginRight: '10px' }} />
          <div>
            <p>healthcare@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>





       
      </div>
    
  )
}

export default Contact