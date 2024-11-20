import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

const AddModal = ({ show, onHide, addObj, editdata }) => {
  const [data, setData] = useState({});

  const submit = () => {
    if (editdata) {
      addObj(data);
    } else {
      data.id = Date.now();
      addObj(data);
    }
    onHide();
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
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
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>{editdata ? 'Edit Patient' : 'Add Patient'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="p-3 m-2" >
          <div className="mr-2">
            <label>name</label>
            <input
              className="form-control p-2"
              placeholder="name"
              value={data?.name || ''}
              name="name"
              onChange={handleOnChange}
            />
          </div>
          <div className="mr-2">
            <label>age</label>
            <input
              className="form-control p-2"
              placeholder="age"
              value={data?.age || ''}
              name="age"
              onChange={handleOnChange}
            />
          </div>
          <div className="mr-2">
            <label>gender</label>
            <select
              className="form-control p-2"
              placeholder="gender"
              value={data?.gender || ''}
              name="gender"
              onChange={handleOnChange}
            >
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>
          <div className="mr-2">
            <label>surgery</label>
            <input
              className="form-control p-2"
              placeholder="surgery"
              value={data?.surgery || ''}
              name="surgery"
              onChange={handleOnChange}
            />
          </div>
          <div className="mr-2">
            <label>surgeryDate</label>
            <input
              className="form-control p-2"
              placeholder="surgeryDate"
              value={data?.surgeryDate || ''}
              name="surgeryDate"
              onChange={handleOnChange}
            />
          </div>
        
          <div className="mr-2">
            <label>status</label>
            <input
              className="form-control p-2"
              placeholder="status"
              value={data?.status || ''}
              name="status"
              onChange={handleOnChange}
            />
          </div>
          <div className="mr-2">
            <label>doctor</label>
            <input
              className="form-control p-2"
              placeholder="doctor"
              value={data?.doctor || ''}
              name="doctor"
              onChange={handleOnChange}
            />
          </div>
          <div className="mr-2">
            <label>roomNumber</label>
            <input
              className="form-control p-2"
              placeholder="roomNumber"
              value={data?.roomNumber || ''}
              name="roomNumber"
              onChange={handleOnChange}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onHide} className="btn btn-primary px-4 border m-2">
          Cancel
        </button>
        <button
          className="btn btn-success text-white px-4 border"
          onClick={submit}
        >
          Submit
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;
