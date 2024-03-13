import React, { useState } from 'react'

const Carousal = () => {

    const data = [
        "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1089306/pexels-photo-1089306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];
    const [count, setCount] = useState(0);
    const handlePrev = () => {
    if()
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
            <button 
            onClick={() => setCount(count - 1)}
            style={{ height: "50px", marginTop: "150px", padding: "10px"}}
            >prev</button>
            
            <img src={data[count]} alt="pic" style={{ height: "400px" }} />
            <button 
            onClick={() => setCount(count + 1)}
            style={{ height: "50px", marginTop: "150px", padding: "10px"}}
            >next</button>
            
        </div>
    )
}

export default Carousal
