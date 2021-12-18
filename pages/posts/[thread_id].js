import { Chip, Container, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { getThreadPosts } from "../../lib/db_post";
import { useState, useEffect } from "react";
import Search_Results from "../../components/search_Results";
import EXAppBar from "../../components/EXAppBar";
import styles from "../../styles/Home.module.css";

export default function ThreadPage({ post_txt, post_time, tag }) {
  const router = useRouter();
  const { thread_id } = router.query;
  const [postData, setPostsData] = useState({ thread: [] });
  useEffect(async () => {
    const data = await getThreadPosts(thread_id);

    console.log(`thread=${JSON.stringify(data)}`);

    setPostsData({
      thread: data,
    });
  }, []);

  console.log(`ThreadPage: ${thread_id}`);

  return (
    <main className={styles.main}>
      <EXAppBar></EXAppBar>
      <p></p>
      <Container maxWidth="sm">
        {
          // 開始
          postData.thread.length > 0 ? (
            <Search_Results
              key={postData.thread[postData.thread.length - 1].post_id}
              item={postData.thread[postData.thread.length - 1]}
              noImage={false}
            ></Search_Results>
          ) : null
        }
        {postData.thread.map((item, index) => {
          return index != postData.thread.length - 1 ? (
            <Search_Results key={item.post_id} item={item} noImage={false}></Search_Results>
          ) : null;
        })}
      </Container>
    </main>
  );
}
