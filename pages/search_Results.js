import Link from "next/link";

// import React, { useState } from "react";
// // import Text from "./text.js"
// export default function Txtarea(props){
//     const[text,setText]=useState("");
//     const Updetetext=function(value){
//         setText(value);
//     };
export default function Search_Results({post_txt,post_time,tag}){
    return (
        // <>
        // <div>入力}された内容をそのまま表示する</div>
        // <div><Text value={text} update={text}></Text></div>
        // <div class="b">
        // <textarea class="txt" placeholder="3文字以上入力してください" onChange={event => setText(event.target.value)} /><br></br>
        // </div></>
        // <>
        <div class="flame02">
            <font size="5">
                <Link href="../pages/post_ans" >
                <a>{post_txt}</a>
                </Link>
            </font><br></br>
            <time>{post_time}</time>
            <button class="kadomaru">{tag}</button>
        </div>
        // </>
    );
}