import React, { useEffect, useState } from "react";
import HigherOrder2 from "./HigherOrder2";

const FakeStore = ({products}) => {
    return(
        <div>
            {
                products.map(item => {
                    return(
                        <div key={item.id}>
                            <ul>
                                <li>{item.title}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
};

const FakeStoreHoc = HigherOrder2(FakeStore, 'https://fakestoreapi.com/products')

export default FakeStoreHoc;