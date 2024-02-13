import React, { useEffect, useState } from 'react'

const NasaApi = () => {

    const [mars, setMars] = useState();

    useEffect(() => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then( res => res.json())
        .then( data => {
            setMars(data);
        })
    },[]);

    return (
        <div >
            <h1>NasaApi</h1>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>SR. NO</th>
                        <th>ID</th>
                        <th>CAMERA NAME</th>
                        <th>PREVIEW</th>
                        <th>ROVER NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mars?.photos.map( (items, index) => {
                            return(
                                <tr key={items.id}>
                                    <td key={index}>{index}</td>
                                    <td key={index.id}>{items.id}</td>
                                    <td key={items.camera.full_name}>{items.camera.full_name}</td>
                                    <td key={items.img_src}>
                                        <img className='pic' src={items.img_src} alt="pic" />
                                    </td>
                                    <td key={items.rover.name}>{items.rover.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default NasaApi