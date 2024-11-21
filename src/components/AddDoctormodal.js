import React, { useEffect, useState } from 'react'

const AddDoctormodal = () => {
    const [data, setData]=useState({
        image:'',
        name:'',
        specialization:'',
        description:'',
       
    })
    useEffect(()=>{
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
        <Modal.Title>{editData ? 'Edit Doctor' : 'Doctor'}</Modal.Title>
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
            <label>specialization</label>
            <input type="text" className="form-control p-2" placeholder="specialization" value={data?.specialization} name="specialization" onChange={handleOnChange} />
          </div>
          <div className="mr-2">
            <label>description</label>
            <textarea type="text" className="form-control p-2" placeholder="description" value={data?.description} name="description" onChange={handleOnChange}></textarea>
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

export default AddDoctormodal