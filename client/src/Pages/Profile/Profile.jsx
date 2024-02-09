import React, { useState, useEffect } from 'react';
import Profile_img from "../Profile/download.png";
import './Profile.css';
import axios from 'axios';

import Sidebar from '../../component/Sidebar/sidebar';


const Profile = () => {
  const [userData, setUserData] = useState({
    name: ' TEST',
    role: ' TESTER',
    rankings: ' 5',
    registrationId: ' 123456789',
    email: ' TEST@TEST.COM',
    organizationName: ' TEST OrG',
    organizationPosition: ' TESTER'
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/register'); // Replace 'your-backend-url' with your actual backend URL
        const userDataFromDB = response.data; // Assuming the response data is an object containing user data
        setUserData(userDataFromDB); // Update the state with fetched user data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData(); // Call the fetchUserData function when the component mounts
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <>

    <Sidebar/>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4 ">
              <div className="profile-img">
                <img src={Profile_img} alt="profile picture" />
              </div>
            </div>
            <div className="col-md-6">
              <div className='profile-head'>
                <h5>{userData.name}</h5>
                <h6>{userData.role}</h6>
                <p className='profile-rating mt-3 mb-5'>
                  Rankings <span>{userData.rankings}</span>
                </p>
                <ul className="nav nav-tabs" role='tablist'>
                  <li className='nav-item'>
                    <a className="nav-link active" id="info-tab" data-toggle="tab" href="#info" role='tab'>Info</a>
                  </li>
                 
                </ul>
              </div>
            </div>
            {/* <div className="col-md-2">
              <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" id="btnAddMore" />
            </div> */}
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>SOCIAL LINKS</p>
                <a href="">Message on Whatsapp</a>
                <a href="">Github</a>
                <a href="">Linkedin</a>
                <a href="">Resume</a>
                
              </div>
            </div>

            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Registration Id </label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.registrationId}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Organization Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.organizationName}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Organization Position</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.organizationPosition}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
};

export default Profile;
