import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>
            <h2 className='fs-2'>To create a ticket, select relevant topic</h2>
          
            <div className='col-4 p-5 mt-2 mb-2'>
            <h4 className='mb-3 fs-4'><i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h4>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Resident individual</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Minor</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Non Resident Indian (NRI)</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Company, Partnership, HUF and LLP</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Glossary</a>
             
          </div>
             <div className='col-4 p-5 mt-2 mb-2'>
            <h4 className='mb-3 fs-4'><i className="fa fa-user" aria-hidden="true"></i> Your Zerodha Account</h4>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Your Profile</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Account modification</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Non Resident Indian (NRI)</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Nomination</a><br></br>
            </div>
             <div className='col-4 p-5 mt-2 mb-2'>
            <h4 className='mb-3 fs-4'><i className="fa fa-bar-chart" aria-hidden="true"></i> Your Zerodha Account</h4>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Your Profile</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Minor</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Account modification</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Client Master Report (CMR) and Depository Participant (DP)</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Transfer and conversion of securities</a>
             
          </div>
             <div className='col-4 p-5 mt-2 mb-2'>
            <h4 className='mb-3 fs-4'><i className="fa fa-archive" aria-hidden="true"></i> Funds</h4>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Add money</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Withdraw money</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Add bank accounts</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>eMandates</a><br></br>

            </div>
             <div className='col-4 p-5 mt-2 mb-2'>
            <h4 className='mb-3 fs-4'><i className="fa fa-power-off" aria-hidden="true"></i> Console</h4>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Portfolio</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Corporate actions</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Funds statement</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Segments</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Reports</a>
             
          </div>
             <div className='col-4 p-5 mt-2 mb-2'>
            <h4 className='mb-3 fs-4'><i className="fa fa-circle-thin" aria-hidden="true"></i> Coin</h4>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Mutual funds</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Fixed Deposit (FD)</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>National Pension Scheme (NPS)</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Payments and Orders</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>Features on Coin</a><br></br>
              <a href="" style={{textDecoration:"none", lineHeight:"2"}}>General</a><br></br>
          </div>  
          </div>
        </div>
     );
}

export default CreateTicket;