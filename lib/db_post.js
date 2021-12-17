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

export async function addQuestion(user_id, text, images) {
  console.log(`addPost(${user_id}, ${text}, ${JSON.stringify(images)})`);

  let thread_id = getUniqueStr();

  const { data, error } = await supabase.from("posts").insert([
    {
      qora: 0,
      thread_id: thread_id,
      user_id: user_id,
      post_text: text,
      post_images: images,
      status: 0,
    },
  ]);
}

export async function addAnswer(user_id, thread_id, text, images) {
  console.log(`addPost(${text}, ${JSON.stringify(images)})`);

  const { data, error } = await supabase.from("posts").insert([
    {
      qora: 1,
      thread_id: thread_id,
      user_id: user_id,
      text: text,
      images: images,
      status: 0,
    },
  ]);
}

export async function putFile(filename, srcfile) {
  if (filename == null || filename == "") return;

  const ext = filename.split(".").pop();
  const dstfile = getUniqueStr() + "." + ext;

  console.log(`filename=${filename} dstfile=${dstfile}`);

  const { data, error } = await supabase.storage
    .from("images")
    .upload(dstfile, srcfile);
}
