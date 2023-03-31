import React, { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
let logoutTimer;

const authContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const now = new Date().getTime();
  const expirationTimeInMs = new Date(expirationTime).getTime();

  const remainingTime = expirationTimeInMs - now;
  return remainingTime;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationTime = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationTime);
  // console.log("check" + remainingTime);
  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }
  return {
    token: storedToken,
    durationTime: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  //  In start check whether token is present in local storage or not
  const tokenData = retrieveStoredToken();
  let initialToken;
  // console.log("TokenData", tokenData);
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
  // console.log("token", initialToken);
  const checkLogin = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    //  when logout remove the token
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    //  Means if I have logout  then clear this timer
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  //  for changing the state
  const loginHandler = (token, expirationTime) => {
    // console.log("Login " + token);
    setToken(token);
    // as the token provided by browser stays for 1 hour so when reload remain login
    //  key value pair
    localStorage.setItem("token", token);

    localStorage.setItem("expirationTime", expirationTime);
    const remainingTime = calculateRemainingTime(expirationTime);
    // console.log("rem" + remainingTime);
    //  After this time auto matic logout
    logoutTimer = setTimeout(logoutHandler, remainingTime); // logoutTimer stores the reference return by setTimeout
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.durationTime);
      logoutTimer = setTimeout(logoutHandler, tokenData.durationTime);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: checkLogin,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <authContext.Provider value={contextValue}>
      {props.children}
    </authContext.Provider>
  );
};

export default authContext;
