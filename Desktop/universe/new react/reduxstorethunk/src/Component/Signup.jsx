import React from "react";
import { signUp } from "../Store/Slice/Authslice";
import { useDispatch } from "react-redux";
import { useState } from "react";
const Signup = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const Dispatch = useDispatch();
  const [formData, setFormdata] = useState(initialState);
  const { firstName, lastName, email, password, confirmPassword } = formData;

  const onInputChange = (event) => {
    const Name = event.target.name;
    const Value = event.target.value;
    setFormdata({ ...formData, [Name]: Value });
  };

  const submitData = (e) => {
    e.preventDefault();
    if(password!=confirmPassword){
      alert("Password Should Match")
    }
    else if(firstName && lastName && email && password && confirmPassword){
      console.log("sign_up Dispatching...");
      Dispatch(signUp(formData))
    }
  };

  return (
    <div>
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="fname">
                    <i className="zmdi zmdi-account material-icons-name" />
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    id="fname"
                    placeholder="Your First Name"
                    onChange={onInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lname">
                    <i className="zmdi zmdi-account material-icons-name" />
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    id="lname"
                    placeholder="Your Last Name"
                    onChange={onInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email" />
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    id="email"
                    placeholder="Your Email"
                    onChange={onInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pass">
                    <i className="zmdi zmdi-lock" />
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    id="pass"
                    placeholder="Password"
                    onChange={onInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="re-pass">
                    <i className="zmdi zmdi-lock-outline" />
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    id="re_pass"
                    placeholder="Repeat your password"
                    onChange={onInputChange}
                  />
                </div>

                <button onClick={submitData} className="btn btn-primary btn-lg">
                  Submit
                </button>
              </form>
            </div>
            <div className="signup-image ">
              <figure>
                <img
                  className="sign-in"
                  src="https://static.vecteezy.com/system/resources/previews/003/857/436/original/girl-with-laptop-sitting-and-freelance-or-studying-concept-free-vector.jpg"
                  alt="sing up image"
                />
              </figure>
              <a href="#" className="signup-image-link">
                I am already member
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
