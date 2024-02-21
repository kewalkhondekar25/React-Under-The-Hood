import { useFormik } from 'formik'
import React from 'react'

const FormikValidation = () => {

    const ValidationFunction = (userDetails) => {
        const errors = {};
        if(userDetails.userName == ""){
            errors.userName = "User Name Required"
        }else if(userDetails.userName.length < 3){
            errors.userName = "User Name must be greater than 3 Charecters"
        }else if(userDetails.userName.length > 10){
            errors.userName = "User name too long"
        }
        if(userDetails.email == ""){
            errors.email = "Email Required"
        }else if(userDetails.email.indexOf("@") <= 2){
            errors.email = "Enter a valid email address"
        }
        if(userDetails.age == ""){
            errors.age = "Age Required"
        }else if(userDetails.age < 1 || userDetails.age >= 100){
            errors.age = "Invalid Age"
        }
        return errors
    }

    const formik = useFormik({
        initialValues: {
            userName: "",
            email: "",
            age: 0
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        },
        validate: ValidationFunction
    })

    
    return (
        <div className='bg-dark text-white vh-100'>
            <h3>FormikValidation</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input className='form-control w-25' type="text" name='userName'
                            value={formik.values.userName} onChange={formik.handleChange}/>
                    </dd>
                    <dd className='text-danger'>{formik.errors.userName}</dd>
                    <dt>Email</dt>
                    <dd>
                        <input className='form-control w-25' type="text" name='email'
                            value={formik.values.email} onChange={formik.handleChange}/>
                    </dd>
                    <dd className='text-danger'>{formik.errors.email}</dd>
                    <dt>Age</dt>
                    <dd>
                        <input className='form-control w-25' type="number" name="age"
                            value={formik.values.age} onChange={formik.handleChange}/>
                    </dd>
                    <dd className='text-danger'>{formik.errors.age}</dd>
                    <button className='btn btn-primary'>Register</button>
                </dl>
            </form>
        </div>
    )
}

export default FormikValidation