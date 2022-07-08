import { useRouter } from "next/router";

function Docs() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  // ? http://localhost:3000/docs/feature1/concept1
  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and Concepts {params[1]}
      </h1>
    );
    // ? http://localhost:3000/docs/feature1
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>;
  }
  return <h1>Docs home page</h1>;
}

export default Docs;
