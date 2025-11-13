import React from 'react';
import { Link } from "react-router-dom";
function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center mb-5 '>
                <h5 className='text-muted text-small mb-5'>Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</h5>
                <h2 className='mt-5 pb-2' style={{color:"#424242"}}>The Zerodha Universe</h2>
                <p className='text-muted text-small'>Extend your trading and investment experience even further with our partner platforms</p>
            
                 <div className='col-4 p-4 mt-5'>
                <img src="media/images/zerodhaFundhouse.png" style={{heigth:"200px", width:"200px"}}  alt="img"></img>
                <p className='text-small text-muted mt-2'>Asset management
                </p>
                 </div>
                 <div  className='col-4 p-4 mt-5'>
                  <img src="media/images/streakLogo.png" style={{heigth:"200px", width:"200px"}}  alt="img"></img>
                  <p className='text-small text-muted mt-2'>Algo & strategy platform</p>
                 </div>
               
                 <div className='col-4 p-4 mt-5'>
                <img src="media/images/sensibullLogo.svg" style={{heigth:"200px", width:"200px"}}  alt="img"></img>
                <p className='text-small text-muted mt-2'>Options trading platform</p>
                 </div>
                 <div className='col-4 p-3 mt-4'>
                <img src="media/images/smallcaseLogo.png" style={{heigth:"200px", width:"200px"}}  alt="img"></img>
                <p className='text-small text-muted mt-2'>Thematic investing platform</p>
                 </div>
                 <div className='col-4 p-3 mt-4' >
                  <img src="media/images/dittoLogo.png" style={{heigth:"200px", width:"200px"}}  alt="img"></img>
                  <p className='text-small text-muted mt-2'>Insurance</p>
                 </div>
                 <div className='col-4 p-3 mt-4'>
                <img src="media/images/goldenpiLogo.png" style={{heigth:"200px", width:"200px"}} alt="img"></img>
                <p className='text-small text-muted mt-2'>Bonds trading platform</p>
                 </div>
                 <div className='text-center mt-5 mb-5'>
                      <button className='btn btn-primary' style={{width:"20%"}}><Link to="/signup" style={{ color:"#fff", textDecoration:"none"}}>Sign up for free</Link></button>
                 </div>
               
             </div> 
               
         </div> 
          
     );
}

export default Universe;