import React from 'react'

export const ControlComp = () => {

    const name = React.createRef();
    const age = React.createRef();

    const handleSubmit = () => {
        console.log(name.current.value);
        console.log(age.current.value);
    }

  return (
    <div>
        <input type="text"  ref={name}/>
        <input type="number" ref={age} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
