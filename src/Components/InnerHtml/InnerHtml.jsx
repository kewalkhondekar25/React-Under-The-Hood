import React from 'react'

export const InnerHtml = () => {
    let msg = `<h3 style="color: red">Hello World</h3>`
  return (
    <div className='bg-dark vh-100'>
        <div dangerouslySetInnerHTML={{__html : msg}}></div>
    </div>
  )
}
