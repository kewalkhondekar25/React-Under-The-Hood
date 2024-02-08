import React from 'react'

const TableBinding = () => {
    const products = [
        {
            id: 1,
            name: "iphone",
            price: 49999
        },
        {
            id: 2,
            name: "samsung",
            price: 9999
        },
        {
            id: 3,
            name: "sony",
            price: 19999
        }
    ]
    return (
        <div>
            <h1>TableBinding</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((items) => {
                            return(
                                <tr key={items.id}>
                                    <td key={items.name} >{items.name}</td>
                                    <td key={items.price} >{items.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default TableBinding