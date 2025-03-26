import React from "react";
import "../css/membership.css";

const Membership = () => {
  return (
    <div className="membership">
      <h1>Eligibility for Membership</h1>
      <p>The person having the following terms can become a member of the society:</p>
      <ul>
        <li>Resides in the area where the institution operates</li>
        <li>Be an adult person</li>
        <li>Not be mentally challenged or bankrupt</li>
        <li>Has interest and faith in the objectives of the organisation</li>
        <li>Considers the best interests of the organisation as paramount</li>
      </ul>

      <h2>Rights and Responsibilities of Members</h2>
      <ul>
        <li>
          <strong>Voting Rights:</strong> Members typically have the right to vote in general meetings, elect governing body members, and participate in decision-making processes.
        </li>
        <li>
          <strong>Access to Information:</strong> Members have the right to access information about the society's activities, finances, and decisions.
        </li>
        <li>
          <strong>Obligations:</strong> Members are expected to adhere to the society's rules and regulations, pay dues or subscriptions, and contribute to the society's objectives.
        </li>
      </ul>

      <h2>Governing Body and Meetings</h2>
      <ul>
        <li>
          <strong>Governing Body:</strong> The society's affairs are managed by a governing body, typically an executive committee, elected by the general body. Four meetings per year will be conducted.
        </li>
        <li>
          <strong>General Meetings:</strong> General meetings are held regularly, as per the bylaws, to discuss important matters, elect officers, and review the society's activities. One meeting per year will be conducted.
        </li>
      </ul>

      <h2>Termination of Membership</h2>
      <ul>
        <li>
          <strong>Resignation:</strong> A member can voluntarily resign from the society by submitting a written notice to the governing body.
        </li>
        <li>
          <strong>Expulsion:</strong> The governing body may expel a member for serious violations of the rules, detrimental conduct, or non-payment of dues, following due process.
        </li>
        <li>
          <strong>Automatic Termination:</strong> Membership may cease automatically upon the death of a member, or if a member is declared insolvent or convicted of a serious crime.
        </li>
        <li>
          <strong>Non-payment of dues:</strong> Membership can be terminated if the annual subscription fee is not paid by the due date.
        </li>
      </ul>

      <h2>Membership Fee</h2>
      <ul>
        <li>Annual Membership Fee: Rs. 500/-</li>
        <li>Lifetime Membership Fee: Rs. 5100/-</li>
      </ul>

      <h2>Membership Application</h2>
      <p>
        Interested persons may obtain a Membership Form from the following members nominated by the Society. He/She must fill in the application form accurately with all the required details, including personal information, contact details, and any other relevant information. The managing committee will review your application and documents, and if it meets the eligibility criteria, you will be registered as a member.
      </p>
      <ul>
        <li>Mr. Shankar Lal Mourya - +91 9782154208</li>
        <li>Mr. Ashok Kumar Joshi - +91 8239630520</li>
      </ul>

      <p>
        <strong>Certified:</strong> This is the true copy of the Rules and Regulations available with the society.
      </p>
    </div>
  );
};

export default Membership;
