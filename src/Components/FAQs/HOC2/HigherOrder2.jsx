import { useEffect, useState } from "react";

const HigherOrder2 = (Component, url) => {
    return () => {
        const [products, setProducts] = useState([]);   
        const loadProducts = () => {
            fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => {
                console.log(error);
            })
        }
        useEffect(() => {
            loadProducts();
        }, []);

        return(
            <Component products={products}/>
        )
    }
}

export default HigherOrder2;