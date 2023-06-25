import React from 'react'
import style from './whereToGo.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function WhereToGo() {
    return <>
        <Container className={`${style.cardsBg} p-4 rounded-2 mt-5 mb-2`}>
            <Row>
                <Col>
                    <div className='pb-2 text-center'><h2 className='fw-semibold'>Where are you going next?</h2></div>
                </Col>
            </Row>
            <Row className={`${style.rowLine} text-center`}>
                <Col xs={6} md={3}>
                    <div className='m-1 rounded-2 bg-white p-2'>
                        <Image className={`${style.crdImg} w-75 mx-auto`} src={require('../../assets/images/AboutUs/wCrd1.png')} />
                        <div><h5 className='mt-2 fw-semibold' >Office</h5></div>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <div className='m-1 rounded-2 bg-white p-2'>
                        <Image className={`${style.crdImg} w-75 mx-auto`} src={require('../../assets/images/AboutUs/wCrd2.png')} />
                        <div><h5 className='mt-2 fw-semibold' >Airports</h5></div>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <div className='m-1 rounded-2 bg-white p-2'>
                        <Image className={`${style.crdImg} w-75 mx-auto`} src={require('../../assets/images/AboutUs/wCrd3.png')} />
                        <div><h5 className='mt-2 fw-semibold' >Stadiums</h5></div>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <div className='m-1 rounded-2 bg-white p-2'>
                        <Image className={`${style.crdImg} w-75 mx-auto`} src={require('../../assets/images/AboutUs/wCrd4.png')} />
                        <div><h5 className='mt-2 fw-semibold' >City Breaks</h5></div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
}
