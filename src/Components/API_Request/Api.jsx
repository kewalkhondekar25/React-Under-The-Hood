import React, { useState } from 'react'

export const Api = () => {
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: ""
    });

    const handleName = (e) => {
        setUserDetails({
            name: e.target.value,
            email: userDetails.email
        })
    };

    const handleEmail = (e) => {
        setUserDetails({
            name: userDetails.name,
            email: e.target.value
        })
    }
  return (
    <div>
        <input type="text" placeholder='your name' onChange={handleName} />
        <input type="email" placeholder='your email' onChange={handleEmail}  />
        <button onClick={() => console.log(userDetails)}>Submit</button>
    </div>
  )
}
