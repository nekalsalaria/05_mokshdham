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
      <p>
        Interested persons may apply for obtaining a Membership from the following members nominated by Society. They are required to fill all the necessary details including personal information, contact details, and any other relevant information in the prescribed application form. The committee will review your application and documents, and if it meets the eligibility criteria, you will be registered as a member.
      </p>
      <ul>
        <li>Mr. Shankar Lal Mourya - +91 9782154208</li>
        <li>Mr. Ashok Kumar Joshi - +91 8239630520</li>
      </ul>

      <p>
        <strong>Certified:</strong> This is to certify that a true copy of the rules and regulations of the society is available with office of the society.
      </p>
    </div>
  );
};

export default Membership;
