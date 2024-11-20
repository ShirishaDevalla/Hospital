import React from 'react';
import Header from './Header';
import Doctorimage from '../image/doctor1.jpg';
import Patienticon from '../image/md_registration_icon.png';
import Addmisionicon from '../image/md_ipd_icon.png';
import Clinic from '../image/md_clinic_opd_ipd_icon.png';
import Billingicon from '../image/md_billing_icon.png';
import Neurologist from '../image/neurologist.png';
import Dermatologist from '../image/dermatologist.jpg';
import Gynecologist from '../image/doctor_gynecologist.webp';
import Cardiology from '../image/doctor-Cardiology.webp';
import GeneralPhysician from '../image/doctor-icon-physician.png';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container my-5">
        <div className="card mb-4 shadow-lg rounded">
          <div className="card-body d-flex align-items-center">
            <div className="me-3">
              <img
                src={Doctorimage}
                alt="Doctor"
                className="img-fluid"
                style={{ height: '200px', width: 'auto' }}
              />
            </div>
            <div>
              <h1>Book Appointment</h1>
              <h3>With 100+ Trusted Doctors</h3>
              <p>
                Schedule your appointment easily with top doctors. Get personalized care from professionals near you.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm rounded">
              <div className="card-body d-flex align-items-center">
                <div className="col-md-2">
                  <img src={Patienticon} alt="Patient Registration" className="img-fluid" />
                </div>
                <div className="col-md-10">
                  <h4>Patient Registration </h4>
                  <p>
                    The patient registration module is used for patient registration and confirm, and cancel appointments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm rounded">
              <div className="card-body d-flex align-items-center">
                <div className="col-md-2">
                  <img src={Addmisionicon} alt="Admission" className="img-fluid" />
                </div>
                <div className="col-md-10">
                  <h4>Admission, Discharge & Transfer (IPD)</h4>
                  <p>
                    The IPD module handles the complete treatment and services provided to patients during their stay in the hospital.
                  </p>
                </div>
              </div>
            </div>
          </div>

         
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm rounded">
              <div className="card-body d-flex align-items-center">
                <div className="col-md-2">
                  <img src={Clinic} alt="Clinic" className="img-fluid" />
                </div>
                <div className="col-md-10">
                  <h4>Clinic (OPD & IPD)</h4>
                  <p>
                    The Clinic module allows clinicians to record clinical data, treatment plans, prescriptions, and manage patient care.
                  </p>
                </div>
              </div>
            </div>
          </div>

         
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm rounded">
              <div className="card-body d-flex align-items-center">
                <div className="col-md-2">
                  <img src={Billingicon} alt="Billing" className="img-fluid" />
                </div>
                <div className="col-md-10">
                  <h4>Billing</h4>
                  <p>
                    The Billing module handles all types of billing workflows and allows billing operators to manage receipts and refunds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center my-5">
          <h1>Find by Speciality</h1>
          <p>Simply browse through our extensive list of trusted doctors and schedule your appointment with ease.</p>
          <div className="row justify-content-center">
            
            {[
              { img: Neurologist, label: 'Neurologist' },
              { img: Dermatologist, label: 'Dermatologist' },
              { img: Gynecologist, label: 'Gynecologist' },
              { img: Cardiology, label: 'Cardiology' },
              { img: GeneralPhysician, label: 'General Physician' },
            ]?.map((v, i) => (
              <div key={i} className="col-md-2 mb-4">
                <div className="card text-center shadow-sm rounded">
                <img
                      src={v.img}
                      alt={v.label}
                      className="card-img-top"
                />
                  <div className="card-body">
                    <h5 className="card-title">{v.label}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
