import React, { useEffect, useState } from 'react';
import Header from './Header';
import HospitalImage1 from '../hospitalimage/TX-Hospital.jpg';
import HospitalImage2 from '../hospitalimage/Care_Hospital_Banjarahills-1.jpg';
import HospitalImage3 from '../hospitalimage/Gandhi-Hospital-1-1-1024x685.jpg';
import HospitalImage4 from '../hospitalimage/himagiri-hospitals-hyderabad-him04.jpg';
import HospitalAddModal from './HospitalAddModal';

const HospitalList = () => {
    const [state, setState] = useState(false); 
    const [addlist, setAddlist] = useState([]); 
    const [filterList, setFilterList] = useState([]);
    const [search, setSearch] = useState(""); 
    const [edit, setEdit] = useState(null); 

    
    const Hospital = [
        {
            id: 1,
            image: HospitalImage1,
            name: "TX-Hospital",
            location: "Hyderabad",
            about: "Provide medical treatment, emergency care, surgeries, and other healthcare services to patients.",
        },
        {
            id: 2,
            image: HospitalImage3,
            name: "Gandhi-Hospital",
            location: "Hyderabad",
            about: "Provide medical treatment, emergency care, surgeries, and other healthcare services to patients.",
        },
        {
            id: 3,
            image: HospitalImage4,
            name: "Himagiri-Hospitals",
            location: "Hyderabad",
            about: "Provide medical treatment, emergency care, surgeries, and other healthcare services to patients.",
        },
        {
            id: 4,
            image: HospitalImage2,
            name: "Care_Hospital_Banjarahills",
            location: "Hyderabad",
            about: "Provide medical treatment, emergency care, surgeries, and other healthcare services to patients.",
        },
    ];

    // Handle search input change
    const onChangefun = (event) => {
        setSearch(event?.target?.value);
    };

    // On component mount, set hospitals to the state
    useEffect(() => {
        setAddlist(Hospital);
        setFilterList(Hospital);
    }, []);

   
    const handleEdit=(hospital)=>{
        setEdit(hospital)
        setAddlist(hospital)


    }
   
    const deleteList = (id) => {
        const result = addlist.filter((hospital) => hospital.id !== id)
        setAddlist(result)
        setFilterList(result)
    };

    const newdataadd = (obj) => {
        if (edit) {
            const updatedata = addlist.map((item) =>
                item.id === obj.id ? { ...item, ...obj } : item
            );
            setAddlist(updatedata);
            setFilterList(updatedata);
        } else {
            obj.id = Date.now(); 
            setAddlist([...addlist, obj]);
            setFilterList([...addlist, obj]);
        }
    };

    
    useEffect(() => {
        if (search) {
            const newres = filterList.filter((hospital) =>
                hospital?.name?.toLowerCase().includes(search.toLowerCase()) ||
                hospital?.location?.toLowerCase().includes(search.toLowerCase())
            );
            setAddlist(newres);
        } else {
            setAddlist(filterList);
        }
    }, [search, filterList]);

    return (
        <div>
            <Header />
            <div className="container">
                <div className="p-3">
                    <div className="d-flex flex-wrap justify-content-between px-5">
                        <div>
                            <h5>Hospital List</h5>
                        </div>
                        <div>
                            <input
                                className="form-control"
                                placeholder="Search..."
                                onChange={onChangefun}
                            />
                        </div>
                        <div>
                            <button
                                className="btn btn-success text-white border"
                                onClick={() => setState(true)} 
                            >
                                Add List
                            </button>
                        </div>
                    </div>
                </div>

                {addlist.map((v, i) => (
                    <div key={i} className="d-flex mb-4">
                        <div className="col g-2">
                            <div className="card rounded shadow-sm m-3">
                                <div className="card-body d-flex bg-card3 align-items-center">
                                    <div className="col-md-5 m-2 p-2">
                                        <img
                                            src={v.image}
                                            alt={v.name}
                                            className="img-fluid rounded"
                                            style={{ maxHeight: '700px', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="col-md-5 m-2 p-2">
                                        <h3>{v.name}</h3>
                                        <h5>{v.location}</h5>
                                        <p>{v.about}</p>
                                        <div>
                                            <button
                                                className="btn btn-success px-4 border m-2"
                                                onClick={() => handleEdit(v)}
                                            >
                                                Edit
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className="btn btn-primary px-4 border m-2"
                                                onClick={() => deleteList(v.id)} 
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {state && (
                <HospitalAddModal
                    show={state}
                    onHide={() => setState(false)} 
                    addobj={newdataadd} 
                    edit={edit} 
                />
            )}
        </div>
    );
};

export default HospitalList;
