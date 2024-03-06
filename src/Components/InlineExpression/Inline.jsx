import React, { useEffect } from 'react'

export const Inline = () => {

    useEffect(() => {
        let age = 18;
        let name = "john"
        age > 18 ? console.log("adult") : (name === "john" && age === 18) ? console.log("true") : console.log("false");
    },[])
  return (
    <div>Inline</div>
  )
}
