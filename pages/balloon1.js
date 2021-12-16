import Link from "next/link";
import Image from "next/image";
function Balloon1() {
    return (
        <div className="balloon1">
            <div className="balloon-Image1">
                <Image src="/balloon1.png" alt="balloon1" width="300px" height="300px" />
            </div>
            
            <div className="ballooncontainer">
                <div className="first">
                    <p>1</p>
                </div>

                <div className="text">
                    <Link href="http://localhost:3000/tabtext">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Link>
                </div>
            </div>
        </div>
    );
  }
  
  export default Balloon1;