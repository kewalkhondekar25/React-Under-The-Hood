import { useFormik } from 'formik'
import React from 'react'

const Formik = () => {

    const formik = useFormik({
        initialValues: {
            userName: "",
            password: "",
            city: "",
            pro: false
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        }
    })
    return (
        <div className='bg-dark text-white vh-100'>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input className='form-control w-25' type="text" name='userName'
                            value={formik.values.userName} onChange={formik.handleChange} />
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input className='form-control w-25' type="password"
                            name='password' value={formik.values.password} onChange={formik.handleChange} />
                    </dd>
                    <dt>City</dt>
                    <dd>
                        <select className='form-select w-25' name='city' value={formik.values.city} 
                        onChange={formik.handleChange}>
                            <option>Pune</option>
                            <option>Nagpur</option>
                        </select>
                    </dd>
                    <dt>Pro</dt>
                    <dd>
                        <div className='form-switch'>
                            <input type="checkbox" className='form-check-input' name='pro' 
                            checked={formik.values.pro}
                            onChange={formik.handleChange} />
                        </div>
                    </dd>
                </dl>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default Formik