import {
  CircularProgress,
  Container,
  Paper,
  Stack,
} from "@mui/material";

export default function Loading() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <p></p>
          <p>
            <CircularProgress />
          </p>
          <p>ローディング･･･</p>
          <p></p>
        </Stack>
      </Paper>
    </Container>
  );
}
