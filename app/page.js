import Link from "next/link";

export default function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/blog">
                        Blog
                    </Link>
                </li>
               
            </ul>
            <h1>Hello World Next.js</h1>
        </div>
    )
}