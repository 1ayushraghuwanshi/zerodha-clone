import React from 'react';
import Hero from "./Hero";
import Awards from "./Awards";
import Statcs from "./Statcs";
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from "../OpenAccount";



function HomePage() {
    return ( 
       <>
    
       <Hero/>
       <Awards/>
       <Statcs/>
       <Pricing/>
       <Education/>
       <OpenAccount/>
       
       </>
     );
}

export default HomePage;