import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const HospitalAddModal = () => {
    const [data, setData]= useState({
        image:'',
        name:'',
        location:'',
        about:''
    })
    useEffect(() => {
        if (editData) {
          setData(editData);  
        }
        else{
            setData({})
        }
      }, [editData,show]);
    const handleOnChange=(event)=>{
        const{name, value}=event.target;
       setData({
        ...data,
        [name]:value
       })
    }
    console.log(data)
    const handleFileChange = (event) => {
        setData({
          ...data,
          image: event.target.files[0],
        });
      };
    
      const handleSubmit = () => {
        if (editData) {
          editHospital(data);  
        } else {
          addHospital(data);  
        }
        onHide();  
      };
    
    
  return (
    <Modal show={show}>
    <Modal.Header>
        <Modal.Title>{editData ? 'Edit Hospital' : 'Add Hospital'}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div className='p-2 m-3'>
        <div className="mr-2">
            <label>image</label>
            <input type='file' className="form-control p-2" placeholder="name"  name="image" onChange={handleFileChange}/>
          </div>
          <div className="mr-2">
            <label>name</label>
            <input type="text" className="form-control p-2" placeholder="name" value={data?.name} name="name" onChange={handleOnChange} />
          </div>
          <div className="mr-2">
            <label>location</label>
            <input type="text" className="form-control p-2" placeholder="location" value={data?.location} name="location" onChange={handleOnChange} />
          </div>
          <div className="mr-2">
            <label>about</label>
            <textarea type="text" className="form-control p-2" placeholder="about" value={data?.LastName} name="about" onChange={handleOnChange}></textarea>
          </div>
        </div>

    </Modal.Body>
    <Modal.Footer>
            <div>
                <button onClick={onHide} className="btn btn-primary px-4 border m-2">Cancel</button>
                <button className="btn btn-success text-white px-4 border" onClick={handleSubmit}>Submit</button>
            </div>

    </Modal.Footer>

   </Modal>
  )
}

export default HospitalAddModal