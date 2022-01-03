import React, { useState } from "react";
import "./Styles/Signin.css";
import axios from "axios";
export default function Signin() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [token, settoken] = useState("");

  function onSubmit(e) {
    let data = localStorage.getItem("userdetails");
    data = JSON.parse(data);
    let formdata = { username: "", password: "" };
    formdata.username = username;
    formdata.password = password;
    let input = JSON.stringify(formdata);
    let requestOptions = {
      method: "POST",
      body: input,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    axios
      .post("https://plant1tree.herokuapp.com/signin", requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (typeof json.token !== "undefined") {
          settoken(json.token);

          let getreq = {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Token " + token,
            },
          };
          axios
            .get("https://plant1tree.herokuapp.com/viewUsers", getreq)
            .then((response) => {
              console.log(response);
            });
        }
      });
  }
  function User_name(e) {
    const data = e.target.value;
    setusername(data);
  }
  function UserPassword(e) {
    const data = e.target.value;
    setpassword(data);
  }
  return (
    <div className="login-page">
      <div className="form">
        <form className="register-form">
          <input
            type="password"
            placeholder="password"
            onChange={UserPassword}
            value={setpassword}
          />
          <input
            type="text"
            placeholder="email address"
            onChange={User_name}
            value={setusername}
          />
          <button>create</button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
        <form className="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button onClick={() => onSubmit()}>login</button>
          <p className="message">
            Not registered? <a href="signup">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
}
