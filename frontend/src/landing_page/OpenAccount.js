import React from 'react';
import { Link } from "react-router-dom";
function OpenAccount() {
    return ( 
       <div className='container p-5'>
        <div className='row text-center'>
          <h1 className='mt-5 mb-4'>Open a Zerodha account</h1>
           <p className='mb-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
           <button className='p-2 mt-4 mb-5 btn btn-primary fs-5'  style={{width:"20%", margin: "0 auto"}}><Link to="/signup" style={{ color:"#fff", textDecoration:"none"}}>Sign up for free</Link></button>
        </div>
       </div>
     )
}

export default OpenAccount;