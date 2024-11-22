import React, { useEffect, useState } from 'react';
import Header from './Header';
import CardiologyDoctor from '../image/doctor-img1.jpg'; 
import GeneralPhysician from '../image/doctor-img2.jpg';
import Neurologist from '../image/doctor-img3.jpg';
import Gynecologist from '../image/doctor-img4.jpg';
import Dermatologist from '../image/doctor-img5.jpg';
import AddDoctormodal from './AddDoctormodal';



const Doctor = () => {
    const [state, setState] = useState(false); 
    const [doctorlist, setDoctorlist] = useState([]); 
    const [searchterm, setSearchterm] = useState(""); 
    const [filterdata, setFilterdata] = useState([]);
    const [editedData, setEditedData] = useState(null); 


    const doctor = [
        {
            id: 1,
            name: "Dr. Jayanth Naidu",
            specialization: "Cardiology",
            description: "A cardiologist with 10+ years of experience in  heart-related conditions.",
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
    ];

    const onChangefun = (event) => {
        setSearchterm(event?.target?.value); 
    };

    useEffect(() => {
        setDoctorlist(doctor); 
        setFilterdata(doctor); 
    }, []);

    const handleEdit = (doctor) => {
        setEditedData(doctor); 
        setState(true);
    };

    const deleteList = (id) => {
        const result = doctorlist.filter((doctor) => doctor.id !== id);
        setDoctorlist(result); 
        setFilterdata(result);
    };

    useEffect(() => {
        if (searchterm) {
            const res = filterdata.filter(
                (doctor) =>
                    doctor?.name?.toLowerCase().includes(searchterm.toLowerCase()) ||
                    doctor?.specialization?.toLowerCase().includes(searchterm.toLowerCase())
            );
            setDoctorlist(res); 
        } else {
            setDoctorlist(filterdata); 
        }
    }, [searchterm, filterdata]);

    const newdata = (newobj) => {
        if (editedData) {
            const updatedata = doctorlist.map((item) =>
                item.id === newobj.id ? { ...item, ...newobj } : item
            );
            setDoctorlist(updatedata); 
            setFilterdata(updatedata); 
        } else {
            newobj.id = Date.now(); 
            setDoctorlist([...doctorlist, newobj]); 
            setFilterdata([...doctorlist, newobj]); 
        }
    };

    return (
        <div>
            <Header />
            <div className='container'>
                <div className='p-3'>
                    <div className='d-flex flex-wrap justify-content-between'>
                        <div><h5>Hospital List</h5></div>
                        <div>
                            <input className='form-control' placeholder='search...' onChange={onChangefun}/>
                        </div>
                        <div>
                            <button className='btn btn-success text-white border'onClick={()=>setState(true)}>
                                Add List
                            </button>
                        </div>
                    </div>


                </div>
            

      
                <div className="container d-flex flex-wrap align-items-between gap-2">
                    {doctorlist.map((v) => (
                        <div key={v.id} className="d-flex col-md-3">
                            <div className="card rounded shadow-sm m-2">
                                <div className="card-body bg-card justify-content-center p-2 m-2">
                                    <img
                                        src={v.image}
                                        className="px-2 mb-2"
                                        style={{ height: '180px', width: 'auto' }}
                                        alt={v.name}
                                    />
                                    <div className="d-flex justify-content-center">
                                        <h3>{v.name}</h3>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <h6>{v.specialization}</h6>
                                    </div>
                                    <p>{v.description}</p>
                                    <button
                                        className="btn btn-info text-white m-2 px-4"
                                        onClick={() => handleEdit(v)} 
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-success text-white m-2 px-4"
                                        onClick={() => deleteList(v.id)} 
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {state && <AddDoctormodal show={state} onHide={()=>setState(false)} addnewobj={newdata} editedData={editedData}/>}

           
        </div>
    );
};

export default Doctor;
