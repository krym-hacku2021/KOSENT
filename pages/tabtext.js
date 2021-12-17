import React, { useState } from "react";
import Link from "next/link";
// import Image from "next/image";

export default function Txtarea(props){
    // const[text,setText]=useState("");
    // const Updetetext=function(value){
    //     setText(value);
    // };
    return (
        // <>
        // <div>入力された内容をそのまま表示する</div>
        // <div><Text value={text} update={text}></Text></div>
        // <div class="b">
        // <textarea class="txt" placeholder="3文字以上入力してください" onChange={event => setText(event.target.value)} /><br></br>
        // </div></>
        <>
        {/* <EXAppBar/> */}
        <div className="flame02"><font size="5"><Link href="http://localhost:3000/tabtext">
        あああああああああああああああああああああああああああああああああああああああ</Link></font><br></br>
        <time>12月08日12：09</time>
        <button className="kadomaru">#高専</button>
        <button className="kadomaru">#流通情報工学科</button>
        <button className="kadomaru">#C言語</button>
        </div>
        </>
    )
    
}