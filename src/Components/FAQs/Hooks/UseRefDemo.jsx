import React, { useEffect, useRef } from 'react'

const UseRefDemo = () => {
    const cursor = useRef(null);
    const btn = useRef(null);

    useEffect(() => {
        btn.current.focus();
        console.log(btn.current);
    }, [])
  return (
    <div className='bg-dark text-white vh-100'>
        <dl>
            <dt>Login</dt>
            <dd><input className='form-control w-25' ref={cursor} type="text" placeholder='Enter Your User Id '/></dd>
            <button className='btn btn-primary w-25' ref={btn}>Log In</button>
        </dl>
    </div>
  )
}

export default UseRefDemo
