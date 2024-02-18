import React from 'react'
import Prop2 from './Prop2'

const Prop1 = () => {
    const data = [
        {
            name: "oat meal",
            src: "https://images.pexels.com/photos/543730/pexels-photo-543730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            name: "pasta",
            src: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }
    ]
    return (
        <div className='container-fluid'>
            Image Galary
            <Prop2 data={data}/>
        </div>
    )
}

export default Prop1