<<<<<<< HEAD
import React, { useState } from "react";

import "../styles/globals.css";

import useUser from "../hooks/useUser";
import { UserData } from "../hooks/UserData";

=======
import '../styles/globals.css';
import "../styles/Home.module.css";
>>>>>>> 16513830740062da516fe97ef5f7fe9a10c3e24f
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
