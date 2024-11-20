import React, { useState } from 'react'
import Header from './Header'
import CardiologyDoctor from '../image/doctor-img1.jpg'
import GeneralPhysician from '../image/doctor-img2.jpg'
import Neurologist from '../image/doctor-img3.jpg'
import Gynecologist from '../image/doctor-img4.jpg'
import Dermatologist from '../image/doctor-img5.jpg'



const Doctor = () => {
  const [searchTerm, setSearchTerm]= useState('')
  const doctors=[
  { 
    id: 1, 
    name: "Dr. Jayanth Naidu", 
    specialization: "Cardiology", 
    description: "A cardiologist with 10+ years of experience in managing a wide range of heart-related conditions.", 
    image: CardiologyDoctor 
  },
  { 
    id: 2, 
    name: "Dr. Shirisha Naidu", 
    specialization: "Gynecologist", 
    description: "9+ years of experience in gynecology, particularly the female reproductive system.", 
    image: Gynecologist 
  },
  { 
    id: 3, 
    name: "Dr. Devasri", 
    specialization: "Neurologist", 
    description: "6+ years of experience in diagnosing, treating, and managing disorders of the nervous system.", 
    image: Neurologist 
  },
  { 
    id: 4, 
    name: "Dr. Pooja", 
    specialization: "General Physician", 
    description: "5+ years of experience in General Physician care and providing comprehensive care to individuals of all ages.", 
    image: GeneralPhysician 
  },
  { 
    id: 5, 
    name: "Dr. Radha Kumar", 
    specialization: "Dermatologist", 
    description: "A dermatologist with 5+ years of experience in diagnosing, treating, and preventing skin, hair, and nail conditions.", 
    image: Dermatologist 
  }
]


const handleSearchChange=(e)=>{
  setSearchTerm(e.target.value)
}
const filteredDoctors = doctors.filter((doctor)=>
  doctor?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  doctor?.specialization?.toLowerCase().includes(searchTerm.toLowerCase())
)
  
  return (
    <div> <Header/>
    <div>
    <div className="container my-3">
        <input 
          type="text" 
          placeholder="Search by name or specialization..." 
          value={searchTerm}
          onChange={handleSearchChange}
          className="form-control"
        />
      </div>
      <div className="container d-flex flex-wrap align-items-between gap-6 ">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="d-flex col-md-3">
            <div className="card rounded shadow-sm m-3">
              <div className="card-body bg-card justify-content-center p-2 m-2">
                <div>
                  <img 
                    src={doctor.image} 
                    className="px-4 mb-3" 
                    style={{ height: '180px', width: 'auto' }} 
                    alt={doctor.name} 
                  />
                </div>
                <div className="d-flex justify-content-center"><h3>{doctor.name}</h3></div>
                <div className="d-flex justify-content-center">
                  <h6>{doctor.specialization}</h6>
                </div>
                <div>
                  <p>{doctor.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
     
  
    </div>
  )
}

export default Doctor