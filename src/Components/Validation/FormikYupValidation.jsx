import React from 'react'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'


const FormikYupValidation = () => {
    return (
        <div className='bg-dark text-white vh-100'>
            <h1>FormikYupValidation</h1>
            <Formik
                initialValues={
                    {
                        userName: "",
                        Email: "",
                        age: 0,
                        city: ""
                    }
                }
                validationSchema={
                    yup.object({
                        userName: yup.string().min(3, "Username too short").max(10, "Username too long")
                            .required("Username Required"),
                        Email: yup.string().email("Invalid Email").required("Email Required"),
                        age: yup.number().required("Age Required"),
                        city: yup.string()
                    })
                }
                onSubmit={(values) => {
                    alert(JSON.stringify(values))
                }}
            >
                {
                    (props) => <Form>
                        {
                            <div>
                                <dl>
                                    <dt>User Name</dt>
                                    <dd><Field className='form-control w-25' type="text" name="userName"></Field></dd>
                                    <dd className='text-danger'><ErrorMessage name='userName'></ErrorMessage></dd>
                                    <dt>Email Id</dt>
                                    <dd><Field className='form-control w-25' type="text" name="Email"></Field></dd>
                                    <dd className='text-danger'><ErrorMessage name='Email'></ErrorMessage></dd>
                                    <dt>Age</dt>
                                    <dd><Field className='form-control w-25' type="number" name="age"></Field></dd>
                                    <dd className='text-danger'><ErrorMessage name='age'></ErrorMessage></dd>
                                    <dt>City</dt>
                                    <dd><Field className='form-control w-25' as="select" name="city">
                                        <option>Pune</option>
                                        <option>Nagpur</option>
                                    </Field>
                                    </dd>
                                    <dd className='text-danger'><ErrorMessage name='City'></ErrorMessage></dd>
                                </dl>
                                <button className='btn btn-primary' disabled={(props.isValid) ? false : true}>Register</button>
                            </div>
                        }
                    </Form>
                }
            </Formik>
        </div>
    )
}

export default FormikYupValidation