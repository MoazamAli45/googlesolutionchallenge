import { useState } from "react";

import classes from "./AuthForm.module.css";
import { useRef, useContext } from "react";
import authContext from "../store/auth-context";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const EmailInputRef = useRef();
  const PasswordInputRef = useRef();
  const history = useNavigate();
  const authCtx = useContext(authContext);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = EmailInputRef.current.value;
    const enteredPassword = PasswordInputRef.current.value;

    // optional: Add validation

    //  As just url is different for login and signup so we can use variable
    let url;
    setIsLoading(true);
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAsGWsR_yIobQp69zNm_tZzHuJ7NvaRIug";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAsGWsR_yIobQp69zNm_tZzHuJ7NvaRIug";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            // console.log(data);
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message)
              errorMessage = data.error.message;
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        //  to convert into mili seconds with + sign string it is converted number
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );

        // console.log(data);
        authCtx.login(data.idToken, expirationTime.toISOString());
        //  so that user can't come with back button
        history("/authhome");
      })
      .catch((err) => {
        alert(err.message);
      });

    EmailInputRef.current.value = "";
    PasswordInputRef.current.value = "";
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={EmailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={PasswordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
