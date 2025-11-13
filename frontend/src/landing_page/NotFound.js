import React from 'react';

function NotFound() {
    return ( 
       <div className='container p-5'>
        <div className='row text-center'>
          <h1 style={{color:"red"}} className='mt-5 mb-4'>404 NoT Found</h1>
           <p className='mb-3'>Sorry, the page you are looking for does not exist</p>
         
        </div>
       </div>
     )
}

export default NotFound;