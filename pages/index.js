/** @format */

import React, { useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { Container, Paper, Tabs, Tab, Typography, Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import EXAppBar from "../components/EXAppBar";

import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";

import styles from "../styles/Home.module.css";

import { UserData } from "../hooks/UserData";

import { getUserInfo, modifyUserInfo } from "../lib/db_user";
import SignIn from "../components/signin";
import FirstSignIn from "../components/first_signin";
import HomeSignedIn from "../components/home_signedin";
import Loading from "../components/loading";

export default function Home() {
  const [userInfoLoaded, setUserInfoLoaded] = useState(false);
  const {
    userInfo,
    setUserInfo,
    session,
    signInWithGithub,
    signInWithDiscord,
    signInWithSlack,
    signOut,
  } = useContext(UserData);

  let Contents = <Loading />;

  if (session) {
    console.log("ログイン済み");

    if (!userInfoLoaded) {
      // console.log("ユーザ情報読み込むよ！");
      getUserInfo().then((value) => {
        // console.log(`ユーザ情報読込完了 >>> ${JSON.stringify(value)}`);
        setUserInfo({
          id: value.id,
          nickname: value.nickname,
          avatarurl: value.avatarurl,
        });
        setUserInfoLoaded(true);
      });
    } else {
      if (userInfo.nickname == "" || userInfo.nickname == null) {
        console.log("ニックネームを設定するよ");
        console.log(`${JSON.stringify(userInfo)}`);
        Contents = <FirstSignIn userInfo={userInfo} />;
      } else {
        console.log("ログイン処理完了！");
        Contents = <HomeSignedIn signOut={signOut} />;
      }
    }
  } else {
    console.log("未ログイン");
    Contents = (
      <SignIn
        signInWithGithub={signInWithGithub}
        signInWithDiscord={signInWithDiscord}
        signInWithSlack={signInWithSlack}
      />
    );
  }

  return <>{Contents}</>;
}
