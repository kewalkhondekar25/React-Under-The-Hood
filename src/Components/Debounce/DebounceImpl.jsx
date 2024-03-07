import React from 'react'

export const DebounceImpl = () => {
    const myDebounce = (cb, d) => {
        let timer;
        return function(...args){
            if(timer)
            {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                cb(...args)
            }, d);
        }
    }
    const handleChange = myDebounce((e) => {
        alert(e.target.value);
    }, 1000)
  return (
    <div className='bg-dark text-white vh-100'>
        <input type="text" className='form-control w-25' onChange={handleChange} />
    </div>
  )
}
