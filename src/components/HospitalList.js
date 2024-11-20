import React from 'react'
import Header from './Header'
import HospitalImage1 from '../hospitalimage/TX-Hospital.jpg'
import HospitalImage2 from '../hospitalimage/Care_Hospital_Banjarahills-1.jpg'
import HospitalImage3 from '../hospitalimage/Gandhi-Hospital-1-1-1024x685.jpg'
import HospitalImage4 from '../hospitalimage/himagiri-hospitals-hyderabad-him04.jpg'

const HospitalList = () => {
    const hospital=[
        {
            id:1,
            image:HospitalImage1,
            name:"TX-Hospital",
            location:"Hyderabad",
            about:"provide medical treatment emergency care,surgeries, and other healthcare services to patients. They play a crucial role in treating both acute and chronic health conditions",
        },
     
        {
            id:2,
            image:HospitalImage3,
            name:"Gandhi-Hospital",
            location:"Hyderabad",
            about:"provide medical treatment emergency care,surgeries, and other healthcare services to patients. They play a crucial role in treating both acute and chronic health conditions",
        },
        {
            id:3,
            image:HospitalImage4,
            name:"himagiri-hospitals",
            location:"Hyderabad",
            about:"provide medical treatment emergency care,surgeries, and other healthcare services to patients. They play a crucial role in treating both acute and chronic health conditions",
        },
        {
            id:4,
            image:HospitalImage2,
            name:"Care_Hospital_Banjarahills",
            location:"Hyderabad",
            about:"provide medical treatment emergency care,surgeries, and other healthcare services to patients. They play a crucial role in treating both acute and chronic health conditions",
        },
    ]
  return (
    <div>
        <Header/>
        <div className='container '>
        
          
                {hospital.map((hospital) => (
                    <div key={hospital.id} className=" d-flex  mb-4">
                        <div className="col g-2">
                          <div className='card rounded shadiw-sm m-3'>
                              <div className='card-body d-flex bg-card3 align-items-center'>
                              <div className="col-md-5 m-2 p-2">
                                <img
                                    src={hospital.image}
                                    alt={hospital.name}
                                    className="img-fluid rounded"
                                    style={{ maxHeight: '700px', objectFit: 'cover' }}
                                />
                              </div>
                              <div className="col-md-5 m-2 p-2">
                                <h3>{hospital.name}</h3>
                                <h5>{hospital.location}</h5>
                                <p>{hospital.about}</p>
                            </div>
                             
                              </div>

                          </div>
                            
                        </div>
                    </div>
                ))}
            
           
            </div>
    </div>
  )
}

export default HospitalList