import React from 'react';

function Leftimage({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src={imageURL}></img>
                </div>
                <div className='col-6 mt-5 pt-2'>
                    <h1 >{productName}</h1>
                    <p >{productDescription}</p>
                    <div>
                     <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{ marginLeft: "50px", textDecoration:"none"}}>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-5 pt-2'>
               
                    <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"></img></a>
                    <a href={appStore}  style={{ marginLeft: "50px"}}><img src="media/images/appStoreBadge.svg"></img></a>
                    </div>
                </div>
                
            </div>
        </div>
     );
}

export default Leftimage;