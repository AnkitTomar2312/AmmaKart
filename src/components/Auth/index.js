import { Fragment, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import axios from "axios";

const AuthIndex = () => {
  const [loader, setLoader] = useState(false);
  const Navigate = useNavigate();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    setLoader(true);
    signupWithEmailAndPassword();
  };

  const signupWithEmailAndPassword = async () => {
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
      AIzaSyDxqZPR3AgmXM0rEnGdT_7DsTeddZZ9rWY`,
        {
          email: details.email,
          password: details.password,
          returnSecureToken: true,
        }
      );
      localStorage.setItem("authResponse", JSON.stringify(response));
      console.log(response);
    } catch (error) {
      console.log(error.response);
    } finally {
      setDetails({ email: "", password: "" });
      setLoader(false);
      Navigate("/");
    }
  };
  // useEffect(() => {
  //   let isAdded = localStorage.getItem("authResponse");
  //   if (isAdded) {
  //     isAdded = JSON.parse(isAdded);
  //     if (isAdded.data.email) {
  //       Navigate("/");
  //     }
  //   }
  // }, []);
  return (
    <>
      <div className="auth-container">
        <div className="auth-container--box">
          <div className="tab-selector">
            <NavLink exact to={"/login"}>
              <h3>Signup</h3>
            </NavLink>
          </div>
          <form autoComplete={"off"} onSubmit={handleSubmit}>
            {false && (
              <div className="input-wrap">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Enter Name" />
              </div>
            )}
            <div className="input-wrap">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                value={details.email}
                onChange={handleInput}
              />
            </div>
            <div className="input-wrap">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={details.password}
                onChange={handleInput}
              />
            </div>
            <div className="button-wrap">
              <button className="login-btn">{true ? "Signup" : "Login"}</button>
            </div>
          </form>
        </div>
      </div>
      {loader && <Loader />}
    </>
  );
};

export default AuthIndex;
