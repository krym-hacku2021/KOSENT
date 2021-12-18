/** @format */

import { supabase } from "./supabase_client";

function getUniqueStr(myStrong) {
  var strong = 1000;
  if (myStrong) strong = myStrong;
  return (
    new Date().getTime().toString(16) +
    Math.floor(strong * Math.random()).toString(16)
  );
}

export async function addQuestion(user_id, nickname, text, images) {
  console.log(`addPost(${user_id}, ${text}, ${JSON.stringify(images)})`);

  let thread_id = getUniqueStr();

  const { data, error } = await supabase.from("posts").insert([
    {
      qora: 0,
      thread_id: thread_id,
      user_id: user_id,
      user_nickname: nickname,
      post_text: text,
      post_images: images,
      status: 0,
    },
  ]);

  return data;
}

export async function addAnswer(user_id, nickname, thread_id, text, images) {
  console.log(`addPost(${text}, ${JSON.stringify(images)})`);

  const { data, error } = await supabase.from("posts").insert([
    {
      qora: 1,
      thread_id: thread_id,
      user_id: user_id,
      user_nickname: nickname,
      text: text,
      images: images,
      status: 0,
    },
  ]);

  return data;
}

export async function putFile(filename, srcfile) {
  if (filename == null || filename == "") return;

  const ext = filename.split(".").pop();
  const dstfile = "public/" + getUniqueStr() + "." + ext;

  console.log(`filename=${filename} dstfile=${dstfile}`);

  const { data, error } = await supabase.storage
    .from("images")
    .upload(dstfile, srcfile);

  return dstfile;
}

export async function getPosts() {
  const { data, error } = await supabase
    .from("posts")
    .select()
    .eq("qora", 0)
    .order("date", { ascending: "desc" });

  return data;
}

export async function getPostsCount() {
  const { data, error } = await supabase.from("posts").select("id");
  return data != null ? data.length : 0;
}

export async function getPostsRange(beginIndex, count) {
  const { data, error } = await supabase
    .from("posts")
    .select()
    .eq("qora", 0)
    .order("date", { ascending: "desc" })
    .range(beginIndex, beginIndex + count);

  return data;
}

export async function getThreadPosts(thread_id) {
  const { data, error } = await supabase
    .from("posts")
    .select()
    .eq("thread_id", thread_id)
    .order("date", { ascending: "desc" });

  return data;
}

export async function getImageURL(imagefile) {
  const { signedURL, error } = await supabase.storage
    .from("images")
    .createSignedUrl(imagefile, 600);

  return signedURL;
}

function* getimages(imagefile) {
  for (var i = 0; i < imagefile.length; i++) yield getImageURL(imagefile[i]);
}

export async function getImageURLs(imagefiles) {
  var result = [];

  // for await (var url of getimages(imagefiles)) {
  //   result.push("");
  // }

  for (var i = 0; i < imagefiles.length; i++) {
    // console.log(`img=${img}`);

    // const { url, error } = await supabase.storage
    //   .from("images")
    //   .createSignedUrl(img, 600);

    // console.log(url);

    result.push("");
  }
  return result;
}
