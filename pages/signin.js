/** @format */
import Image from "next/image";
import { Box, Button, Container, Grid, Paper, Stack } from "@mui/material";

export default function SignIn() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <Box sx={{ background: "#F7723F", width: "100%" }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid>
                <Image
                  src="/logo.png"
                  alt="logo"
                  width="292px"
                  height="115px"
                />
              </Grid>
            </Grid>
          </Box>
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
          <p></p>
        </Stack>
      </Paper>
    </Container>
  );
}
