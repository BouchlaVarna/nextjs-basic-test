import Link from "next/link";

const backyard = () => {
    return (
        <h1>There is a tree, you just can't see it
            <h2>
                <Link href="/home">
                    <a>Go back inside</a>
                </Link>
            </h2>
        </h1>
    );
}
 
export default backyard;