import React, { useEffect, useState } from 'react'

const Map = () => {

    const [data, setData] = useState([]);

    const loadData = () => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setData(data))
    }

    useEffect(() => {
        loadData();
    }, [])
    
    console.log(data);

  return (
    <div className=''>
        {
            data.map((item) => {
                return(
                    <div  key={item.id}>
                        <h3>{item.id}</h3>
                        <img src={item.image} height={150} width={150}/>
                        <h4>{item.title}</h4>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Map