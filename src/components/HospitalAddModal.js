import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'

const HospitalAddModal = ({show,onHide, addobj,edit}) => {
  
  const [data, setData]=useState(
    {
      image:'',
      name:'',
      location:'',
      about:''
    }
  )
  const submit=()=>{
 
      addobj(data)
      onHide()

  }

  const handleOnChange=(event)=>{
    const{name,value}=event.target
    setData({
      ...data,
      [name]:value,
  })
}
useEffect(()=>{
  if(edit){
    setData({...edit})
  }
  else{
    setData({

    })
  }
},[edit,show])
   
    
  return (
    <Modal show={show} >
    <Modal.Header>
        <Modal.Title>{edit ? "Edit Hospital" : "Add New Hospital"}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div className='p-2 m-3'>
        <div className="mr-2">
            <label>image</label>
            <input type='file' className="form-control p-2" placeholder="Enter image URL"  name="image" value={data.image} onChange={handleOnChange} />
          </div>
          <div className="mr-2">
            <label>name</label>
            <input type="text" className="form-control p-2" placeholder="name"   value={data.name}  name="name" onChange={handleOnChange} />
          </div>
          <div className="mr-2">
            <label>location</label>
            <input type="text" className="form-control p-2" placeholder="location" name="location"  value={data.location} onChange={handleOnChange} />
          </div>
          <div className="mr-2">
            <label>about</label>
            <textarea type="text" className="form-control p-2" placeholder="about" name="about"  value={data.about} onChange={handleOnChange}></textarea>
          </div>
        </div>

    </Modal.Body>
    <Modal.Footer>
            <div>
                <button onClick={onHide} className="btn btn-primary px-4 border m-2">Cancel</button>
                <button className="btn btn-success text-white px-4 border" onClick={submit}>Submit</button>
            </div>

    </Modal.Footer>

   </Modal>
  )
}

export default HospitalAddModal