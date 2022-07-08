import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <>
      <h1>Product detail route</h1>
      <p>Details about a product: {productId}</p>
    </>
  );
}
