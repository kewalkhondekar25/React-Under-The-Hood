import React, { useEffect, useState } from 'react'

const ComponentsLifeCycle = () => {

    const [msg, setMsg] = useState();

    const handleSuccess = () => {
        setMsg(<SuccessComponent/>)
    }

    const handleFailure = () => {
        setMsg(<FailureComponent/>)
    }
    
    return (
        <div className='bg-dark text-white vh-100'>
            <h3>ComponentsLifeCycle</h3>
            <button className='btn btn-success' onClick={handleSuccess}>Success</button>
            <button className='btn btn-danger' onClick={handleFailure}>Failure</button>
            <h3>{msg}</h3>
        </div>
    )
}

const SuccessComponent = () => {
    useEffect(() => {
        alert("Success Component will mount");
        return (() => {
            alert("Success Component will unmount")
        })
    }, [])
    return (
        <div>
            Success
        </div>
    )
}

const FailureComponent = () => {
    useEffect(() => {
        alert("Failure Component will mount");
        return (() => {
            alert("Failure Component will unmount");
        })
    }, [])
    return (
        <div>
            Failure
        </div>
    )
}

export default ComponentsLifeCycle