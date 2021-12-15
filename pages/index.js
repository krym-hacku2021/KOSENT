
import PostScreen from "./post_screen";
import PostAns from "./post_ans";
import Balloon1 from "./balloon1";

export default function Home() {

    return (
        <div className="main">
            <PostScreen user_id="22018025"
                        post_time="2021/11/24 12:34"
                        post_txt="今年、広島商船の推薦入試を受ける予定なのですが、入試対策はどんなことをすればいいですか?"
                        tag="#高専全て"
                        post_count="19">
            </PostScreen>
            
            <PostAns user_name="2200220022"
                     post_time="2021/11/24 12:34"
                     post_txt="今年、広島商船の推薦入試を受ける予定なのですが、入試対策はどんなことをすればいいですか?"
                     tag="#高専全て"
                     good="7"
                     bad="1"
                     >
            </PostAns>

            <Balloon1 post_txt="今年、広島商船の推薦入試を受ける予定なのですが、入試対策はどんなことをすればいいですか?">
            </Balloon1>
        </div>
    );
}