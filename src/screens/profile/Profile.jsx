import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./profile.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { getUserData, getAdminData } from "../../redux/slices/profileSlice";


export default function Profile() {
  const { userData, adminData } = useSelector(state => state.profile)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getAdminData());
  }, []);


  return (
    <>
      <div>
        {userData?.garageOwner && <Container className="my-5">
          <Row style={{ boxShadow: ".02px .2px 15px .01px rgba(0,0,0,.1)" }}>
            <Col xs={11} md={4} className={`${style.LBG} py-5 mx-auto`}>
              <Row>
                <Col className="">
                  <span
                    className={`${style.uPicCon} d-flex justify-content-center align-items-center mx-auto mb-4 rounded-circle`}
                  >
                    <i className="fa-solid fa-user fa-8x text-white"></i>
                  </span>
                  <div className="ps-5">
                    <p>User Name: {userData.ownerName} </p>
                    <p>User Type: {userData.carOwner ? "Car Owner" : "Garage Owner"} </p>
                  </div>
                  <div className="ps-5">
                    <Link to="/dashboard">Garage Details</Link>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={11} md={8} className={`${style.RBG} py-5 mx-auto`}>
              <div className="ps-4">
                <div>
                  <h4>User Details</h4>
                </div>
                <div>
                  <p className={`m-3`}>ID: {userData.ownerId} </p>
                  <p className={`m-3`}>Email: {userData.ownerEmail}</p>
                  <p className={`m-3`}>Phone: {userData.ownerPhone}</p>
                  <p className={`m-3`}>Password: {userData.password}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>}
      </div>
      <div>
        {userData?.CarOwner && <Container className="my-5">
          <Row style={{ boxShadow: ".02px .2px 15px .01px rgba(0,0,0,.1)" }}>
            <Col xs={11} md={4} className={`${style.LBG} py-5 mx-auto`}>
              <Row>
                <Col className="">
                  <span
                    className={`${style.uPicCon} d-flex justify-content-center align-items-center mx-auto mb-4 rounded-circle`}
                  >
                    <i className="fa-solid fa-user fa-8x text-white"></i>
                  </span>
                  <div className="ps-5">
                    <p>User Name: {userData.ownerName} </p>
                    {userData.CarOwner && <p>User Type: Car Owner</p>}
                  </div>
                  <div className="ps-5">
                    <Link to="/dashboard">User History</Link>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={11} md={8} className={`${style.RBG} py-5 mx-auto`}>
              <div className="ps-4">
                <div>
                  <h4>User Details</h4>
                </div>
                <div>
                  <p className={`m-3`}>ID: {userData.ownerId} </p>
                  <p className={`m-3`}>Email: {userData.ownerEmail}</p>
                  <p className={`m-3`}>Phone: {userData.ownerPhone}</p>
                  <p className={`m-3`}>Password: {userData.password}</p>
                  <p className={`m-3`}>Plate Number: {userData.plateNumber}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>}
      </div>
      <div>
        {adminData?.isAdmin && <Container className="my-5">
          <Row style={{ boxShadow: ".02px .2px 15px .01px rgba(0,0,0,.1)" }}>
            <Col xs={11} md={4} className={`${style.LBG} py-5 mx-auto`}>
              <Row>
                <Col className="">
                  <span
                    className={`${style.uPicCon} d-flex justify-content-center align-items-center mx-auto mb-4 rounded-circle`}
                  >
                    <i className="fa-solid fa-user fa-8x text-white"></i>
                  </span>
                  <div className="ps-5">
                    <p>Admin Name: {adminData.adminName} </p>
                    {adminData.isAdmin && <p>User Type: Admin</p>}
                  </div>
                  <div className="ps-5">
                    <Link to="/admin">Admin Dashboard</Link>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={11} md={8} className={`${style.RBG} py-5 mx-auto`}>
              <div className="ps-4">
                <div>
                  <h4>Admin Details</h4>
                </div>
                <div>
                  <p className={`m-3`}>ID: {adminData.adminId} </p>
                  <p className={`m-3`}>Email: {adminData.adminEmail}</p>
                  <p className={`m-3`}>Phone: {adminData.adminMobile}</p>
                  <p className={`m-3`}>Password: {adminData.password}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>}
      </div>
    </>
  );
}
