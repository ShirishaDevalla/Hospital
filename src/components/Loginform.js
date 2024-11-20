import React, { useState } from 'react';
import Doctorimage from '../image/doctor.jpg'
import { useNavigate } from 'react-router-dom';
import { loginfunction } from './services/ServiceFunction';
import Url from './services/Url';


const Loginform = () => {
    const navigation= useNavigate()
    const handlesubmit=async()=>{
        console.log("submit")
        // navigation("/Dashboard")
        
       let response=await loginfunction(Url.login.login,state)
       console.log(response?.data,"new data")
       if(response?.data?.status==true){
        navigation("/Dashboard")
      
       }
    }
    
    const[state, setState]=useState({})
    const handleOnChange=(event)=>{
        
        const {name,value}=event.target
        setState({
            ...state,
            [name]:value
        })
        
    }
    console.log(state)


     
    return (
        <div 
            className="background-container" 
            style={{
                backgroundImage: `url(${Doctorimage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh', 
                display: 'flex',
                justifyContent: 'center', 
                alignItems: 'center' 
            }}
          
        >
            <div className="border p-4 rounded shadow-sm bg-white" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className='text-center text-black mb-4'>Login Form</h2>
             
                    <div className='form-group mb-3'>
                        <label className='mb-2' htmlFor='username'>Username</label>
                        <input name='userName'
                            type='text' 
                            className='form-control' 
                            id='username' 
                            placeholder='Username'
                            onChange={handleOnChange} 
                            required 
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label className='mb-2' htmlFor='password'>Password</label>
                        <input name='password'
                            type='password' 
                            className='form-control' 
                            id='password' 
                            placeholder='Password' 
                            onChange={handleOnChange} 
                            required 
                        />
                    </div>
                    <div className="text-start mt-3" style={{fontWeight:'bold'}}>
                <p >Forgot your password?</p>
              </div>
                    <div>
                        <button type='submit' className='btn btn-info py-2 w-100'onClick={handlesubmit}>
                            Login
                        </button>
                    </div>
                
            </div>
        </div>
    );
}

export default Loginform;
