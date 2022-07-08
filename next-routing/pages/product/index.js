import Link from "next/link";

export default function Product() {
  return (
    <>
      <h1>Product List</h1>

      <h2>
        <Link href="/product/1">
          <a>Product 1</a>
        </Link>
      </h2>

      <h2>
        <Link href="/product/2">
          <a>Product 2</a>
        </Link>
      </h2>

      <h2>
        <Link href="/product/3" replace>
          <a>Product 3</a>
        </Link>
      </h2>
    </>
  );
}
