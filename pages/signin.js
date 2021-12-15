/** @format */
import Image from "next/image";
import { Button, Container, Stack } from "@mui/material";

export default function SignIn() {
  return (
    <>
      <Container>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
        >
          <div sx={{background: "#F7723F"}}>
            <Image src="/logo.png" alt="logo" width="292px" height="115px" />
          </div>
          <>
            <p>利用するにはボタンを押してログインしてください。</p>
          </>
          <>
            <Button
              variant="contained"
              size="large"
              sx={{
                width: "200px",
                background: "#F7723F",
                "&:hover": {
                  backgroundColor: "#FF4901",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
              onClick={() => {}}
            >
              GitHubログイン
            </Button>
          </>
          <>
            <Button
              variant="contained"
              size="large"
              sx={{
                width: "200px",
                background: "#F7723F",
                "&:hover": {
                  backgroundColor: "#FF4901",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
              onClick={() => {}}
            >
              Discordログイン
            </Button>
          </>
          <>
            <Button
              variant="contained"
              size="large"
              sx={{
                width: "200px",
                background: "#F7723F",
                "&:hover": {
                  backgroundColor: "#FF4901",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
              onClick={() => {}}
            >
              Slackログイン
            </Button>
          </>
        </Stack>
      </Container>
    </>
  );
}
