import React from 'react'

export const ControlComp = () => {

    const name = React.createRef();
    const age = React.createRef();

    const handleSubmit = () => {
        console.log(name.current.value);
        console.log(age.current.value);
    }

    const handleNameChange = (e) => {
        console.log(e.target.value);    
    }
    const handleAgeChange = (e) => {
        console.log(e.target.value);
    }

  return (
    <div>
        {/* uncontrolled component */}
        {/* <input type="text"  ref={name}/>
        <input type="number" ref={age} />
        <button onClick={handleSubmit}>Submit</button> */}

        {/* controlled component */}
        <input type="text"  onChange={handleNameChange}/>
        <input type="number" onChange={handleAgeChange} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
