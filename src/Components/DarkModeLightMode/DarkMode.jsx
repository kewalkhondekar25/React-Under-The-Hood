import React, { useState } from 'react'

const DarkMode = () => {

    const [theme, setTheme] = useState();

    const handleSwitch = (e) => {
        if(e.target.checked){
            setTheme({
                backgroundColor: "black",
                color: "white",
                padding: "50px",
            })
        }else{
            setTheme({
                backgroundColor: "white",
                color: "black",
                padding: "50px",
            })
        }
    }

    return (
        <div className='container-fluid mt-5'>
            <div style={theme}>
                <div className='form-switch'>
                    <input type="checkbox" className='form-check-input' onChange={handleSwitch} />
                </div>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className='form-control w-25' /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className='form-control w-25' /></dd>
                </dl>
                <button className='btn btn-primary w-25' >Log In</button>
            </div>
        </div>
    )
}

export default DarkMode