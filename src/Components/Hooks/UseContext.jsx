import React, { useContext, useState } from 'react'

//create context memory
const AppContext = React.createContext();

const UseContext = () => {

    const [info, setInfo] = useState({
        userName: "arjun",
        userEmail: "arjun@icloud.com"
    })
    return (
        //provide value into context
        <AppContext.Provider value={info}>
            <div className='bg-dark text-white vh-100'>
                <h3>UseContext</h3>
                <h3>Parent - {info.userName}</h3>
                <Child1 />
            </div>
        </AppContext.Provider>
    )
}

const Child1 = () => {
    //inject into component
    const child1Name = useContext(AppContext);
    return (
        <div className='bg-info h-25'>
            <h3>Child 1 - {child1Name.userName}</h3>
            <Child2 />
        </div>
    )
}

const Child2 = () => {
    const child2Email = useContext(AppContext);
    return (
        <div className='bg-warning h-25'>
            <h3>Child 2 - {child2Email.userEmail}</h3>
        </div>
    )
}

export default UseContext