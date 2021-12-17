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
import { TabPanel, a11yProps } from "../components/TabPanel";
import SignIn from "../components/signin";
import FirstSignIn from "../components/first_signin";
import Search_Results from "./search_Results";

function HomeLoggedIn() {
  const [tabValue, setTabValue] = useState(0);
  const {userInfo} = useContext(UserData);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>KOSENT</title>
        <meta name="description" content="KOSENT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <EXAppBar></EXAppBar>
        <p>{userInfo.nickname}さん、こんにちは</p>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100vw" }}>
          <Tabs
            value={tabValue}
            sx={{ width: "100%" }}
            onChange={(event, newValue) => {
              setTabValue(newValue);
            }}
          >
            <Tab label="最新の投稿" {...a11yProps(0)} sx={{ width: "50vw" }} />
            <Tab label="人気の投稿" {...a11yProps(1)} sx={{ width: "50vw" }} />
          </Tabs>
        </Box>
        <TabPanel value={tabValue} index={0}>
          <Search_Results
            post_txt="aaaaaaaaaaaa"
            post_time="2021/12/16 11:35"
            tag="tagです"
          ></Search_Results>
          <Search_Results
            post_txt="aaaaaaaaaaaa"
            post_time="2021/12/16 11:35"
            tag="tagです"
          ></Search_Results>
          <Search_Results
            post_txt="aaaaaaaaaaaa"
            post_time="2021/12/16 11:35"
            tag="tagです"
          ></Search_Results>
          <Search_Results
            post_txt="aaaaaaaaaaaa"
            post_time="2021/12/16 11:35"
            tag="tagです"
          ></Search_Results>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Search_Results
            post_txt="aaaaaaaaaaaa"
            post_time="2021/12/16 11:35"
            tag="tagです"
          ></Search_Results>
          <Search_Results
            post_txt="aaaaaaaaaaaa"
            post_time="2021/12/16 11:35"
            tag="tagです"
          ></Search_Results>
          <Search_Results
            post_txt="aaaaaaaaaaaa"
            post_time="2021/12/16 11:35"
            tag="tagです"
          ></Search_Results>
          <Search_Results
            post_txt="aaaaaaaaaaaa"
            post_time="2021/12/16 11:35"
            tag="tagです"
          ></Search_Results>
        </TabPanel>
      </main>
    </div>
  );
}

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

  let Contents = <div>ろーでぃんぐ</div>;

  if (session) {
    console.log("ログイン済み");

    if (!userInfoLoaded) {
      console.log("ユーザ情報読み込むよ！");
      getUserInfo().then((value) => {
        console.log(`ユーザ情報読込完了 >>> ${JSON.stringify(value)}`);
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
        Contents = <HomeLoggedIn signOut={signOut} />;
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
