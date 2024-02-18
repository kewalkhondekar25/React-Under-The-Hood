import React from 'react'

const Prop2 = ({ data }) => {

    return (
        <div className='container-fluid'>
            {
                data.map((item) => {
                    const { name, src } = item;
                    return (
                        <div>
                            <img src={src} height={200} width={200} alt="pics" />
                            <p>{name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Prop2