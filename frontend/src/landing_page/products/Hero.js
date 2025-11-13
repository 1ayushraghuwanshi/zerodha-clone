import React from 'react';

function Hero() {
    return (  
        <div className='container border-bottom pb-5'>
            <div className='text-center mt-5 text-muted text-small'>
                <h1 className='pt-5 fs-2' style={{color:"#322e2e"}}>Zerodha Products</h1>
                <h3 className='fs-4 mt-3' >Sleek, modern, and intuitive trading platforms</h3><br></br>
                <h6 className='pb-5'>Check out our <a href="" style={{textDecoration:"none"}}>investment offerings <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a> </h6>
            </div>
            
        </div>
    );
}

export default Hero;