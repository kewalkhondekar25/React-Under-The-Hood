import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UseMemoDemo = () => {
    const [theme, setTheme] = useState(true);
    const [products, setProducts] = useState([]);
    
    const loadProds = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products');
            const data = res.data;
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }
    const filterProds = (arr) => {
        console.log('filtering...');
        return  arr.filter(item => item.price < 900);
    }
    useEffect(() => {
        loadProds();
    }, []);

  return (
    <div style={theme ? {backgroundColor: 'black', color: 'white', height: '100vh'} : {backgroundColor: 'white', color: 'black', height: '100vh'}}>
        <h3>Use Memo</h3>
        <button onClick={() => setTheme(prev => !prev)}>Toggle Theme</button>
        {/* <button onClick={filterProds}>Filter</button> */}
        {
            filterProds(products).map(item => {
                return(
                    <div key={item.id}>
                        <p>{item.price}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default UseMemoDemo
