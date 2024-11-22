import React, { useEffect, useState } from 'react'
import Header from './Header'
import DynamicTable from './DynamicTable'
import AddModal from './AddModal'
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Patient = () => {
  const[state, setState]=useState(false);
  const[list, setList]=useState([]);
  const[filterList,setFilterList]=useState([]);
  const[search,setSearch]=useState("");
  const[editdata, setEditdata]=useState(null);
 
  const onChangefun=(event)=>{
    setSearch(event?.target?.value);
  } 
  const patientList = [
    {
      id: 1,
      name: "John Doe",
      age: 45,
      gender: "Male",
      surgery: "Cardiac Bypass",
      surgeryDate: "2024-11-10",
      status: "Recovered",
      doctor: "Dr. Smith",
      roomNumber: "101"
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 38,
      gender: "Female",
      surgery: "Knee Replacement",
      surgeryDate: "2024-10-05",
      status: "Recovered",
      doctor: "Dr. Johnson",
      roomNumber: "102"
    },
    {
      id: 3,
      name: "Michael Brown",
      age: 60,
      gender: "Male",
      surgery: "Hip Replacement",
      surgeryDate: "2024-09-20",
      status: "Under Observation",
      doctor: "Dr. Williams",
      roomNumber: "103"
    },
    {
      id: 4,
      name: "Emily Davis",
      age: 30,
      gender: "Female",
      surgery: "Spinal Surgery",
      surgeryDate: "2024-08-15",
      status: "Recovered",
      doctor: "Dr. Martinez",
      roomNumber: "104"
    },
    {
      id: 5,
      name: "James Wilson",
      age: 55,
      gender: "Male",
      surgery: "Gallbladder Surgery",
      surgeryDate: "2024-07-25",
      status: "Recovered",
      doctor: "Dr. Lee",
      roomNumber: "105"
    },
    {
      id: 6,
      name: "Linda Moore",
      age: 50,
      gender: "Female",
      surgery: "Cataract Surgery",
      surgeryDate: "2024-06-10",
      status: "Recovered",
      doctor: "Dr. White",
      roomNumber: "106"
    },
    {
      id: 7,
      name: "David Taylor",
      age: 70,
      gender: "Male",
      surgery: "Prostate Surgery",
      surgeryDate: "2024-05-22",
      status: "Under Observation",
      doctor: "Dr. Harris",
      roomNumber: "107"
    },
    {
      id: 8,
      name: "Sophie Clark",
      age: 25,
      gender: "Female",
      surgery: "Appendectomy",
      surgeryDate: "2024-04-17",
      status: "Recovered",
      doctor: "Dr. Adams",
      roomNumber: "108"
    },
    {
      id: 9,
      name: "George Lewis",
      age: 48,
      gender: "Male",
      surgery: "Plastic Surgery",
      surgeryDate: "2024-03-30",
      status: "Under Observation",
      doctor: "Dr. Scott",
      roomNumber: "109"
    },
    {
      id: 10,
      name: "Olivia Walker",
      age: 65,
      gender: "Female",
      surgery: "Knee Replacement",
      surgeryDate: "2024-02-11",
      status: "Recovered",
      doctor: "Dr. King",
      roomNumber: "110"
    }
  ];
  
  
 
  
  const column=[
    {
      name:"id",
      cell:(list,i)=>list.id
    },
   
    {
      name:"name",
      cell:(v)=>v.name
    }, 
    {
      name:"age",
      cell:(v)=>v.age
    }, 
    {
      name:"gender",
      cell:(v)=>v.gender
    }, 
    {
      name:"surgery",
      cell:(v)=>v.surgery
    }, 
    {
      name:"surgeryDate",
      cell:(v)=>v.surgeryDate
    }, 
    {
      name:"status",
      cell:(v)=>v.status
    }, 
    {
      name:"doctor",
      cell:(v)=>v.doctor
    },
    {
      name:"roomNumber",
      cell:(v)=>v.roomNumber
    }, 
    {
      name:"Status",
      cell:()=>"Active"
    }, 
    {
      name:"Action",
      cell:(v,i)=>(
        <div className='d-flex gap-3'>
        <div onClick={()=>handleEdit(v)}><FaUserEdit size={20}/></div>
        <div className='mx-2' onClick={()=>deleteList(i)}><MdDeleteForever size={20} /></div>
        </div>

      )
    },  
  ]
  
  
  const handleEdit=(patientdata)=>{
    setEditdata(patientdata);
    setState(true);
  }
  const addList=(obj)=>{
  
    if(editdata){
      const updatedlist = list.map((item)=>
        item.id === obj.id ? {...item, ...obj}: item
    );
    setList( updatedlist);
    setFilterList( updatedlist);
    }
    else{
      obj.id=Date.now();
      setList([...list,obj]);
      setFilterList([...filterList,obj]);
    }
   
  }
 const deleteList=(id,value)=>{
  let res=list?.filter((v,i)=>i!==id)
  setList(res)
  setFilterList(res)
 }
  useEffect(()=>{
   if(search?.length>=3){
    const result=filterList.filter((v)=>{
      return(
        v?.name?.toLowerCase().includes(search.toLowerCase())||
        v?.surgery?.toLowerCase().includes(search.toLowerCase())
      )

    }

  )
    setList(result);
   }
   else{
    setList(filterList)
   }

  
},[search,filterList])


useEffect(()=>{
  setList(patientList )
  setFilterList(patientList )

},[])
 
  return (
    <div> 
      <Header/>
      <div className='container'>
      <div className='p-3'>
        <div className='d-flex flex-wrap justify-content-between  px-5'>
        <div><h5>Patient List</h5></div>
        <div><input className='form-control' placeholder='search...' onChange={(event)=>onChangefun(event)}/></div>
        <div>
          <button className='btn btn-success text-white border'onClick={()=>setState(true)}>Add List</button>
        </div>
        </div>


      </div>
      </div>
      <DynamicTable column={column} dataList={list}/>
      {state && <AddModal show={state} onHide={()=>setState(false)} addObj={addList} editdata={editdata}/>}
      
    </div>
  )
}

export default Patient