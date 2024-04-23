import React from 'react';
import './Profile.css'; // Importing the CSS file for styling

function PersonalDetailsForm() {
  return (
    <div className="personal-details-form-container">
      <h2>Personal Details</h2>
      <form className="personal-details-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PersonalDetailsForm;
