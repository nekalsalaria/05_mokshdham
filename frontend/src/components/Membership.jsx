import React from "react";
import "../css/membership.css";

const Membership = () => {
  return (
    <div className="membership">
      <h1>Become a Member</h1>
      <p>The person having the following eligibility can become a member of the society:</p>
      <ul>
        <li>Resides in the area of the society operates</li>
        <li>Be an adult person belongs to Rajasthan State</li>
        <li>Not be insane or bankrupt</li>
        <li>Has interest and faith in the objectives of the Society</li>
        <li>Understand the interest of the Society as paramount</li>
      </ul>

      <h2>Membership Fee</h2>
      <ul>
        <li>Annual Membership Fee: Rs. 500/-</li>
        <li>Lifetime Membership Fee: Rs. 5100/-</li>
      </ul>

      <h2>Membership Application</h2>
      <p>To apply for membership, please fill out the application form and submit it to the society office.</p>
      
        <strong>Certified:</strong> This is to certify that a true copy of the rules and regulations of the society is available with office of the society.
      
    </div>
  );
};

export default Membership;
