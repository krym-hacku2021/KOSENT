/** @format */
import Image from "next/image";
import { Router, useRouter } from "next/router";
import { useRef } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { modifyNickname } from "../lib/db_user";

export default function FirstSignIn({ userInfo }) {
  const inputNickname = useRef("名無しさん");
  const router = useRouter();

  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <Box sx={{ background: "#FA8F02", width: "100%" }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid>
                <Image
                  src="/KOSENT-c.png"
                  alt="logo"
                  width="292px"
                  height="115px"
                />
              </Grid>
            </Grid>
          </Box>
          <>
            <p>ニックネームを登録してください。</p>
          </>
          <>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="outlined-basic"
                label="ニックネーム"
                variant="standard"
                inputRef={inputNickname}
              />
            </Box>
          </>
          <>
            <Button
              variant="contained"
              size="large"
              sx={{
                width: "200px",
                background: "#FA8F02",
                "&:hover": {
                  backgroundColor: "#FF4901",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
              onClick={() => {
                if (inputNickname.current.value != "") {
                    console.log(`${userInfo}`)
                  modifyNickname(userInfo.id, inputNickname.current.value).then(
                    (value) => {
                      router.push("/");
                    }
                  );
                }
              }}
            >
              登録
            </Button>
          </>
          <p></p>
        </Stack>
      </Paper>
    </Container>
  );
}
