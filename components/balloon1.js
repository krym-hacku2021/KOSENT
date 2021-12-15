function Balloon1({post_txt}) {
    return (
        <div className="balloon1">
            <div className="balloon-img1">
                <img src="/balloon1.png" alt="balloon1" />
            </div>
            
            <div className="ballooncontainer">
                <div className="first">
                    <p>1</p>
                </div>

                <div className="text">
                    <a href="https://tomosta.jp/article/nextjs-basic/#ib-toc-anchor-7">{post_txt}</a>
                </div>
            </div>
        </div>
    );
  }
  
  export default Balloon1;