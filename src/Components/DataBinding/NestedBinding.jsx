import React from 'react'

const NestedBinding = () => {
    const products = [
        {
            category: "electronics",
            products: ["mobile", "earphone"]
        },
        {
            category: "footware",
            products: ["nike", "adidas"]
        }
    ]
    return (
        <div>
            <h1>NestedBinding</h1>
            <ol>
                {
                    products.map((items) => {
                        return(
                            <li key={items.category}>{items.category}
                                <ul>
                                    {
                                        items.products.map((item) => {
                                            return(
                                                <li key={item}>{item}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        )
                    })
                }
            </ol>
            <h3>Select a category</h3>
            <select>
                {
                    products.map((items) => {
                        return(
                            <optgroup key={items.category} label={items.category}>
                                {
                                    items.products.map((items) => {
                                        return(
                                            <option key={items}>{items}</option>
                                        )
                                    })
                                }
                            </optgroup>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default NestedBinding