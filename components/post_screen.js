/** @format */

import PostSc from "../styles/PostScreen.module.css";
import Head from "next/head";
import Image from "next/image";
export default function PostScreen({
  user_id,
  post_time,
  post_txt,
  tag,
  ans_count,
}) {
  return (
    <div className="PostSc.main2">
      <div className="PostSc.postframe">
        <div className="PostSc.textframe">
          <div className="PostSc.ue">
            <div className="PostSc.userid">
              <p>{user_id}さん</p>
            </div>
            <div className="PostSc.date">
              <p>{post_time}</p>
            </div>
            <div className="PostSc.circle"></div>
          </div>

          <div className="PostSc.question">
            <p>{post_txt}</p>
          </div>

          <div className="PostSc.tagframe">
            <div className="PostSc.hashtag">
              <p>{tag}</p>
            </div>
          </div>
        </div>

        <div className="PostSc.kaitoudesu">
          <div className="PostSc.kaitou">
            <p>回答</p>
          </div>
          <div className="PostSc.kaitousuu">
            <p>{ans_count}</p>
          </div>
        </div>

        <div className="PostSc.kontentu">
          <div className="PostSc.kyouyu">
            <Image src="/share.png" alt="share" width="100px" height="100px"/>
          </div>
          <div className="PostSc.block">
            <Image src="/block.png" alt="block" width="100px" height="100px" />
          </div>
        </div>
      </div>

      <hr />

      <div className="PostSc.kaitoubotann">
        <p>回答する</p>
      </div>
    </div>
  );
}
