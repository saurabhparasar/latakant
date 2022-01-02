import React from "react";
import Logo from "./images/logo.jpg";
import "./Styles/Signup.css";

export default function Signup() {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="login-wrap p-4 p-md-5">
              <h3 className="mb-4">Sign Up</h3>
              <form action="#" className="signup-form">
                <div className="form-group">
                  <label className="label" for="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Latakant sharma"
                  />
                </div>
                <div className="form-group">
                  <label className="label" for="email">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Latakant sharmagmail.com"
                  />
                </div>
                <div className="form-group">
                  <label className="label" for="password">
                    Password
                  </label>
                  <input
                    id="password-field"
                    type="password"
                    className="form-control"
                    placeholder="Latakant sharma"
                  />
                </div>
                <div className="form-group">
                  <label className="label" for="password">
                    Confirm Password
                  </label>
                  <input
                    id="password-field"
                    type="password"
                    className="form-control"
                    placeholder="Latakant sharmaPassword"
                  />
                </div>
                <div className="form-group d-flex justify-content-end mt-5">
                  <button type="submit" className="btn btn-primary submit">
                    <span className="fa fa-paper-plane"></span>
                  </button>
                </div>
              </form>
              <p className="text-center">
                Already have an account? <a href="/signin">Sign In</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
