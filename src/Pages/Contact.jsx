import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Show the toast notification
    toast.success("Form submitted successfully!");
    // Hide the form
    setSubmitted(true);
  };

  return (
    <>
      {!submitted && (
        <div className="hero">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-group">
                <label htmlFor="name" className="contact">Your Name</label>
                <input type="text" id="name" required />
              </div>
              
              <div className="input-group">
                <label htmlFor="number" className="contact">Phone No.</label>
                <input type="text" id="number" required />
              </div>
            </div>
            
            <div className="input-group">
              <label htmlFor="email" className="contact">Email Id</label>
              <input type="email" id="email" required />
            </div>
            
            <div className="input-group">
              <label htmlFor="message" className="contact">Your Message</label>
              <textarea id="message" rows="10" required></textarea>
            </div>
            
            <button type="submit" className="contactbtn">Submit</button>
          </form>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default Contact;
