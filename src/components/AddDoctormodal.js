import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'

const AddDoctormodal = ({show, onHide, addnewobj, editedData}) => {
    const[data, setData]=useState({
        image: '',
        name: '',
        specialization: '',
        description: ''

    })
    const submit = () => {
        addnewobj(data); 
        onHide();
    };

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value
        });
    };
useEffect(()=>{
    if (editedData) {
        setData({ ...editedData });
    } else {
        setData({
          
        }); 
    }
    
})    
  return (
   <Modal show={show}>
    <Modal.Header>
                <Modal.Title>{editedData ? 'Edit Doctor' : 'Add Doctor'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='p-2 m-3'>
                    <div className="mr-2">
                        <label>Image URL</label>
                        <input
                            type='text'
                            className="form-control p-2"
                            placeholder="Image URL"
                            name="image"
                            value={data.image}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="mr-2">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control p-2"
                            placeholder="Name"
                            name="name"
                            value={data.name}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="mr-2">
                        <label>Specialization</label>
                        <input
                            type="text"
                            className="form-control p-2"
                            placeholder="Specialization"
                            name="specialization"
                            value={data.specialization}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="mr-2">
                        <label>Description</label>
                        <textarea
                            className="form-control p-2"
                            placeholder="Description"
                            name="description"
                            value={data.description}
                            onChange={handleOnChange}
                        />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div>
                    <button onClick={onHide} className="btn btn-primary px-4 border m-2">
                        Cancel
                    </button>
                    <button className="btn btn-success text-white px-4 border" onClick={submit}>
                        Submit
                    </button>
                </div>
            </Modal.Footer>

   </Modal>
  )
}

export default AddDoctormodal