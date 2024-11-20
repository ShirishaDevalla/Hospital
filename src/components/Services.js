import React from 'react'
import Header from './Header'

const Services = () => {
  return (
    <div> <Header />
    <div className='container'>
     <div className='d-flex flex-wrap justify-content-center align-items-center m-4'>
      <h3> Services Plan</h3>
     </div>
      <div className="">
        <div className="row justify-content-center m-4 ">
          <div className="col-md-12 ">
            <div className="card rounded shadow-sm">

              <div className="row m-2 p-0">
                <div className="col-md-4  ">
                  <div className="card rounded shadow-lg bg-light">
                    <div className="card-body ">
                      <div className="d-flex bg-card1 flex-column align-items-center">
                        <div className="d-flex align-items-center">
                          <h1 className="me-2">699</h1>
                          <p>/year</p>
                        </div>
                        <h3>Gold One</h3>
                        <p className="text-center">Advanced tools to take your work to the next level.</p>
                        <ul className="list-unstyled">
                          <li>&#x2714; Applies to one person only</li>
                          <li>&#x2714; Free consultation worth 699</li>
                          <li>&#x2714; Priority Appointment booking</li>
                          <li>&#x2714; 24/7 Customer support</li>
                          <li>&#x2714; Hospitalization support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 ">
                  <div className="card rounded shadow-lg bg-light">
                    <div className="card-body ">
                      <div className="d-flex bg-card1 flex-column align-items-center ">
                        <div className="d-flex align-items-center ">
                          <h1 className="me-2">2499</h1>
                          <p>/year</p>
                        </div>
                        <h3>Gold Family</h3>
                        <p className="text-center">Advanced tools to take your work to the next level.</p>
                        <ul className="list-unstyled">
                          <li>&#x2714; 4+2 -4 Adults & 2 Children</li>
                          <li>&#x2714; Free consultation Voucher</li>
                          <li>&#x2714; Priority Appointment booking</li>
                          <li>&#x2714; 24/7 Customer support</li>
                          <li>&#x2714; Hospitalization support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 ">
                  <div className="card rounded shadow-lg bg-light">
                    <div className="card-body ">
                      <div className="d-flex bg-card1 flex-column align-items-center ">
                        <div className="d-flex align-items-center mb-2">
                          <h1 className="me-2">2999</h1>
                          <p>/year</p>
                        </div>
                        <h3>Gold Grand Family</h3>
                        <p className="text-center">Advanced tools to take your work to the next level.</p>
                        <ul className="list-unstyled">
                          <li>&#x2714; 4+4 -4 Adults & 4 Children</li>
                          <li>&#x2714; Free consultation Voucher</li>
                          <li>&#x2714; Priority Appointment booking</li>
                          <li>&#x2714; 24/7 Customer support</li>
                          <li>&#x2714; Hospitalization support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
      </div>



    </div>

  )
}

export default Services