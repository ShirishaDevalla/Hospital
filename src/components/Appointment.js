import React, { useState } from 'react'
import Header from './Header'
import AppointmentModal from './AppointmentModal'
import DynamicTable from './DynamicTable'
import { FaEdit } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

const Appointment = () => {
  const [state, setState] = useState();
  const [appointmentlist, setAppointmentlist]=useState([])
  const [editdata, setEditdata] = useState(null)
  const [notification, setNotification] = useState('')
  const [appointmentTime, setAppointmentTime] = useState(new Set())
  const column = [
    {
      name: "id",
      cell: (list, i) => i + 1
    },
    {
      name: "PatientName",
      cell: (v) => v.PatientName
    },
    {
      name: "LastName",
      cell: (v) => v.LastName
    },
    {
      name: "Gender",
      cell: (v) => v.Gender
    },
    {
      name: "Age",
      cell: (v) => v.Age
    },
    {
      name: "MobileNumber",
      cell: (v) => v.MobileNumber
    },
    {
      name: "Surgery",
      cell: (v) => v.Surgery
    },
    {
      name: "SurgeryTime",
      cell: (v) => v.SurgeryTime
    },
    {
      name: "DoctorName",
      cell: (v) => v.DoctorName
    },
    {
      name: "Status",
      cell: (v) => v.Status
    },
    {
      name: "RoomNumber",
      cell: (v) => v.RoomNumber
    },
    
    {
      name: "Action",
      cell: (v, i) => (
        <div className='d-flex gap-3'>
          <div onClick={() => handleEdit(v)}>< FaEdit size={20} /></div>
          <div className='mx-2' onClick={() => deleteList(i)}><  GiCancel size={20} /></div>
        </div>

      )
    },
  ]

  const handleEdit = (Appointmentdata) => {
    setEditdata(Appointmentdata);
    setState(true);
  }
  const addList = (obj) => {
    if(appointmentTime.has(obj.AppointmentTime)){
      setNotification('Sorry, this time slot already booked. Please choose a different time.')
      return;
    }
    const newTimes = new Set(appointmentTime);
    newTimes.add(obj.AppointmentTime);
    setAppointmentTime(newTimes);
    setEditdata(null);
    setState(false);
    setNotification('Appointment successfully booked!');

    if (editdata) {
      const updatedlist = appointmentlist.map((item) =>
        item.id === obj.id ? { ...item, ...obj } : item
      );
     setAppointmentlist(updatedlist);
    }
    else {
      obj.id = Date.now();
     setAppointmentlist([...appointmentlist, obj]);
    }
  }
  const deleteList=(id,value)=>{
    const deletedAppointment=appointmentlist[id]
     let result=appointmentlist.filter((v,i)=>i!=id)
    setAppointmentlist(result)
     const newTimes= new Set(appointmentTime)
     newTimes.delete(deletedAppointment.AppointmentTime)
     setAppointmentTime(newTimes)
     setNotification('Appointment cancelled successfully')
  }
  
  return (
    <div> <Header />
    <div className='container'>
      <div className='p-3 d-flex flex-wrap justify-content-between m-3'>
        <div className=' px-5'>
          <h3>Appointmentdata</h3>
        </div>
        <div>
          <button className='btn btn-success text-white border' onClick={() => setState(true)}>SelectYourAppointment</button>
        </div>

      </div>
      </div>
      <DynamicTable column={column} dataList={appointmentlist} />
      {state && < AppointmentModal show={state} onHide={() => setState(false)} addObj={addList} editdata={editdata} />}
      {notification && <div className="alert alert-info">{notification}</div>}

    </div>

  )
}

export default Appointment