import { Fragment, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import axios from "axios";
import { UseSelector, useDispatch } from "react-redux";
import CartSlice from "../../redux/CartSlice";
const AuthIndex = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const { setShowCart } = CartSlice.actions;
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
    } catch (error) {
      console.log(error.response);
    } finally {
      setDetails({ email: "", password: "" });
      setLoader(false);
      dispatch(setShowCart());
      Navigate("/");
    }
  };

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
