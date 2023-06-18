import React from 'react'
import style from './signup.module.css'
import { Link } from 'react-router-dom';



export default function SignUp() {

  return <>
    <div className={`${style.mainBg} overflow-hidden`}>
      <div className={`${style.subBg} container w-50 my-5 py-5 mx-auto bg-white rounded-2`}>
        <div className={`text-center my-4 w-100`}>
          <h2 className={`text-center mb-2`}>Create Account</h2>
          <p>Embark on a journey of endless possibilities.<br /> Register now and let the adventure begin!</p>
        </div>
        <div className={`${style.crdCon} text-center my-4 w-75  mx-auto border border-2 rounded-4`}>
          <Link to='/signup/garageOwner' className={`d-flex justify-content-start align-items-center py-4 text-decoration-none text-black`}>
            <div className={`${style.crdIcon} d-flex justify-content-center align-items-center rounded-2 border border-2 ms-4`}><i className={`${style.crdI} fa-solid fa-warehouse fs-2 mx-2`} ></i></div>
            <div className={`text-start ps-4`}>
              <p className={`m-0 fw-semibold fs-5`}>Garage Owner</p>
              <p className={`m-0`}>Calling all garage owners! Fuel your business and accelerate your success by joining our community today.</p>
            </div>
          </Link>
        </div>
        <div className={`${style.crdCon} text-center my-4 w-75  mx-auto border border-2 rounded-4`}>
          <Link to='/signup/carOwner' className={`d-flex justify-content-start align-items-center py-4 text-decoration-none text-black`}>
            <div className={`${style.crdIcon} d-flex justify-content-center align-items-center rounded-2 border border-2 ms-4`}><i className={`${style.crdI} fa-solid fa-car fs-2 mx-2`} ></i></div>
            <div className={`text-start ps-4`}>
              <p className={`m-0 fw-semibold fs-5`}>Car Owner</p>
              <p className={`m-0`}>Unlock the road to convenience and peace of mind. a seamless experience tailored for car owners like you</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </>
}