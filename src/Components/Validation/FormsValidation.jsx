import React, { useState } from 'react'

const FormsValidation = () => {

    const [userId, setUserId] = useState([
        { id: "arjun" },
        { id: "arjun1" },
        { id: "arjun12" }
    ]);
    const [msg, setMsg] = useState();
    const [pwdMsg, setPwdMsg] = useState();
    const [capsMsg, setCapsMsg] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [cityMsg, setCityMsg] = useState();
    const [userDetails, setUserDetails] = useState(
        {
            userId: "",
            pwd: ""
        }
    );


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

    const handleBlur = (e) => {
        if(e.target.value == ""){
            setMsg("User Id is Required")
        }else{
            setMsg(" ");
        }
    }

    const handlePwdBlur = () => {
        setPwdMsg("");
    }

    const handleCaps = (e) => {
        if(e.keyCode >= 65 && e.keyCode <=90 || e.which >= 65 && e.which <=90){
            // console.log("caps");
            setCapsMsg(true);
        }else{
            setCapsMsg(false);
        }
    }

    const handlePwd = (e) => {
        if (e.target.value.match(/(?=.*[A-Z])\w{4,10}/)) {
            setPwdMsg("Strong Password");
            setIsValid(true);
        } else if (e.target.value.length < 4) {
            setPwdMsg("Poor Password");
            setIsValid(false);
        } else {
            setPwdMsg("Weak Password");
            setIsValid(false);
        }
    }

    const handleCity = (e) => {
        if(e.target.value == "nocity"){
            setCityMsg("Select a valid city")
        }else{
            setCityMsg(" ");
        }
    }

    const handleUserIdChange = (e) => {
        setUserDetails({
            userId: e.target.value,
            pwd: userDetails.pwd
        });
    }

    const handleUserPwdChange = (e) => {
        setUserDetails({
            userId: userDetails.userId,
            pwd: e.target.value
        });
    }

    const handleSubmit = () => {
        alert(JSON.stringify(userDetails));
    }

    return (
        <div className='container-fluid'>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text"
                    onKeyUp={handleUserId}
                    onBlur={handleBlur}
                    onChange={handleUserIdChange} /></dd>
                <dd><p className={isValid ? "text-success" : "text-danger"}>{msg}</p></dd>
                <dt>Password</dt>
                <dd>
                    <input type="password" 
                    onKeyUp={handlePwd}
                    onBlur={handlePwdBlur}
                    onChange={handleUserPwdChange} />
                </dd>
                <p className={isValid ? "text-success" : "text-danger"}>{pwdMsg}</p>
                {capsMsg && <p className='text-warning'>Capslog is ON</p>}
                <dt>Your City</dt>
                <dd>
                    <select onChange={handleCity}>
                        <option value="nocity">Select a City</option>
                        <option value="pune">Pune</option>
                        <option value="nagpur">Nagpur</option>
                    </select>
                </dd>
                <p className='text-danger'>{cityMsg}</p>
            </dl>
            <button onClick={handleSubmit} className='btn btn-primary'>Submit</button>
        </div>
    )
}

export default FormsValidation