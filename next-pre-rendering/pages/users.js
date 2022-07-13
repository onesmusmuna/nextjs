export default function UsersList(props) {
  return (
    <>
      <h2>List of users</h2>

      {props.users.map((user) => {
        return (
          <div key={user.id}>
            <p>
              <span>{user.name}</span> <br />
              <span>{user.email}</span>
            </p>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return { props: { users: data } };
}
