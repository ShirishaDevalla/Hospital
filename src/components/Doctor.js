import React, { useState } from 'react'
import Header from './Header'
import CardiologyDoctor from '../image/doctor-img1.jpg'
import GeneralPhysician from '../image/doctor-img2.jpg'
import Neurologist from '../image/doctor-img3.jpg'
import Gynecologist from '../image/doctor-img4.jpg'
import Dermatologist from '../image/doctor-img5.jpg'



const Doctor = () => {
  const [searchTerm, setSearchTerm]= useState('')
  const [doctorlist, setDoctorlist]=useState(
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
)
const [state, setState] = useState(false); 
const [editData, setEditData] = useState(null); 



const addDoctor = (newDoctor) => {
  setDoctorlist([
        ...doctorlist,
        { ...newDoctor, id: doctorlist.length + 1 }
    ]);
};


const editDoctor = (updatedDoctor) => {
    const updatedList = doctorlist.map((doctor) => 
      doctor.id === updatedDoctor.id ? updatedDoctor :doctor
    );
    setHospitalList(updatedList);
};


const deleteHospital = (id) => {
    const filteredList = doctorlist.filter((doctor) => doctor.id !== id);
    setHospitalList(filteredList);
};



const handleSearchChange=(e)=>{
  setSearchTerm(e.target.value)
}
const filteredDoctors = doctor.filter((doctor)=>
  doctor?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  doctor?.specialization?.toLowerCase().includes(searchTerm.toLowerCase())
)
  
  return (
    <div> <Header/>
    <div>
    <div className="d-flex flex-wrap justify-content-between px-5">
                    <div><h5>Hospital List</h5></div>
                    <div><input className="form-control" placeholder="Search..." onChange={onSearchChange} /></div>
                    <div>
                        <button className="btn btn-success text-white border" onClick={() => setState(true)}>
                            Add Doctor
                        </button>
                    </div>
                </div>
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
                  <button
                                            className="btn btn-warning text-white"
                                            onClick={() => {
                                                setState(true);
                                                setEditData(doctor); 
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger text-white ms-2"
                                            onClick={() => deleteHospital(doctor.id)}
                                        >
                                            Delete
                                        </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
    {state && (<AddModal show={state} onHide={() => setState(false)} addDoctor={addDoctor} editDoctor={editDoctor} editData={editData}
                />
            )}
     
  
    </div>
  )
}

export default Doctor