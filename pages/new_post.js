/** @format */

// import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Router, { useRouter } from "next/router";
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
  Stack,
  TextareaAutosize,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { addAnswer, putFile, addQuestion, getImageURL } from "../lib/db_post";
import { UserData } from "../hooks/UserData";

const Input = styled("input")({
  display: "none",
});

export default function NewPost() {
  const router = useRouter();
  const { session, userInfo } = useContext(UserData);
  const [inputText, setInputText] = useState("");
  const [images, setImages] = useState([]);

  const [tags, setTags] = useState([
    "#広島商船",
    "#流通情報工学科",
    "#電子制御工学科",
    "#商船学科",
  ]);

  const changeUploadFile = async (event) => {
    console.log(
      `changeUploadFile: ${JSON.stringify(event.target.value)} ${JSON.stringify(
        event.target.files
      )}`
    );
    var filename = event.target.value;
    var file = event.target.files[0];

    putFile(filename, file).then((value) => {
      getImageURL(value).then((url) => {
        var listurl = images;
        listurl.push({ file: value, url: url });
        setImages(listurl);
      });
      console.log("アップロード完了 : " + value);
    });

    event.target.value = "";
  };

  const submitNewPost = () => {
    if (inputText.length <= 1) return;

    console.log("submit");
    var imglist = images.map(item => item.file);

    addQuestion(userInfo.id, userInfo.nickname, inputText, imglist);

    router.push("/");
  };

  // if (!session) {
  //   router.replace("/");
  // }

  var imageListHeight = Math.min((images.length / 2) * 200, 450);

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
          <Stack spacing={2}>
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

            <Box>
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
              <div>あなたにおすすめのタグ</div>
              {tags.map((tag, index) => (
                <Chip
                  key={`${tag}-${index}`}
                  label={tag}
                  variant="outlined"
                  onClick={() => setInputText(inputText + ` ${tag}`)}
                />
              ))}
            </Box>

            <Box>
              <ImageList
                sx={{ width: 500, height: { imageListHeight } }}
                cols={2}
                rowHeight={164}
              >
                {images.map((item) => (
                  <ImageListItem key={item.file}>
                    <img src={item.url} alt={item.file} loading="lazy" />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>

            <Box>
              {images.length < 4 ? (
                <label htmlFor="contained-uploadbutton-file1">
                  <Input
                    accept="image/*"
                    id="contained-uploadbutton-file1"
                    type="file"
                    onChange={changeUploadFile}
                  />
                  <Button variant="outlined" component="span" fullWidth={true}>
                    Upload
                  </Button>
                </label>
              ) : null}
            </Box>

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
          </Stack>
        </Container>
      </main>
    </div>
  );
}
