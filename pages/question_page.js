
function Home() {
    return (
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
    );
  }
  
  export default Home;