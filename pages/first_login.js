/** @format */
import Image from "next/image";
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
            <p>ニックネームを登録してください。</p>
          </>
          <>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="outlined-basic"
                label="ニックネーム"
                variant="standard"
              />
            </Box>
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
              登録
            </Button>
          </>
          <p></p>
        </Stack>
      </Paper>
    </Container>
  );
}
