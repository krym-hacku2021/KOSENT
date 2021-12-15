/** @format */

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { Container, Paper, Tabs, Tab, Typography, Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import EXAppBar from "./EXAppBar";

import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";

import styles from "../styles/Home.module.css";

import { supabase } from "../lib/supabase_client";
import { UserData } from "../hooks/UserData";
import useUser from "../hooks/useUser";
import { getUserInfo, modifyUserInfo } from "../lib/db_user";
import { TabPanel, a11yProps } from "../components/TabPanel";
import SignIn from "./signin";
import FirstLogin from "./first_login";

function HomeLoggedIn() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>KOSENT</title>
        <meta name="description" content="KOSENT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <EXAppBar></EXAppBar>

        {/* <Container>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrow={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
          >
            <Paper
              elevation={3}
              sx={{
                height: 300,
                backgroundColor: "#FFB8B8",
              }}
            >
              <h2>
                <Baloon></Baloon>
              </h2>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                height: 300,
                backgroundColor: "#B8FFB8",
              }}
            >
              <h2>
                <Baloon></Baloon>
              </h2>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                height: 300,
                backgroundColor: "#B8D7FF",
              }}
            >
              <h2>
                <Baloon></Baloon>
              </h2>
            </Paper>
          </Carousel>
        </Container> */}

        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100vw" }}>
          <Tabs
            value={tabValue}
            sx={{width: "100%"}}
            onChange={(event, newValue) => {
              setTabValue(newValue);
            }}
          >
            <Tab label="最新の投稿" {...a11yProps(0)} sx={{ width: "50%" }} />
            <Tab label="人気の投稿" {...a11yProps(1)} sx={{ width: "50%" }} />
          </Tabs>
        </Box>
        <TabPanel value={tabValue} index={0}>
          a
          {/* <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea> */}
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          b
          {/* <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea>
          <Textarea></Textarea> */}
        </TabPanel>
      </main>
    </div>
  );
}

export default function Home() {

  const {
    session,
    signInWithGithub,
    signInWithDiscord,
    signInWithSlack,
    signOut,
  } = useUser();
  const [userInfoLoaded, setUserInfoLoaded] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: "",
    nickname: "",
    avatarurl: "",
  });
  const userDataValue = {
    userInfo,
    setUserInfo,
    session,
    signOut
  };

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
        Contents = <FirstLogin userInfo={userInfo} />;
      } else {
        console.log("ログイン処理完了！");
        Contents = (
          <UserData.Provider value={userDataValue}>
            <HomeLoggedIn signOut={signOut} />
          </UserData.Provider>
        );
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
