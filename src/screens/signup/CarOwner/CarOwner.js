import React, { useEffect, useState, } from 'react'
import style from './carowner.module.css'
import { Formik, Field, Form } from 'formik'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser, createUserCollection } from '../../../redux/slices/signupSlice';
import $ from 'jquery';

export default function CarOwner() {

    const { ownerDetails, ownerId, uIsCreated, uCollection, usedEmail } = useSelector(state => state.signupReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [userData, setUserData] = useState({})


    const submitForm = (values) => {
        setUserData(values)
        dispatch(signUpUser(values))
    }

    useEffect(() => {
        if (uCollection === true) {
            $('.sucMsg').fadeIn(500, () => {
                setTimeout(() => {
                    $('.sucMsg').fadeOut(500)
                    navigate('/login')
                }, 3000)
            })
        }
        if (usedEmail === true) {
            $('.errMsg').fadeIn(500, () => {
                setTimeout(() => {
                    $('.errMsg').fadeOut(500)
                }, 3000)
            })
        }
    }, [uCollection, usedEmail])


    useEffect(() => {
        if (uIsCreated === true) {
            dispatch(createUserCollection({ ...userData, ownerId: ownerId }))
        }
    }, [uIsCreated])

    const validateName = (value) => {
        let error = ''
        if (!value) error = 'Name is Required'
        else if (!/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,16}$/i.test(value)) error = 'Invalid Name';
        return error;
    }
    const validateEmail = (value) => {
        let error = ''
        if (!value) error = 'Email is Required';
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) error = 'Invalid Email Address';
        return error;
    }
    const validatePhone = (value) => {
        let error = ''
        if (!value) error = 'Phone is Required'
        else if (!/^(002)?01[0125][0-9]{8}$/i.test(value)) error = 'Phone must be valid egyptain number';
        return error;
    }
    const validatePassword = (value) => {
        let error = ''
        if (!value) error = 'Password is Required'
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&_])[A-Za-z\d!@#$%&_]{8,16}$/i.test(value)) error = 'Password must be between 8 to 16, contains at least  uppercase, lowercase, number and special character (! @ # $ % & _)'
        return error;
    }
    const validateRePassword = (value) => {
        let error = ''
        if (!value) error = 'Re-Password is Required'
        // else if (value !== ownerDetails.ownerDetails.password) error = 'Password and rePassword must be matching';
        return error;
    }
    const validatePlate = (value) => {
        let error = ''
        if (!value) error = 'Plate Number is Required'
        else if (!/^[a-zA-Z]{3}[0-9]{3}$/i.test(value)) error = 'Invalid Plate Number';
        return error;
    }

    return <>
        <div>
            <h2 className='container my-4 me-4'>Sign Up</h2>
            <div style={{ 'display': 'none' }} className='errMsg alert alert-danger w-50 mx-auto text-center'>Email already in use, Please sing in or register with another email</div>
            <div style={{ 'display': 'none' }} className='sucMsg alert alert-success w-50 mx-auto text-center'>Congratulations your account has been created</div>

            <Formik
                initialValues={{ ...ownerDetails, plateNumber: '', CarOwner: true }}
                onSubmit={(values) => submitForm(values)}
            >
                {({ errors, touched }) => (
                    <Form className={`w-50 mx-auto`}>
                        <div className={`container`}>
                            <div className={`row`}>
                                <div className={`col-md-12 pt-4 pb-1 px-0 mx-auto`}>
                                    <Field id='name' validate={validateName} className={`${style.inputField} form-control mt-1 w-100`} placeholder='Name' name="ownerName" />
                                    {errors.ownerName && touched.ownerName ? <div className={`mt-1 alert alert-danger rounded-0 py-2`}>{errors.ownerName}</div> : ''}
                                </div>
                                <div className="col-md-12 pt-4 pb-1 px-0 mx-auto">
                                    <Field id='email' validate={validateEmail} className={`${style.inputField} form-control mt-1 w-100`} placeholder='Email' name="ownerEmail" />
                                    {errors.ownerEmail && touched.ownerEmail ? <div className={`mt-1 alert alert-danger rounded-0 py-2`}>{errors.ownerEmail}</div> : ''}
                                </div>
                                <div className="col-md-12 pt-4 pb-1 px-0 mx-auto">
                                    <Field id='phone' validate={validatePhone} className={`${style.inputField} form-control mt-1 w-100`} placeholder='Phone Number' name="ownerPhone" />
                                    {errors.ownerPhone && touched.ownerPhone ? <div className={`mt-1 alert alert-danger rounded-0 py-2`}>{errors.ownerPhone}</div> : ''}
                                </div>
                                <div className="col-md-12 pt-4 pb-1 px-0 mx-auto">
                                    <Field type="password" id='password' validate={validatePassword} className={`${style.inputField} form-control mt-1 w-100`} placeholder='Password' name="password" />
                                    {errors.password && touched.password ? <div className={`mt-1 alert alert-danger rounded-0 py-2`}>{errors.password}</div> : ''}
                                </div>
                                <div className="col-md-12 pt-4 pb-1 px-0 mx-auto">
                                    <Field type="password" id='rePassword' validate={validateRePassword} className={`${style.inputField} form-control mt-1 w-100`} placeholder='Confirm Password' name="rePassword" />
                                    {errors.rePassword && touched.rePassword ? <div className={`mt-1 alert alert-danger rounded-0 py-2`}>{errors.rePassword}</div> : ''}
                                </div>
                                <div className="col-md-12 pt-4 pb-1 px-0 mx-auto">
                                    <Field id='plateNumber' validate={validatePlate} className={`${style.inputField} form-control mt-1 w-100`} placeholder='Car Plate Number' name="plateNumber" />
                                    {errors.plateNumber && touched.plateNumber ? <div className={`mt-1 alert alert-danger rounded-0 py-2`}>{errors.plateNumber}</div> : ''}
                                </div>
                            </div>
                        </div>
                        <div className={`my-4 text-end`}>
                            <button className={`${style.AuthBtn} py-2 px-5 rounded-1 text-white`}>Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    </>
}
