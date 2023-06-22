import React from 'react'
import style from './statistics-bar.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function StatisticsBar() {
    return <>
        <Container fluid className={`${style.barBg} text-white text-center py-2`}>
            <Container>
                <Row>
                    <Col>
                        <p className={`mb-0 my-1 fs-5 fw-semibold`}>96%</p>
                        <p className={`mb-0 my-1 fs-5 fw-semibold`}>satisfaction rate</p>
                    </Col>
                    <Col>
                        <p className={`mb-0 my-1 fs-5 fw-semibold`}>200K+</p>
                        <p className={`mb-0 my-1 fs-5 fw-semibold`}>drivers</p>
                    </Col>
                    <Col>
                        <p className={`mb-0 my-1 fs-5 fw-semibold`}>10K+</p>
                        <p className={`mb-0 my-1 fs-5 fw-semibold`}>space owners</p>
                    </Col>
                    <Col>
                        <p className={`mb-0 my-1 fs-5 fw-semibold`}>500K+</p>
                        <p className={`mb-0 my-1 fs-5 fw-semibold`}>bookings per year</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
}
