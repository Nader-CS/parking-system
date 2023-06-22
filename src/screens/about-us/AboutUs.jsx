import React from 'react'
import style from './about-us.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import StatisticsBar from '../../components/Statistics Bar/StatisticsBar';


export default function AboutUs() {
  const [_1open, set_1Open] = useState(false);
  const [_2open, set_2Open] = useState(false);
  const [_3open, set_3Open] = useState(false);
  const [_4open, set_4Open] = useState(false);

  return <>
    <Container fluid className={` ${style.mainBG} py-5`}>
      <Container>
        <Row>
          <Col>
            <Image className={`w-100`} rounded src={require('../../assets/images/AboutUs/1.jpg')} />
          </Col>
          <Col>
            <div className='fs-1 fw-bolder'>
              Simplifying journeys so we can all breathe easier.
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    <StatisticsBar />
    <Container className={`${style.crdBg} my-5 p-4 rounded-4`}>
      <Row>
        <Col>
          <Image className={`w-100 rounded-4`} src={require('../../assets/images/AboutUs/2.png')}></Image>
        </Col>
        <Col>
          <div>
            <h3 className={`${style.underLine} fw-bolder`}>Your parking & charging community</h3>
            <p>
              Since 2020, we’ve been on a mission to make parking simple.
              Our solution? We connect drivers who need parking with garages who have spaces.
            </p>
            <p>
              Today, over 200K drivers enjoy simpler parking with us and over 3000 space owners have turned their garages into a new source of income.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    <Container className={`${style.crdBtm} pt-5`}>
      <Row>
        <Col xs={7}>
          <div className='d-flex flex-column align-items-start justify-content-between pb-2 px-4 h-100'>
            <h3 className={`fw-bold`}>What is IPark?</h3>
            <p>
              IPark is a clever app that lets you book parking, rent out your space or find an EV charger. But that’s just part of the story,
            </p>
            <p>
              Because IPark is also a community. It’s the ten million drivers and the twenty-five thousand space owners that have joined us on this journey to simplify parking and create a greener, calmer world where we can all breathe easier.
            </p>
            <p>
              And, it’s the countless little moments shared, thanks to the thousands of minutes saved not looking for a parking space.
            </p>
            <p className='fw-bolder'>
              IPark
              <p className='m-0'>Your parking & charging community.</p>
            </p>
          </div>
        </Col>
        <Col xs={5}>
          <Image className={`w-100`} src={require('../../assets/images/AboutUs/3.png')} />
        </Col>
      </Row>
    </Container>
    <Container className='mt-5'>
      <Container className='pt-5 px-5'>
        <Row className='w-75 mx-auto'>
          <div>
            <h2 className='fw-bolder mt-2 mb-4'>
              Frequently asked questions
            </h2>
          </div>
          <Button
            onClick={() => set_1Open(!_1open)}
            aria-controls="example-collapse-text"
            aria-expanded={_1open}
            className={`${style.collBtn} text-end d-flex justify-content-between align-items-center`}
          >
            <p className='text-black my-2 fw-semibold'>How do I book a parking space?</p>
            <svg className={`${style.svg} m-2`} id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" fill="currentColor">
              <path d="M20.68,13.2h-7.56v7.76H7.84v-7.76H.28v-4.88H7.84V.56h5.28v7.76h7.56v4.88Z"></path>
            </svg>
          </Button>
          <Collapse in={_1open} className='py-4'>
            <div id="example-collapse-text">
              <p>
                It couldn’t be easier: simply plug in your destination’s postcode, or search by key locations such as hospitals, train stations or stadiums. Click on a listing to get more details about the space including user reviews, photos and proximity to nearby landmarks.
              </p>
              <p>
                To complete the booking, you’ll have to provide your vehicle details and a payment method all through our secure booking system.
              </p>
              <p>
                We'll send you a confirmation email containing all the vital information for your booking, including directions and access instructions.
              </p>
            </div>
          </Collapse>
        </Row>
        <Row className='w-75 mx-auto'>
          <Button
            onClick={() => set_2Open(!_2open)}
            aria-controls="example-collapse-text"
            aria-expanded={_2open}
            className={`${style.collBtn} text-end d-flex justify-content-between align-items-center`}
          >
            <p className='text-black my-2 fw-semibold'>How do I make a long-term booking?</p>
            <svg className={`${style.svg} m-2`} id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" fill="currentColor">
              <path d="M20.68,13.2h-7.56v7.76H7.84v-7.76H.28v-4.88H7.84V.56h5.28v7.76h7.56v4.88Z"></path>
            </svg>
          </Button>
          <Collapse in={_2open} className='py-4'>
            <div id="example-collapse-text">
              <p>
                It's just as easy as making a short-term booking, all you have to do is choose a wider date range. If you make a long-term booking that lasts 2 months or more, you’ll only be charged the first month's payment up-front and the rest will be collected in monthly instalments.
              </p>
              <p>
                Once you’ve made a long-term booking, you’ll be charged for the first month of your stay up-front. We’ll hold this payment until 48 hours after the first day of parking before giving it to the space owner.
              </p>
              <p>
                After the first day of parking, we’ll charge you monthly, using the same payment method, for the duration of your booking. In other words, you won’t make a second payment until approximately one month after your first parking day. The monthly price you pay is locked at the beginning of the booking.
              </p>
            </div>
          </Collapse>
        </Row>
        <Row className='w-75 mx-auto'>
          <Button
            onClick={() => set_3Open(!_3open)}
            aria-controls="example-collapse-text"
            aria-expanded={_3open}
            className={`${style.collBtn} text-end d-flex justify-content-between align-items-center`}
          >
            <p className='text-black my-2 fw-semibold'>Can I extend my session if I needed more time?</p>
            <svg className={`${style.svg} m-2`} id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" fill="currentColor">
              <path d="M20.68,13.2h-7.56v7.76H7.84v-7.76H.28v-4.88H7.84V.56h5.28v7.76h7.56v4.88Z"></path>
            </svg>
          </Button>
          <Collapse in={_3open} className='py-4'>
            <div id="example-collapse-text">
              <p>
                Absolutely. To extend your parking session, all you need to do is:
              </p>
              <ol>
                <li>Open the IPark app.</li>
                <li>Select ‘My Bookings’ and click on the relevant booking.</li>
                <li> Find the Extend Booking option and select it.</li>
                <li>Input the new times you want for your booking. This can be done after you have already parked but can’t be done if the booking has ended. Please note you cannot change the start time of your booking.</li>
                <li>Finally, you'll need to pay for the added time.</li>
              </ol>
            </div>
          </Collapse>
        </Row>
        <Row className='w-75 mx-auto'>
          <Button
            onClick={() => set_4Open(!_4open)}
            aria-controls="example-collapse-text"
            aria-expanded={_4open}
            className={`${style.collBtn} text-end d-flex justify-content-between align-items-center`}
          >
            <p className='text-black my-2 fw-semibold'>What if I have to cancel my booking?</p>
            <svg className={`${style.svg} m-2`} id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" fill="currentColor">
              <path d="M20.68,13.2h-7.56v7.76H7.84v-7.76H.28v-4.88H7.84V.56h5.28v7.76h7.56v4.88Z"></path>
            </svg>
          </Button>
          <Collapse in={_4open} className='py-4'>
            <div id="example-collapse-text">
              <p>
                Change of plans? No worries. If your booking has a fixed start and end time then it’s covered by the fixed-term policy. There is also a 10-minute grace period to cancel after any booking to accommodate accidental bookings.
              </p>
              <p>
                If you cancel your booking more than 24 hours before the booking starts, you’ll receive a full refund. In cases where the booking is cancelled by the space owner or IPark, the full refund will also include the Transaction Fee.
              </p>
            </div>
          </Collapse>
        </Row>
      </Container>
    </Container>
  </>
}
