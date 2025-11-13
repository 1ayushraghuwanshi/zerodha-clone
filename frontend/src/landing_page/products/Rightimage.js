import React from 'react';

function Rightimage({productName, productDescription, learnMore, imageURL}) {
    return ( 
        <div className='container mt-5 '>
            <div className='row'>
              <div className='col-6 mt-5 pt-5'>
                   <h1 className='col-6 mt-5 pt-5'>{productName}</h1>
                    <p className='col-6 mt-5 '>{productDescription}</p>
                    <a href={learnMore} style={{ marginLeft: "50px", textDecoration:"none"}}>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                  
                </div>
                <div className='col-6 mt-5 ' >
                      <img src={imageURL}></img>
                </div>
            </div>
        </div>
     );
}

export default Rightimage;