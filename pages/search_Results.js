import { Chip } from "@mui/material";
import Link from "next/link";

export default function Search_Results({post_txt,post_time,tag}){
    return (
        <div className="flame02">
            <font size="5">
                <Link href="../pages/post_ans" >
                <a>{post_txt}</a>
                </Link>
            </font><br></br>
            <time>{post_time}</time>
            <Chip label={tag} />
        </div>
        // </>
    );
}