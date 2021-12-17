/** @format */


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
    <div className="main1">
      <div className="postframe">
        <div className="textframe">
          <div className="ue">
            <div className="userid">
              <p>{user_name}さん</p>
            </div>
            <div className="date">
              <p>{post_time}</p>
            </div>
            <div className="circle"></div>
          </div>

          <div className="question">
            <p>{post_txt}</p>
          </div>
          <div className="tagframe">
            <div className="hashtag">
              <p>{tag}</p>
            </div>
          </div>

          <div className="button">
            <div className="good">
              <Image src="/good.png" alt="good" width="100px" height="100px" />
            </div>
            <div className="g_count">
              <p>{good}</p>
            </div>
            <div className="bad">
              <Image src="/bad.png" alt="bad" width="100px" height="100px"/>
            </div>
            <div className="b_count">
              <p>{bad}</p>
            </div>
          </div>
        </div>

        <div className="kontentu">
          <div className="block">
            <Image src="/block.png" alt="block" width="100px" height="100px" />
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
}
