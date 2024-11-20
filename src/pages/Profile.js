import React from "react";
import './Profile.css';
import { FaUserAlt } from 'react-icons/fa'; // Using profile icon

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <FaUserAlt size={50} color="#3498db" />
          <h2>Allwan Setya Raharjo</h2>
          <p>Web Developer</p>
        </div>

        <div className="profile-body">
          <h3>About</h3>
          <p>PEMBUAT APLIKASI</p>

          <h3>Contact Information</h3>
          <p><strong>Email:</strong> allwan@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
