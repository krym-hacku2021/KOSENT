import React, { useState } from "react";
export default function question(props){
    const[text,setText]=useState("")
    function handlonChange(event){
        setText(event.target.value);
    }
    function handlSubmit(event){
       console.log(props.name+':'+text);
       event.preventDefault(); 
    }
    const update=function(){
        props.update(text);
    }
  return (
  <div>
  <div class="basho">
  <div className="question_frame">
            <div className="upload_img_button">
                <div className="upload_img">
                    <div className="image"><img src="/bi_image.png" /></div>
                    <p>画像をアップロード</p>
                </div>
            </div>
            <div className="text">
                <div className="title"><h1>質問作成ページ</h1></div>
                <div className="part1">
                    <div className="question_img"><img src="/question.png" /></div>
                    <div className="text1"><h5>ふとした悩みや疑問を投稿してみましょう！</h5></div>
                </div>
                <div className="part2">
                    <div className="attention_img"><img src="/attention.png" /></div>
                    <div className="text2"><h5>誹謗中傷はやめましょう</h5></div>
                </div>
            </div>
        </div>
        <div class="b">
        <textarea class="txt" placeholder="3文字以上入力してください" onChange={event => setText(event.target.value)}/><br></br>
        <p class="sita">あなたにおすすめのタグ<br></br>
        <button class="kadomaru">#喫煙</button>
        <button class="kadomaru">#タバコたかい</button>
        <button class="kadomaru">#タバコくさい</button><br></br>
        <input type="submit" value="送信"/>
        <div class="b">
        {/* <Tab name="あいうえお" value={text} update={text}></Tab> */}
        </div>
        </p>
        </div>
        </div>
        </div>