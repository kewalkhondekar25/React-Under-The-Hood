import React, { useState } from 'react'

const FormsValidation = () => {

    const [userId, setUserId] = useState([
        { id: "arjun" },
        { id: "arjun1" },
        { id: "arjun12" }
    ]);
    const [msg, setMsg] = useState();
    const [isValid, setIsValid] = useState(false);


    const handleUserId = (e) => {
        for (var user of userId) {
            if (e.target.value == user.id) {
                setMsg("User Id already exists");
                setIsValid(false)
                break;
            } else {
                setMsg("User Id available");
                setIsValid(true);
            }
        }
    }

    const handleBlur = () => {
        setMsg(" ");
    }

    return (
        <div className='container-fluid'>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" 
                onKeyUp={handleUserId}
                onBlur={handleBlur} /></dd>
                <dd><p className={isValid ? "text-success" : "text-danger"}>{msg}</p></dd>
            </dl>
        </div>
    )
}

export default FormsValidation