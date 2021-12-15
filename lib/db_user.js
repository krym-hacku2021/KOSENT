/** @format */
import { supabase } from "./supabase_client";

/**
 * ユーザ情報を取得する
 * @returns 
 */
export async function getUserInfo() {
  const { data, error } = await supabase
    .from("users")
    .select("id, fullname, avatarurl, nickname");

  if (data.length == 1) {
    return data[0];
  }

  return null;
}

/**
 * ユーザのニックネームを更新する
 * @param {*} id 対象となるUser ID
 * @param {*} nickname 
 */
export async function modifyNickname(id, nickname) {
//   console.log(`modifyUserInfo(${id}, ${nickname})`);

  const { data, error } = await supabase
    .from("users")
    .update({ nickname: nickname })
    .match({ id: id });
}
