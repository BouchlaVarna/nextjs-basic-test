import Link from "next/link";

const Header = () => {
    return ( 
        <h1 className="title">
            You have a very nice home, uhm very nice
            <h2>
                <Link href="/home/backyard">
                    <a>Go out</a>
                </Link>
            </h2>
        </h1>
    );
}
 
export default Header;