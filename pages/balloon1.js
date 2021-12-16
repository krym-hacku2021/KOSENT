import Link from "next/link";
import Image from "next/image";
function Balloon1({post_txt}) {
    return (
        <div className="balloon1">
            <div className="balloon-Image1">
                <Image src="/balloon1.png" alt="balloon1" width="100px" height="100px" />
            </div>
            
            <div className="ballooncontainer">
                <div className="first">
                    <p>1</p>
                </div>

                <div className="text">
                    <Link href="https://tomosta.jp/article/nextjs-basic/#ib-toc-anchor-7">{post_txt}</Link>
                </div>
            </div>
        </div>
    );
  }
  
  export default Balloon1;