import React, { useEffect, useRef, useState } from 'react';
import style from './contact.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Formik, Form, Field } from 'formik';
import emailjs from '@emailjs/browser';
import $ from "jquery";

export default function Contact() {
    const form = useRef();
    const [userMessage, setUserMessage] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    const sendEmail = (formReset) => {
        emailjs.sendForm('service_vujzn4e', 'template_qr9o07c', form.current, '-BNdkFXEOMys51fhZ')
            .then((result) => {
                $(".sucMsg").fadeIn(500, () => {
                    setTimeout(() => {
                        $(".sucMsg").fadeOut(500);
                        formReset()
                    }, 3000);
                });
            }, (error) => {
                $(".errMsg").fadeIn(500, () => {
                    setTimeout(() => {
                        $(".errMsg").fadeOut(500);
                    }, 3000);
                });
            });
    };

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
    const validateSubject = (value) => {
        let error = ''
        if (!value) error = 'Subject is Required'
        else if (!/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,16}$/i.test(value)) error = 'Invalid Subject';
        return error;
    }
    const validateMessage = (value) => {
        let error = ''
        if (!value) error = 'Message is Required'
        else if (!/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,500}$/i.test(value)) error = 'Invalid Message';
        return error;
    }

    return <>
        <Container className='my-5'>
            <div style={{ display: "none" }} className="sucMsg alert alert-success w-75 mx-auto text-center" >
                Your Message has been sent Successfully and our team will revert back to you at the soonest
            </div>
            <div style={{ display: "none" }} className="errMsg alert alert-danger w-75 mx-auto text-center" >
                Something went wrong, Please wait a while and try again later
            </div>
            <Row style={{ boxShadow: ".02px .2px 15px .01px rgba(0,0,0,.1)" }}>
                <Col xs={11} md={4} className={`${style.LBG} py-5 mx-auto`}>
                    <div>
                        <h3>Let's Get in Touch</h3>
                        <p>Share with us any Suggestion / Complain</p>
                    </div>
                    <div className={`my-3 d-flex justify-content-start algin-items-center`}>
                        <span className={`${style.formS}`}><i className="fa-solid fa-location-dot"></i></span>
                        <p className={`${style.formP} m-0`}>ITI Cairo University, Dokki</p>
                    </div>
                    <div className={`my-3 d-flex justify-content-start algin-items-center`}>
                        <span className={`${style.formS}`}><i className="fa-solid fa-phone"></i></span>
                        <p className={`${style.formP} m-0`}>+ 2010 2893 4785</p>
                    </div>
                    <div className={`my-3 d-flex justify-content-start algin-items-center`}>
                        <span className={`${style.formS}`}><i className="fa-solid fa-paper-plane"></i></span>
                        <p className={`${style.formP} m-0`}><a className={`${style.formA}`} href="mailto: info@ipark.net">info@ipark.net</a></p>
                    </div>
                    <div className={`mt-3 d-flex justify-content-start algin-items-center`}>
                        <span className={`${style.formS}`}><i className="fa-solid fa-earth-americas"></i></span>
                        <p className={`${style.formP} m-0`}><a className={`${style.formA}`} href="#">www.ipark.net</a></p>
                    </div>
                </Col>
                <Col xs={11} md={8} className={`${style.RBG} py-5 mx-auto`}>
                    <div >
                        <h3>Get in Touch</h3>
                        <Formik
                            initialValues={userMessage}
                            onSubmit={(values, { resetForm }) => {
                                sendEmail(resetForm);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form ref={form} className={`mx-auto`}>
                                    <div className={`container`}>
                                        <div className={`row`}>
                                            <div className={`col-md-6 pt-4 pb-1 px-4 mx-auto`}>
                                                <label className={`${style.formLabel} fw-bold`} htmlFor="uName">FULL NAME</label>
                                                <Field id="uName" validate={validateName} className={`${style.inputField} form-control px-0 mt-1 w-100 mx-auto`} placeholder='Name' name="name" />
                                                {errors.name && touched.name ? <div className={`warning mt-2 text-danger fw-semibold w-100`}>{errors.name}</div> : ''}
                                            </div>

                                            <div className="col-md-6 pt-4 pb-1 px-4 mx-auto">
                                                <label className={`${style.formLabel} fw-bold`} htmlFor="uEmail">EMAIL ADDRESS</label>
                                                <Field id="uEmail" validate={validateEmail} className={`${style.inputField} form-control px-0 mt-1 w-100 mx-auto`} placeholder='Email' name="email" />
                                                {errors.email && touched.email ? <div className={`warning mt-2 text-danger fw-semibold w-100`}>{errors.email}</div> : ''}
                                            </div>

                                            <div className="col-md-12 pt-4 pb-1 px-4 mx-auto">
                                                <label className={`${style.formLabel} fw-bold`} htmlFor="uSubject">SUBJECT</label>
                                                <Field id="uSubject" validate={validateSubject} className={`${style.inputField} form-control px-0 mt-1 w-100 mx-auto`} placeholder='Subject' name="subject" />
                                                {errors.subject && touched.subject ? <div className={`warning mt-2 text-danger fw-semibold w-100`}>{errors.subject}</div> : ''}
                                            </div>

                                            <div className="col-md-12 pt-4 pb-1 px-4 mx-auto">
                                                <label className={`${style.formLabel} fw-bold`} htmlFor="uMessage">MESSAGE</label>
                                                <Field id="uMessage" validate={validateMessage} className={`${style.inputField} form-control px-0 pb-5 mt-1 w-100 mx-auto`} placeholder='Message' name="message" />
                                                {errors.message && touched.message ? <div className={`warning mt-2 text-danger fw-semibold w-100`}>{errors.message}</div> : ''}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`container my-4 px-4 text-start`}>
                                        <button type='submit' className={`${style.AuthBtn} py-2 px-4 rounded-1 text-white`}>Send Message</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
}
