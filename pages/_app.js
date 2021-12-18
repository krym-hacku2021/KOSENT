import React, { useState } from "react";

import "../styles/globals.css";

import useUser from "../hooks/useUser";
import { UserData } from "../hooks/UserData";

function MyApp({ Component, pageProps }) {
  const {
    session,
    signInWithGithub,
    signInWithDiscord,
    signInWithSlack,
    signOut,
  } = useUser();

  const [userInfo, setUserInfo] = useState({
    id: "",
    nickname: "",
    avatarurl: "",
    score: 0
  });

  const userDataValue = {
    userInfo,
    setUserInfo,
    session,
    signInWithGithub,
    signInWithDiscord,
    signInWithSlack,
    signOut,
  };

  return (
    <UserData.Provider value={userDataValue}>
      <Component {...pageProps} />
    </UserData.Provider>
  );
}

export default MyApp;
