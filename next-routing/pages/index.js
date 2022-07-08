import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home route</h1>

      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>product</a>
      </Link>
    </>
  );
}
