import React from 'react'
import Header from './Header'
import DoctorImage from '../image/t-doctorImage.webp'
import Cardiac from '../treatmentImage/image1.png'
import Orthopaedics from '../treatmentImage/image2.png'
import Dental from '../treatmentImage/image3.png'

const Treatments = () => {
  const listOfcost = [
    {
      surgeryname: "Cardiac Bypass",
      name: "Starting At Cost",

      cost: "1,99,999",
      image: Cardiac
    },
    {
      surgeryname: "Knee Replacement",
      name: "Starting At Cost",

      cost: "1,99,999",
      image: Orthopaedics
    },

    {
      surgeryname: " Dental Clinic",
      name: "Starting At Cost",

      cost: "1,99,999",
      image: Dental
    },


  ]
  return (
    <div>
      <Header />
      <div>
          <div className='container '>
             <div className='row p-2 m-2'>
               <div className='col-md-12'>
                  <div className='card border rounded shadow-sm p-2 m-2'>
                  <div className='row'>
                <div className='col-md-5 d-flex flex-column justify-content-center align-items-start'>
                  <div className='word1 m-1 p-1'>
                    Find The
                  </div>
                  <div className='word2 m-1 p-1'>
                    Right Treatment
                  </div>
                  <div className='word3 m-1 p-1'>
                    Navigate the Best Treatment Paths for Your Condition
                  </div>
                </div>


                <div className='col-md-5 d-flex justify-content-end align-items-end'>
                  <img className='pic' src={DoctorImage} alt="Doctor" />
                </div>
               </div>
               
                   

                  </div>
                  
                </div>
              </div>
              
          </div>
          
      </div>






    </div>
  )
}

export default Treatments