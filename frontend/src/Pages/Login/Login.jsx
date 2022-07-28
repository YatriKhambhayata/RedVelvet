import React, { useState } from 'react'
import './Login.css'
import GoogleButton from 'react-google-button';
import { firebase } from '../../Firebase/Firebase';
import Booking from "../Bookin/Booking"



const Login = ({ isAdmin, setisAdmin }) => {



  const SignInWithFirebase = () => {
    var google_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((res) => {
        setisAdmin(true);
      })
      .catch((err) => {
        console.log(err);
        setisAdmin(false);
      });
  };

  const [globalName, setglobalName] = useState("")

  return (
    <div className='login_wrap'>
      {!isAdmin && <div className="login_box">
        <div className="login_top">
          <img src="/Images/table_icon.png" alt="table" />
          <p className='welcome_text'>HOTEL RED VELVET</p>
        </div>

        <div className="login">
          <div className="title_text">Sign in with your account </div>
          <div className="name">
            <label className='name_text'  > Name : </label>
            <input className='name_text' onChange={(e) => setglobalName(e.target.value)} type="email" />
          </div>
          <div className="gbtn">
            <GoogleButton
              className='main_gbtn'
              onClick={() => SignInWithFirebase()}
            />
          </div>
        </div>

      </div>}
      {
        isAdmin && <div className="bookingWrap">
          <Booking globalName={globalName}/>
        </div>
      }
    </div>
  )
}

export default Login