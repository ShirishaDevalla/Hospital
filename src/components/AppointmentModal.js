import React, { useEffect,useState } from 'react'
import { Modal } from 'react-bootstrap'

const AppointmentModal = ({show, onHide, addObj,editdata}) => {
    const[data, setData]=useState({})
    const submit = () => {
        if (!data.AppointmentTime) {
            alert("Please select an appointment time!");
            return;
        }
        addObj(data);
        onHide();
      };
      const handleOnChange = (event) => {
        const { name, value } = event.target;

    if (name === 'AppointmentTime') {
    
      const selectedTime = new Date(value);
      const selectedHour = selectedTime.getHours();

      if (selectedHour < 10 || selectedHour > 18) {
        alert("Please select a time between 10 AM and 6 PM.");
       
        setData({
          ...data,
          [name]: "2024-01-01T10:00", 
        });
        return;
      }
    }

    setData({
      ...data,
      [name]: value,
    });
        
        
      
      };
    
      
      useEffect(() => {
        
        if (editdata) {
          setData(editdata);
        } else {
          setData({});
        }
      }, [editdata, show]);
  return (
    <Modal show={show} onHide={onHide}>
        <Modal.Header>
            <Modal.Title>{editdata ? 'Edit Appointment' : 'Add Appointment'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="p-3 m-2">
          <div className="mr-2">
            <label>PatientName</label>
            <input type="text" className="form-control p-2" placeholder="PatientName" value={data?.PatientName} name="PatientName" onChange={handleOnChange} />
          </div>
          <div className="mr-2">
            <label>LastName</label>
            <input type="text" className="form-control p-2" placeholder="LastName" value={data?.LastName} name="LastName" onChange={handleOnChange} />
          </div>
          <div className="mr-2">
            <label>Gender</label>
            <select className="form-control p-2" placeholder="Gender" value={data?.Gender || ''} name="Gender" onChange={handleOnChange}>
              <option className='mr-2'>Female</option>
              <option className='mr-2'>Male</option>
            </select>
          </div>
          <div className="mr-2">
            <label>Age</label>
            <input type="text" className="form-control p-2" placeholder="Age" value={data?.Age} name="Age" onChange={handleOnChange} />
          </div>
          <div className="mr-2">
            <label>MobileNumber</label>
            <input type="text" className="form-control p-2" placeholder="MobileNumber" value={data?.MobileNumber} name="MobileNumber" onChange={handleOnChange} />
          </div>
          <div className="mr-2">
            <label>Surgery</label>
            <select className="form-control p-2" placeholder="Surgery" value={data?.Surgery || ''} name="Surgery" onChange={handleOnChange}>
              <option className='mr-2'>Cardic Bypass</option>
              <option className='mr-2'>Knee Replacement</option>
              <option className='mr-2'>Dental Clinic</option>
             
            </select>
          </div>
          <div className="mr-2">
            <label>SurgeryTime</label>
            <input type="datetime-local" className="form-control p-2" placeholder="SurgeryTime" value={data?.SurgeryTime} name="SurgeryTime" onChange={handleOnChange} />
          </div>
          <div className="mr-2">
            <label>DoctorName</label>
            <select className="form-control p-2" placeholder="DoctorName" value={data?.DoctorName || ''} name="DoctorName" onChange={handleOnChange}>
              <option className='mr-2'>Dr. Jayanth </option>
              <option className='mr-2'>Dr. Shirisha</option>
              <option className='mr-2'>Dr. Pooja </option>
              <option className='mr-2'>Dr. Devasri</option>
              <option className='mr-2'>Dr. Radha Kumari</option>
            </select>
          </div>
          <div className="mr-2">
            <label>Status</label>
            <select className="form-control p-2" placeholder="Status" value={data?.Status || ''} name="Status" onChange={handleOnChange}>
              <option className='mr-2'>Recovred</option>
              <option className='mr-2'>Not-Recover</option>
            </select>
          </div>
          <div className="mr-2">
            <label>RoomNumber</label>
            <select className="form-control p-2" placeholder="RoomNumber" value={data?.RoomNumber || ''} name="RoomNumber" onChange={handleOnChange}>
              <option className='row mr-2'>101</option>
              <option className='row mr-2'>102</option>
              <option className='row mr-2'>103</option>
              <option className='row mr-2'>104</option>
            </select>
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

export default AppointmentModal