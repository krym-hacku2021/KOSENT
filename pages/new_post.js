/** @format */

// import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useState, useRef, useContext } from "react";
import EXAppBar from "../components/EXAppBar";
import styles from "../styles/Home.module.css";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  TextareaAutosize,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import QuizIcon from "@mui/icons-material/Quiz";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import { UploadButton } from "../components/UploadButton";
import { addAnswer, putFile, addQuestion } from "../lib/db_post";
import { UserData } from "../hooks/UserData";

const Input = styled("input")({
  display: "none",
});

export default function NewPost({ props }) {
  const { userInfo } = useContext(UserData);
  const [inputText, setInputText] = useState("");
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([
    "#広島商船",
    "#流通情報工学科",
    "#電子制御工学科",
    "#商船学科",
  ]);

  const update = function () {
    props.update(text);
  };

  const changeUploadFile = async (event) => {
    console.log("aaa");
    //const { name, files } = event.target;
    console.log(JSON.stringify(event.target.value));
    console.log(JSON.stringify(event.target.files));
    var filename = event.target.value;
    // var filename = event.target.files[0];

    putFile(filename).then((value) => {
       console.log("アップロード完了")
    })

    // event.target.value = "";
  };

  const submitNewPost = () => {
    console.log("submit");
    addQuestion(userInfo.id, inputText, images);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>KOSENT</title>
        <meta name="description" content="KOSENT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <EXAppBar></EXAppBar>

        <Container maxWidth="sm">
          <p>{userInfo.id}</p>
          <p>{userInfo.nickname}</p>
          <p>{userInfo.avatarurl}</p>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={1}>
              <Image
                src="/question.png"
                alt="question"
                width={40}
                height={40}
              />
            </Grid>
            <Grid item xs={11}>
              ふとした悩みや疑問を投稿してみましょう！
            </Grid>
            <Grid item xs={1}>
              <Image
                src="/attention.png"
                alt="attention"
                width={40}
                height={40}
              />
            </Grid>
            <Grid item xs={11}>
              誹謗中傷はやめましょう
            </Grid>
          </Grid>
        </Container>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={8} md={7}>
            <Box sx={{ bgcolor: "#cfe8fc" }}>
              <TextareaAutosize
                aria-label="question text"
                minRows={10}
                placeholder="質問内容を記入してください"
                style={{ width: "100%", fontSize: "1.5em" }}
                value={inputText}
                onChange={(event) => {
                  setInputText(event.target.value);
                }}
              />
              <div>あなたにおすすめのタグ: {inputText}</div>
              {tags.map((tag, index) => (
                <Chip
                  key={`${tag}-${index}`}
                  label={tag}
                  variant="outlined"
                  onClick={() => setInputText(inputText + ` ${tag}`)}
                />
              ))}
            </Box>
          </Grid>
          <Grid item xs={4} sm={8} md={5}>
            <Box sx={{ bgcolor: "#cfe8fc" }}>
              <Grid container>
                <Grid item xs={6}>
                  <label htmlFor="contained-uploadbutton-file1">
                    <Input
                      accept="image/*"
                      id="contained-uploadbutton-file1"
                      type="file"
                      onChange={changeUploadFile}
                    />
                    <Button
                      variant="outlined"
                      component="span"
                      fullWidth={true}
                    >
                      Upload
                    </Button>
                  </label>
                </Grid>
                <Grid item xs={6}>
                  <label htmlFor="contained-uploadbutton-file2">
                    <Input
                      accept="image/*"
                      id="contained-uploadbutton-file2"
                      type="file"
                      onChange={changeUploadFile}
                    />
                    <Button
                      variant="outlined"
                      component="span"
                      fullWidth={true}
                    >
                      Upload
                    </Button>
                  </label>
                </Grid>
                <Grid item xs={6}>
                  <label htmlFor="contained-uploadbutton-file3">
                    <Input
                      accept="image/*"
                      id="contained-uploadbutton-file3"
                      type="file"
                      onChange={changeUploadFile}
                    />
                    <Button
                      variant="outlined"
                      component="span"
                      fullWidth={true}
                    >
                      Upload
                    </Button>
                  </label>
                </Grid>
                <Grid item xs={6}>
                  <label htmlFor="contained-uploadbutton-file4">
                    <Input
                      accept="image/*"
                      id="contained-uploadbutton-file4"
                      type="file"
                      onChange={changeUploadFile}
                    />
                    <Button
                      variant="outlined"
                      component="span"
                      fullWidth={true}
                    >
                      Upload
                    </Button>
                  </label>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Container maxWidth="sm">
          <Button
            variant="contained"
            size="large"
            fullWidth={true}
            sx={{
              background: "#FA8F02",
              "&:hover": {
                backgroundColor: "#FF4901",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            onClick={() => submitNewPost()}
          >
            送信
          </Button>
        </Container>
      </main>
    </div>
  );
}
