// import Link from "next/link";
import Image from "next/image";
// import React, { useState } from "react";
import EXAppBar from "./EXAppBar";
export default function question(props){
    // const[text,setText]=useState("")
    // function handlonChange(event){
    //     setText(event.target.value);
    // }
    // function handlSubmit(event){
    //    console.log(props.name+':'+text);
    //    event.preventDefault(); 
    // }

    // const update=function(){
    //     props.update(text);
    // }

  return (
  <div>
    
    <div className="basho">
  <div className="question_frame">
            <div className="upload_img_button">
                <div className="upload_img">
                    <div className="image"><Image src="/bi_image.png" alt="bi" width="100px" height="100px" /></div>
                    <p>画像をアップロード</p>
                </div>
            </div>
            <div className="text">
                <div className="title"><h1>質問作成ページ</h1></div>
                <div className="part1">
                    <div className="question_img"><Image src="/question.png" alt="question" width="100px" height="100px" /></div>
                    <div className="text1"><h5>ふとした悩みや疑問を投稿してみましょう！</h5></div>
                </div>
                <div className="part2">
                    <div className="attention_img"><Image src="/attention.png" alt="attention" width="100px" height="100px" /></div>
                    <div className="text2"><h5>誹謗中傷はやめましょう</h5></div>
                </div>
            </div>
        </div>
        <div className="b">
        <textarea className="txt" placeholder="3文字以上入力してください" 
        // onChange={event => setText(event.target.value)}
        /><br></br>
        <p className="sita">あなたにおすすめのタグ<br></br>
        <button className="kadomaru">#広島商船</button>
        <button className="kadomaru">#流通情報工学科</button>
        <button className="kadomaru">#情報コース</button><br></br>
        <input type="submit" value="送信" />
        <div className="b">
        {/* <Tab name="あいうえお" value={text} update={text}></Tab> */}
        </div>
        </p>
        </div>
        </div>
        </div>

  )
}
