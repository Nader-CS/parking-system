import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import style from "./profile.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { getUserData } from "../../redux/slices/profileSlice";

export default function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <>
      <Container className="my-5">
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
                  <p>User Name: </p>
                  <p>User Type: </p>
                </div>
                <div className="ps-5">
                  <Link to="/dashboard">User Dashboard</Link>
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
                <p className={`m-3`}>User ID: </p>
                <p className={`m-3`}>User Email: </p>
                <p className={`m-3`}>User Phone: </p>
                <p className={`m-3`}>User Password: </p>
                <p className={`m-3`}>User ID: </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
