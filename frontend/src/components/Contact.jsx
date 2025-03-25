import React from "react";
import "../css/contact.css";

const Contact = () => {
  return (
    <div className="contact">


      <div className="contact-container" style={{ display: "flex", gap: "20px" }}>
        {/* Left Side: Address */}
        <div className="contact-address" style={{ flex: 1 }}>
          <div className="contact-section">
            <h3>Registered Address:</h3>
            <p>
              Manoharpura Mokshdham Vikas Samiti<br />
              Village Manoharpura, Jagatpura,<br />
              Jaipur-302017 (Rajasthan) INDIA
            </p>
            <p>
              <strong>Email ID:</strong> mmvsjaipur@gmail.com<br />
              <strong>Contact:</strong> +91 9828226516
            </p>
          </div>

          <div className="contact-section">
            <h3>Correspondence Address:</h3>
            <p>
              Lala Ram Sharma, Secretary<br />
              Baknado ki Dhani, Manoharpura,<br />
              Mithila Vihar-II, Manoharpura, Jagatpura,<br />
              Jaipur-302017
            </p>
            <p>
              <strong>Contact:</strong> 9828399184
            </p>
          </div>
        </div>

        {/* Right Side: Map */}
        <div className="contact-map" style={{ flex: 1 }}>
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=Manoharpura%20Mokshdham%20Vikas%20Samiti&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
