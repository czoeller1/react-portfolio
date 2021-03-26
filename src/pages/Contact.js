import React from "react";

function Contact() {
  return (
    <form className="container bg-light ms-3 my-5 p-3 w-75">
      <h1>Contact</h1>
      <div className="mb-3 form-floating">
        <input
          type="name"
          className="form-control"
          id="exampleInputName"
          aria-describedby="nameHelp"
          placeholder="John Smith"
        />
        <label htmlFor="exampleInputName" className="form-label">
          Name
        </label>
      </div>
      <div className="mb-3 form-floating">
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail"
          placeholder="example@email.com"
        />
        <label htmlFor="exampleInputEmail" className="form-label">
          Email
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Message"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-info" disabled>
        Submit
      </button>
    </form>
  );
}

export default Contact;
