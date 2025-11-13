import React from 'react';

function Statics() {
    return ( 
       <div className='container p-5'>
        <div className='row p-5'>
            <div className='col-6 p-5'>
                <h1 className='mb-5 fs-2'>Trust with confidence</h1>
                
                    <h3 className='fs-4'>Customer-first always</h3>
                    <p className='mt-4 text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p className='mt-4 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h3 className='fs-4'>The Zerodha universe</h3>
                    <p className='mt-4 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className='fs-4'>Do better with money</h3>
                    <p className='mt-4 text-muted'>Do better with money</p>
             </div> 
            <div className='col-6'>
                <img src="media/images/ecosystem.png" style={{width:"90%", }}></img>
              <div className='text-center'>
                <a href=''  style={{textDecoration:"none"}} className="mx-5">Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href='' style={{textDecoration:"none"}}>Try Kite <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>

        </div>
       </div>
     );
}

export default Statics;