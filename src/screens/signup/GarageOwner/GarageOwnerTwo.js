import React, { useEffect, useState } from 'react'
import style from './garageowner.module.css'
import { Formik, Field, Form } from 'formik'
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createGarageCollection, getLanLon } from '../../../redux/slices/signupSlice';
import classes from '../../../components/Parking-search/ParkingSearch.module.css'
import AutoComplete from 'react-google-autocomplete';
import { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";


export default function GarageOwnerTwo() {
    const { garageDetails, ownerId, gCollection } = useSelector(state => state.signupReducer)
    const [locationChosen, setLocationChosen] = useState(false);
    const [locationError, setLocError] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const autocompleteRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    const submitForm = async (values) => {
        dispatch(createGarageCollection({ ...values, lat: garageDetails.lat, lon: garageDetails.lon }))
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


    const handleAutocompleteChange = () => {
        const place = autocompleteRef.current.value;
        const isValidPlace = place && place.place_id && place.geometry;
        setLocationChosen(isValidPlace);
    };

    const handlePlaceSelect = (place) => {
        if (place && place.geometry) {
            const { geometry } = place;
            const { location } = geometry;
            const { lat, lng } = location;

            const geocode = {
                lat: lat(),
                lng: lng(),
            };
            dispatch(getLanLon(geocode));
            setLocationChosen(true);
            setShowModal(false);
        } else {
            setShowModal(true);
            setLocationChosen(false);
        }
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
            setLocationChosen(true);
        } else {
            setLocationChosen(false);
        }
    };

    const showPosition = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const geocoder = new window.google.maps.Geocoder();
        const latlng = { lat: latitude, lng: longitude };

        geocoder.geocode({ location: latlng }, (results, status) => {
            if (status === "OK") {
                if (results[0]) {
                    const address = results[0].formatted_address;
                    autocompleteRef.current.value = address; 

                    const geocode = {
                        lat: latitude,
                        lng: longitude,
                    };
                    console.log(geocode);
                    dispatch(getLanLon(geocode));
                    setLocationChosen(true);
                } else {
                    setLocationChosen(false);
                }
            } else {
                setLocationChosen(false);
            }
        });
    };
    library.add(faLocationCrosshairs);


    const handleBlur = (event)=>{
        if (!event.target.value) {
            setLocError(true)
        } else {
            setLocError(false)
        }
        
    }
    return <>
        <div>
            <h3 className='container my-4 me-4'>Sign Up - Garage Details</h3>
            <div style={{ 'display': 'none' }} className='sucMsg alert alert-success w-50 mx-auto text-center'>Your account has been set, Please loging</div>

            <Formik
                initialValues={{ ...garageDetails, ownerId: ownerId }}
                onSubmit={(values) => { submitForm(values) }}
            >
                {({ errors, touched, setFieldValue, values }) => (
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

                                <div className={`${classes.autocompleteContainer} w-100 p-0`}>
                                    <AutoComplete
                                        apiKey="AIzaSyDxE47Kh4gnM9Sh-Nj6vTjFzful_q7lZdY"
                                        className={`${classes.autocompleteField} ${style.inputField} form-control my-2 w-100`}
                                        ref={autocompleteRef}
                                        onChange={handleAutocompleteChange}
                                        onBlur={handleBlur}
                                        options={{ componentRestrictions: { country: "EG" }, types: ["address"] }}
                                        onPlaceSelected={handlePlaceSelect}
                                    />
                                    <div className={classes.locationIcon} onClick={handleLocationClick} style={{ position: "relative" }}>
                                        <FontAwesomeIcon
                                            icon={faLocationCrosshairs}
                                            style={{ position: "absolute", top: "-42px", right: "15px", cursor: "pointer" }}
                                        />
                                    </div>
                                    {locationError ? <div className={`mt-1 alert alert-danger rounded-0 py-2`}>Garage Location is Required</div> : ''}
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
                                    <Field type='file' value={undefined} onChange={(event) => { setFieldValue('images[0]', event.target.files[0]) }} id='image' validate={validateImage} className={`${style.inputField} form-control d-inline mt-1 w-50`} name='images[0]' />
                                    <Field type='file' value={undefined} onChange={(event) => { setFieldValue('images[1]', event.target.files[0]) }} id='image' validate={validateImage} className={`${style.inputField} form-control d-inline mt-1 w-50`} name='images[1]' />
                                    <Field type='file' value={undefined} onChange={(event) => { setFieldValue('images[2]', event.target.files[0]) }} id='image' validate={validateImage} className={`${style.inputField} form-control d-inline mt-1 w-50`} name='images[2]' />
                                    <Field type='file' value={undefined} onChange={(event) => { setFieldValue('images[3]', event.target.files[0]) }} id='image' validate={validateImage} className={`${style.inputField} form-control d-inline mt-1 w-50`} name='images[3]' />
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
            {/* Modal */}
            <div
                className={`modal fade bd-example-modal-lg ${showModal ? "show" : ""
                    }`}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden={!showModal}
                style={{
                    display: showModal ? "flex" : "none",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
            >
                <div className="modal-dialog modal-lg" style={{ width: "80%" }}>
                    <div className="modal-content">
                        {/* Modal content */}
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                style={{ color: "red", fontSize: "24px" }}
                            >
                                Error!
                            </h5>

                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={() => setShowModal(false)}
                                style={{ backgroundColor: "#851fbf", color: "white" }}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div
                            className="modal-body"
                            style={{ color: "#851fbf", fontSize: "20px" }}
                        >
                            {/* Modal body content */}
                            <p>Please enter a valid location.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}



