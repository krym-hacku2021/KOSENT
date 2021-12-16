/** @format */

import Postans from "../styles/PostAns.module.css";
import Image from "next/image";

export default function PostAns({
  user_name,
  post_time,
  post_txt,
  tag,
  good,
  bad,
}) {
  return (
    <div className="Postans.main1">
      <div className="Postans.postframe">
        <div className="Postans.textframe">
          <div className="Postans.ue">
            <div className="Postans.userid">
              <p>{user_name}さん</p>
            </div>
            <div className="Postans.date">
              <p>{post_time}</p>
            </div>
            <div className="Postans.circle"></div>
          </div>

          <div className="Postans.question">
            <p>{post_txt}</p>
          </div>
          <div className="Postans.tagframe">
            <div className="Postans.hashtag">
              <p>{tag}</p>
            </div>
          </div>

          <div className="Postans.button">
            <div className="Postans.good">
              <Image src="/good.png" alt="good" width="100px" height="100px" />
            </div>
            <div className="Postans.g_count">
              <p>{good}</p>
            </div>
            <div className="Postans.bad">
              <Image src="/bad.png" alt="bad" width="100px" height="100px"/>
            </div>
            <div className="Postans.b_count">
              <p>{bad}</p>
            </div>
          </div>
        </div>

        <div className="Postans.kontentu">
          <div className="Postans.block">
            <Image src="/block.png" alt="block" width="100px" height="100px" />
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
}
