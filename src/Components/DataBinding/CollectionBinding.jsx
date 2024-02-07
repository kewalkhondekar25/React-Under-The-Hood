import React from 'react'

const CollectionBinding = () => {
    const currency = ["rupees", "dollar", "pound", "euro"]
    return (
        <div>
            <h1>CollectionBinding</h1>
            <ol>
                {
                    currency.map((item) => {
                        return (<li key={item}>{item}</li>)
                    })
                }
            </ol>
            <select>
                {
                    currency.map((items) => {
                        return(
                            <option key={items} value={items}>{items}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default CollectionBinding