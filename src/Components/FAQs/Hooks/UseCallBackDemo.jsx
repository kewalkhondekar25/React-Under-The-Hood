import React, { memo, useCallback, useState } from 'react'

const UseCallBackDemo = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const memoizeFunc1 = useCallback(() => setCount1(count1 + 1), [count1]);
    const memoizeFunc2 = useCallback(() => setCount2(count2 + 1), [count2]);
    
  return (
    <div>
        <h3>UseCallBackDemo</h3>
        <p>count1: {count1}</p>
        <p>count2: {count2}</p>
        <ChildFunc text={'button1'} onClick={memoizeFunc1}/>
        <ChildFunc text={'button2'} onClick={memoizeFunc2}/>
    </div>
  )
}

const ChildFunc = memo(({text, onClick}) => {
    console.log('rendering...', text);
    return(
        <div>
            <button onClick={onClick}>{text}</button>
        </div>
    )
})

export default UseCallBackDemo