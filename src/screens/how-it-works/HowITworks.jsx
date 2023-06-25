import React, { useEffect } from 'react'
import style from './how-it-works.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import StatisticsBar from './../../components/Statistics Bar/StatisticsBar';
import WhereToGo from '../../components/HowItWorksComponent/WhereToGo';



export default function HowITworks() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return <>
    <Container fluid className={` ${style.mainBG} py-5`}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className='fs-1 fw-bolder pb-3'>
              Parking sorted in seconds.
            </div>
            <div className='pb-3'>
              <p>
                Our huge network of bookable parking spaces & driveways gets you closer to where you need to be. By reserving your parking, you’ll save time & money on all your journeys, whether it’s your daily commute, an evening gig or a weekend away.
              </p>
            </div>
            <div>
              <p>Simply enter where & when you'll need parking and we'll find the perfect space for you.</p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image className={`w-100`} rounded src={require('../../assets/images/AboutUs/4.png')} />
          </Col>
        </Row>
      </Container>
    </Container>
    <StatisticsBar />
    <WhereToGo />
    <Container className='py-5'>
      <Row className={`${style.crdBtm}`}>
        <Col xs={12} md={6}>
          <Image className={`w-100`} rounded src={require('../../assets/images/AboutUs/5.png')} />
        </Col>
        <Col xs={12} md={6}>
          <div className='px-4'>
            <div className='mb-4'>
              <h3 className={`${style.underLine} fw-bolder d-inline`}>The simplest way</h3><span className={`fw-bolder fs-3`}> to book a parking space.</span>
            </div>
            <Row className='pb-2'>
              <Col xs={1} >
                <svg className={`${style.svg}`} xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 49 48" fill="none">
                  <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M30.2199 3.93009C22.2804 3.93009 15.8442 10.3663 15.8442 18.3058C15.8442 26.2453 22.2804 32.6816 30.2199 32.6816C38.1594 32.6816 44.5956 26.2453 44.5956 18.3058C44.5956 10.3663 38.1594 3.93009 30.2199 3.93009ZM11.9141 18.3058C11.9141 8.1958 20.1099 0 30.2199 0C40.3299 0 48.5257 8.1958 48.5257 18.3058C48.5257 28.4159 40.3299 36.6117 30.2199 36.6117C20.1099 36.6117 11.9141 28.4159 11.9141 18.3058Z" fill="currentColor"></path>
                  <path d="M20.037 30.7988L16.9702 27.7319C16.6663 27.428 16.1736 27.428 15.8697 27.7319L13.6686 29.933C13.3647 30.2369 13.3647 30.7296 13.6686 31.0335L16.7354 34.1004C17.0393 34.4043 17.5321 34.4043 17.836 34.1004L20.037 31.8993C20.3409 31.5954 20.3409 31.1027 20.037 30.7988Z" fill="currentColor"></path>
                  <path d="M15.3916 34.9946L12.771 32.3733C12.3202 31.9224 11.5912 31.9224 11.1405 32.3733L1.45192 42.0646C0.707808 42.7463 0.304479 43.7949 0.539574 44.9254C0.776827 46.0666 1.65682 46.962 2.79563 47.2144C3.89131 47.456 4.91581 47.1001 5.606 46.4097L15.3894 36.6235C15.8402 36.1726 15.8402 35.4434 15.3894 34.9925L15.3916 34.9946Z" fill="currentColor"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M31.6977 8.39018L29.457 8.13949L29.5045 7.62744L31.7453 7.87814L31.6977 8.39018Z" fill="currentColor"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M27.168 8.81213C27.168 7.73662 28.0403 6.86475 29.1163 6.86475V8.81213C29.1163 6.86475 29.1169 6.86475 29.1175 6.86475L29.1218 6.86475L29.1292 6.86478L29.1495 6.86493C29.1654 6.86508 29.1861 6.86536 29.2114 6.86586C29.262 6.86686 29.3309 6.86875 29.4164 6.8723C29.5871 6.87939 29.8251 6.89318 30.1154 6.91999C30.6935 6.97338 31.4935 7.07971 32.3928 7.29348C34.1446 7.70994 36.5105 8.59013 38.2394 10.5203L38.2396 10.5205C40.1016 12.5998 40.9551 14.8202 41.3418 16.5163C41.5351 17.3643 41.6138 18.0889 41.6436 18.6136C41.6585 18.8766 41.6612 19.0911 41.6597 19.2479C41.659 19.3264 41.6571 19.3906 41.6552 19.4394C41.6543 19.4638 41.6533 19.4844 41.6524 19.5011C41.652 19.5094 41.6516 19.5167 41.6512 19.523L41.6506 19.5317L41.6504 19.5355L41.6503 19.5372C41.6502 19.5381 41.6502 19.5389 39.7062 19.4094L41.6502 19.5389C41.5786 20.612 40.6503 21.424 39.5766 21.3525C38.5073 21.2813 37.6972 20.3606 37.7613 19.293C37.7614 19.2917 37.7615 19.2897 37.7616 19.2871C37.762 19.2751 37.7629 19.2493 37.7632 19.2106C37.764 19.133 37.7628 19.0048 37.7531 18.8342C37.7337 18.4919 37.6804 17.9863 37.5425 17.3816C37.2668 16.1724 36.6612 14.5978 35.3363 13.1182M29.111 10.7595C29.1112 10.7595 29.1115 10.7595 29.1118 10.7595C29.1149 10.7595 29.1225 10.7596 29.1343 10.7599C29.158 10.7603 29.1986 10.7614 29.2545 10.7637C29.3665 10.7684 29.5385 10.7781 29.7569 10.7982C30.1964 10.8388 30.8092 10.9204 31.4911 11.0825C32.9016 11.4178 34.3714 12.0411 35.3361 13.118M27.168 8.81213C27.168 9.88586 28.0374 10.7566 29.111 10.7595Z" fill="currentColor"></path>
                </svg>
              </Col>
              <Col xs={11}>
                <div className='ps-2'>
                  <h4 className='mb-2 fw-semibold'>Tell us where you’re going</h4>
                  <p>
                    Our super smart app will quickly find the best space for you. And with 100k spaces to choose from, including private driveways, no one gets you closer.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className='pb-2'>
              <Col xs={1} >
                <svg className={`${style.svg}`} xmlns="http://www.w3.org/2000/svg" width="35" height="38" viewBox="0 0 47 40" fill="none">
                  <path d="M2.71289 31.6062H10.1496V37.0503C10.1496 38.4918 8.95414 39.6627 7.48229 39.6627H5.38652C3.91047 39.6627 2.71289 38.4898 2.71289 37.0442V31.6083V31.6062Z" fill="currentColor"></path>
                  <path d="M36.1777 31.6062H43.6145V37.0503C43.6145 38.4918 42.419 39.6627 40.9471 39.6627H38.8514C37.3753 39.6627 36.1777 38.4898 36.1777 37.0442V31.6083V31.6062Z" fill="currentColor"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0756 3.905C11.7996 3.905 11.477 4.09094 11.3383 4.49272L6.48235 18.5211C6.12989 19.5393 5.02465 20.0769 4.01373 19.7219C3.00281 19.3669 2.46902 18.2537 2.82148 17.2355L7.67649 3.20984C7.67658 3.20958 7.67667 3.20931 7.67676 3.20905C7.67683 3.20886 7.67689 3.20867 7.67696 3.20848C8.32628 1.32997 10.0547 0 12.0756 0H35.4668C37.5561 0 39.3246 1.42107 39.9216 3.38754C39.9217 3.38766 39.9217 3.38779 39.9217 3.38792L44.1494 17.3071C44.4626 18.3383 43.8865 19.4299 42.8628 19.7454C41.839 20.0608 40.7552 19.4806 40.442 18.4495L36.2141 4.52952C36.0848 4.1036 35.7488 3.905 35.4668 3.905H12.0756Z" fill="currentColor"></path>
                  <path d="M41.029 16.113H5.91942C2.7798 16.113 0.234375 18.6579 0.234375 21.7968V27.1619C0.234375 30.3009 2.7798 32.8457 5.91942 32.8457H41.029C44.1686 32.8457 46.714 30.3009 46.714 27.1619V21.7968C46.714 18.6579 44.1686 16.113 41.029 16.113V16.113ZM10.9383 27.5484C9.43737 27.5484 8.22017 26.3315 8.22017 24.8309C8.22017 23.3303 9.43737 22.1134 10.9383 22.1134C12.4392 22.1134 13.6564 23.3303 13.6564 24.8309C13.6564 26.3315 12.4392 27.5484 10.9383 27.5484ZM36.0142 27.5484C34.5133 27.5484 33.2961 26.3315 33.2961 24.8309C33.2961 23.3303 34.5133 22.1134 36.0142 22.1134C37.5151 22.1134 38.7323 23.3303 38.7323 24.8309C38.7323 26.3315 37.5151 27.5484 36.0142 27.5484Z" fill="currentColor"></path>
                </svg>
              </Col>
              <Col xs={11}>
                <div className='ps-2'>
                  <h4 className='mb-2 fw-semibold'>Book guaranteed parking in seconds</h4>
                  <p>
                    Scroll through the available spaces and check out reviews & photos. Then just tap book and relax – parking has never been simpler.                  </p>
                </div>
              </Col>
            </Row>
            <Row className='pb-2'>
              <Col xs={1} >
                <svg className={`${style.svg}`} xmlns="http://www.w3.org/2000/svg" width="25" height="46" viewBox="0 0 33 54" fill="none">
                  <path d="M26.7532 0H6.24787C2.85969 0 0.101562 2.7678 0.101562 6.16786V47.3798C0.101562 50.7799 2.85969 53.5477 6.24787 53.5477H26.7532C30.1414 53.5477 32.8995 50.7799 32.8995 47.3798V6.16786C32.8995 2.7678 30.1414 0 26.7532 0V0ZM13.3833 3.06403H20.1068C20.5078 3.06403 20.8338 3.38901 20.8338 3.79357C20.8338 4.19813 20.51 4.5231 20.1068 4.5231H13.3833C12.9824 4.5231 12.6563 4.19813 12.6563 3.79357C12.6563 3.38901 12.9802 3.06403 13.3833 3.06403ZM16.7451 51.3613C15.4872 51.3613 14.4694 50.3399 14.4694 49.0776C14.4694 47.8153 15.4872 46.794 16.7451 46.794C18.003 46.794 19.0207 47.8175 19.0207 49.0776C19.0207 50.3377 18.003 51.3613 16.7451 51.3613ZM28.3085 42.4698C28.3085 43.4094 27.5463 44.1743 26.61 44.1743H6.38886C5.4526 44.1743 4.69037 43.4094 4.69037 42.4698V9.34022C4.69037 8.40067 5.4526 7.63577 6.38886 7.63577H26.61C27.5463 7.63577 28.3085 8.40067 28.3085 9.34022V42.4698V42.4698Z" fill="currentColor"></path>
                  <path d="M16.5002 16.064C12.2492 16.064 8.80273 19.458 8.80273 23.6443C8.80273 25.599 9.42478 27.506 10.5787 29.0948L16.0123 36.5669C16.2518 36.8959 16.7486 36.8959 16.9882 36.5669L22.4217 29.0948C23.5778 27.506 24.1977 25.599 24.1977 23.6443C24.1977 19.458 20.7512 16.064 16.5002 16.064V16.064ZM16.9596 26.8414C14.6517 27.1272 12.7108 25.2158 13.0032 22.9452C13.201 21.3975 14.4714 20.1464 16.043 19.9516C18.3509 19.6658 20.2918 21.5772 19.9995 23.8478C19.8016 25.3955 18.5312 26.6466 16.9596 26.8414Z" fill="currentColor"></path>
                </svg>
              </Col>
              <Col xs={11}>
                <div className='ps-2'>
                  <h4 className='mb-2 fw-semibold'>You’re all set</h4>
                  <p>
                    Find directions & access instructions and amend your booking if needed -  all through your IPark account. And, if you need anything else, our Customer Service team is always there to help.                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row className='text-center pt-2 pb-5'>
        <div className='pt-5'><h2 className='fw-semibold'>Why book parking?</h2></div>
        <Col xs={12} md={4}>
          <div className={`${style.crd_1} mb-3`}></div>
          <h5 className='fw-semibold'>Get Closer</h5>
          <p>With over 100k spaces available to book, including driveways, you’ll always be a stone’s throw away from where you need to be.</p>
        </Col>
        <Col xs={12} md={4}>
          <div className={`${style.crd_2} mb-3`}></div>
          <h5 className='fw-semibold'>Park smarter</h5>
          <p>Save time, money & hassle by booking your space before you set out.</p>
        </Col>
        <Col xs={12} md={4}>
          <div className={`${style.crd_3} mb-3`}></div>
          <h5 className='fw-semibold'>Peace of mind</h5>
          <p>Find the best spot, see exactly what you’re paying & even extend your stay - all through our award-winning app.</p>
        </Col>
      </Row>
    </Container>
  </>
}
