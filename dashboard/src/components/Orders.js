import React,{useEffect, useState} from "react";
import axios from "axios";

const Orders = () => {
 const [allOrders, setAllOrders] = useState([]);

 useEffect(() => {
  axios.get("http://localhost:3002/allOrders").then((res) => {
    setAllOrders(res.data);
  })
 }, [])


  return (
  <div>
  {allOrders.map((Order) => (
    <div key={Order._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3 style={{color: "orangered"}}>{Order.name}</h3>
      <p>Quantity: {Order.qty}</p>
      <p>Price: ₹{Order.price}</p>
      <p>Mode: {Order.mode}</p>
    </div>
  ))}
</div>

   
    
 );
};

export default Orders;