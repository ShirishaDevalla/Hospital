import React, { useState } from 'react';
import Header from './Header';
import HospitalImage1 from '../hospitalimage/TX-Hospital.jpg';
import HospitalImage2 from '../hospitalimage/Care_Hospital_Banjarahills-1.jpg';
import HospitalImage3 from '../hospitalimage/Gandhi-Hospital-1-1-1024x685.jpg';
import HospitalImage4 from '../hospitalimage/himagiri-hospitals-hyderabad-him04.jpg';
import AddModal from './AddModal';

const HospitalList = () => {
    const [hospitalList, setHospitalList] = useState([
        {
            id: 1,
            image: HospitalImage1,
            name: "TX-Hospital",
            location: "Hyderabad",
            about: "provide medical treatment emergency care, surgeries, and other healthcare services to patients.",
        },
        {
            id: 2,
            image: HospitalImage3,
            name: "Gandhi-Hospital",
            location: "Hyderabad",
            about: "provide medical treatment emergency care, surgeries, and other healthcare services to patients.",
        },
        {
            id: 3,
            image: HospitalImage4,
            name: "Himagiri-Hospitals",
            location: "Hyderabad",
            about: "provide medical treatment emergency care, surgeries, and other healthcare services to patients.",
        },
        {
            id: 4,
            image: HospitalImage2,
            name: "Care_Hospital_Banjarahills",
            location: "Hyderabad",
            about: "provide medical treatment emergency care, surgeries, and other healthcare services to patients.",
        },
    ]);

    const [state, setState] = useState(false); 
    const [editData, setEditData] = useState(null); 
    const [searchQuery, setSearchQuery] = useState('');

   
    const addHospital = (newHospital) => {
        setHospitalList([
            ...hospitalList,
            { ...newHospital, id: hospitalList.length + 1 }
        ]);
    };

    
    const editHospital = (updatedHospital) => {
        const updatedList = hospitalList.map((hospital) => 
            hospital.id === updatedHospital.id ? updatedHospital : hospital
        );
        setHospitalList(updatedList);
    };

    
    const deleteHospital = (id) => {
        const filteredList = hospitalList.filter((hospital) => hospital.id !== id);
        setHospitalList(filteredList);
    };

  
    const onSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };


    const filteredHospitals = hospitalList.filter((hospital) =>
        hospital.name.toLowerCase().includes(searchQuery) || hospital.location.toLowerCase().includes(searchQuery)
    );

    return (
        <div>
            <Header />
            <div className="container">
                <div className="d-flex flex-wrap justify-content-between px-5">
                    <div><h5>Hospital List</h5></div>
                    <div><input className="form-control" placeholder="Search..." onChange={onSearchChange} /></div>
                    <div>
                        <button className="btn btn-success text-white border" onClick={() => setState(true)}>
                            Add Hospital
                        </button>
                    </div>
                </div>

                {filteredHospitals.map((hospital) => (
                    <div key={hospital.id} className="d-flex mb-4">
                        <div className="col g-2">
                            <div className="card rounded shadow-sm m-3">
                                <div className="card-body d-flex bg-card3 align-items-center">
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
                                        <button
                                            className="btn btn-warning text-white"
                                            onClick={() => {
                                                setState(true);
                                                setEditData(hospital); 
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger text-white ms-2"
                                            onClick={() => deleteHospital(hospital.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            {state && (<AddModal show={state} onHide={() => setState(false)} addHospital={addHospital} editHospital={editHospital} editData={editData}
                />
            )}
        </div>
    );
};

export default HospitalList;
