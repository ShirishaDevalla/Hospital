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
            <select
              className="form-control p-2"
              placeholder="Gender"
              value={data?.Gender || ''}
              name="Gender"
              onChange={handleOnChange}
            >
              <option>Female</option>
              <option>Male</option>
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
            <label>AppointmentTime</label>
            <input type="datetime-local" className="form-control p-2" placeholder="AppointmentTime" value={data?.AppointmentTime} name="AppointmentTime" onChange={handleOnChange} />

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