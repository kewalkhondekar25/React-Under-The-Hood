import React, { useEffect, useState } from 'react'

const Filter = () => {

  const [products, setProducts] = useState([]);
  const [filterProd, setFilterProd] = useState([]);

  const loadProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }

  const handleClick = (e) => {
    alert(`${e.target.id} added to cart`);
    const filterItems = products.filter(item => item.id == e.target.id);
    setFilterProd(prev => [...prev, filterItems])
    console.log(filterProd);
  }


  useEffect(() => {
    loadProducts();
  }, [])

  return (
    <div className='bg-dark text-white d-flex'>
      <div>
        {
          products.map((item) => {
            return (
              <div key={item.id} className="card w-25 m-1">
                <img className="card-img-top h-25 w-25" src={item.image} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button id={item.id} onClick={handleClick} className='btn btn-primary'>Add to Cart</button>
                </div>
              </div>
            )
          })
        }
      </div>
      <div>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              filterProd.map(items => {
                return items.map(item => {
                  return (
                    <tr>
                      <td>{item.title}</td>
                      <td>
                        <img src={item.image} alt="pic" height={100} />
                      </td>
                      <td>{item.price}</td>
                    </tr>
                  )
                })
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Filter
