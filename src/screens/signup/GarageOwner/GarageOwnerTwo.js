import React, { useEffect } from 'react'
import style from './garageowner.module.css'
import { Formik, Field, Form } from 'formik'
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createGarageCollection } from '../../../redux/slices/signupSlice';


export default function GarageOwnerTwo() {
    const { garageDetails, ownerId, gCollection } = useSelector(state => state.signupReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const submitForm = async (values) => {
        dispatch(createGarageCollection(values))
    }

    useEffect(() => {
        if (gCollection === true) {
            $('.sucMsg').fadeIn(500, () => {
                setTimeout(() => {
                    $('.sucMsg').fadeOut(500)
                    navigate('/login')
                }, 2000)
            })
        }
    }, [gCollection])


    const validateGarageName = (value) => {
        let error = ''
        if (!value) error = 'Garage Name is Required'
        else if (!/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,16}$/i.test(value)) error = 'Invalid Garage Name';
        return error;
    }

    const validateDescription = (value) => {
        let error = ''
        if (!value) error = 'Description is Required'
        else if (!/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,100}$/i.test(value)) error = 'Invalid Description';
        return error;
    }

    const validateAddress = (value) => {
        let error = ''
        if (!value) error = 'Address is Required'
        else if (!/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,50}$/i.test(value)) error = 'Invalid Address';
        return error;
    }

    const validateCost = (value) => {
        let error = ''
        if (!value) error = 'Cost is Required'
        else if (!/^[0-9]*$/i.test(value)) error = 'Invalid Cost';
        return error;
    }

    const validateSpots = (value) => {
        let error = ''
        if (!value) error = 'Cost is Required'
        else if (!/^[0-9]*$/i.test(value)) error = 'Invalid Cost';
        return error;
    }

    const validateImage = (value) => {
        let error = ''
        if (!value) error = 'Image is Required'
        return error;
    }


    return <>
        <div>
            <h2 className='container my-4 me-4'>Sign Up</h2>
            <div style={{ 'display': 'none' }} className='sucMsg alert alert-success w-50 mx-auto text-center'>Your account has been set, Please loging</div>

            <Formik
                initialValues={{...garageDetails, ownerId: ownerId}}
                onSubmit={(values) => { submitForm(values) }}
            >
                {({ errors, touched, setFieldValue}) => (
                    <Form className={`w-50 mx-auto`}>
                        <div className={`container`}>
                            <div className={`row`}>
                                <div className="col-md-12 py-3 px-0 mx-auto">
                                    <Field id='gName' validate={validateGarageName} className={`${style.inputField} form-control mt-1 w-100`} placeholder='Garage Name' name="garageName" />
                                    {errors.garageName && touched.garageName ? <div className={`mt-1 alert alert-danger rounded-0 py-2`}>{errors.garageName}</div> : ''}
                                </div>

                                <div className="col-md-12 py-3 px-0 mx-auto">
                                    <Field id='description' validate={validateDescription} className={`${style.inputField} form-control mt-1 w-100`} placeholder='Garage Description' name="description" />
                                    {errors.description && touched.description ? <div className={`mt-1 alert alert-danger rounded-0 py-2`}>{errors.description}</div> : ''}
                                </div>

                                <div className="col-md-12 py-3 px-0 mx-auto">
                                    <Field id='address' validate={validateAddress} className={`${style.inputField} form-control mt-1 w-100`} placeholder='Garage Address' name="address" />
                                    {errors.address && touched.address ? <div className={`mt-1 alert alert-danger rounded-0 py-2`}>{errors.address}</div> : ''}
                                </div>

                                <div className="col-md-6 py-3 px-0 mx-auto">
                                    <Field id='cost' validate={validateCost} className={`${style.inputField} form-control mt-1 w-75 me-auto`} placeholder='Price Per Hour in EGP' name="pricePerHour" />
                                    {errors.pricePerHour && touched.pricePerHour ? <div className={`my-1 alert w-75 alert-danger me-auto rounded-0 py-2`}>{errors.pricePerHour}</div> : ''}
                                </div>

                                <div className="col-md-6 py-3 px-0 mx-auto">
                                    <Field id='spots' validate={validateSpots} className={`${style.inputField} form-control mt-1 w-75 me-auto`} placeholder='Available Spots' name="availableSpots" />
                                    {errors.availableSpots && touched.availableSpots ? <div className={`my-1 alert w-75 alert-danger me-auto rounded-0 py-2`}>{errors.availableSpots}</div> : ''}
                                </div>

                                <div className="col-md-12 py-3 px-0 mx-auto">
                                    <label className={`mt-4 d-block`} htmlFor='image'>Garage Images: </label>
                                    <Field type='file' value={undefined} onChange={(event)=>{setFieldValue('images[0]', event.target.files[0])}} id='image' validate={validateImage} className={`${style.inputField} form-control d-inline mt-1 w-50`} name='images[0]'/>
                                    <Field type='file' value={undefined} onChange={(event)=>{setFieldValue('images[1]', event.target.files[0])}} id='image' validate={validateImage} className={`${style.inputField} form-control d-inline mt-1 w-50`} name='images[1]'/>
                                    <Field type='file' value={undefined} onChange={(event)=>{setFieldValue('images[2]', event.target.files[0])}} id='image' validate={validateImage} className={`${style.inputField} form-control d-inline mt-1 w-50`} name='images[2]'/>
                                    <Field type='file' value={undefined} onChange={(event)=>{setFieldValue('images[3]', event.target.files[0])}} id='image' validate={validateImage} className={`${style.inputField} form-control d-inline mt-1 w-50`} name='images[3]'/>
                                    {errors.images && touched.images ? <div className={`my-1 alert w-100 alert-danger me-auto rounded-0 py-2`}>{errors.images ? '4 Images Required' : ''}</div> : ''}
                                </div>

                            </div>
                        </div>
                        <div className={`my-4 text-end`}>
                            <button className={`${style.AuthBtn} py-2 px-5 text-white rounded-1`}>Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    </>
}



