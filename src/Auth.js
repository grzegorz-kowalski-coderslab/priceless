import React, { useEffect, useState } from "react";
import app from "./base.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // const [pending, setPending] = useState(true);
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
        if (user) {
            setCurrentUser(user)
            // setPending(false)
            // console.log(pending)
            console.log('from auth', user.uid)
        } else {
            setCurrentUser(null)
        }
    });
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
