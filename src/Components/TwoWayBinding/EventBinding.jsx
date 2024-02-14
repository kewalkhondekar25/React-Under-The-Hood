import React, { useState } from 'react'

const EventBinding = () => {

    const [userName, setUserName] = useState("arjun");

    const handleClick = (e) => {
        setUserName(e.target.value);
    };

    return (
        <div className='container-fluid bg-dark text-white vh-100'>
            <h1>EventBinding</h1>
            <dl>
                <dt>User Name</dt>
                <dd><input className='form-control w-25' type="text" value={userName} onChange={handleClick} /></dd>
            </dl>
            <p>Hello! {userName}</p>
        </div>
    )
}

export default EventBinding