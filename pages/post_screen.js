import PostSc from '../styles/post_screen.module.css'

export default function PostScreen({user_id, post_time, post_txt, tag, ans_count}) {
    return (
        <div className="PostSc.main">
            <div className="PostSc.postframe">
                <div className="PostSc.textframe">
                    <div className="PostSc.ue">
                        <div className="PostSc.userid"><p>{user_id}さん</p></div>
                        <div className="PostSc.date"><p>{post_time}</p></div>
                        <div className="PostSc.circle"></div>
                    </div>

                    <div className="PostSc.question"><p>{post_txt}</p></div>

                    <div className="PostSc.tagframe">
                        <div className="PostSc.hashtag"><p>{tag}</p></div>
                    </div>
                </div>
                
                <div className="PostSc.kaitoudesu">
                    <div className="PostSc.kaitou"><p>回答</p></div>
                    <div className="PostSc.kaitousuu"><p>{ans_count}</p></div>
                </div>

                <div className="PostSc.kontentu">
                    <div className="PostSc.kyouyu"><img src="/share.png"/></div>
                    <div className="PostSc.block"><img src="/block.png"/></div>
                </div>
            </div>

            <hr noshade />

            <div className="PostSc.kaitoubotann"><p>回答する</p></div>
        </div>
    );
}