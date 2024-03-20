import React, { useEffect, useState } from 'react'
import HigherOrder2 from './HigherOrder2'

const VeganMeals = ({products}) => {
    
    return(
        <div>
            {
                products.map(item => {
                    return(
                        <div key={item._id}>
                            <ul>
                                <li>{item.title}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}
const VeganMealsHOC = HigherOrder2(VeganMeals, 'https://vegan-meals-api.vercel.app/api/v1/meals');

export default VeganMealsHOC
