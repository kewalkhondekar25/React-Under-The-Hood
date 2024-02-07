import React from 'react'

const DataBindingComponents = () => {
  const products = {
    name: "iphone 12",
    price: 55000,
    src:"https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stock: true
  }
  return (
    <div>
      <h3>Products info</h3>
      <dl>
        <dt>Name</dt>
        <dd>{products.name}</dd>
        <input type="text" value={products.name} />
        <dt>Price</dt>
        <dd>{products.price}</dd>
        <dt>Preview</dt>
        <dd><img src={products.src} height={200} width={200} /></dd>
        <dt>Stock</dt>
        <dd>{products.stock == true? "Available":"Out of Stock"}</dd>
      </dl>
    </div>
  )
}

export default DataBindingComponents
