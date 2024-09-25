import postgres from "postgres";

let sql = postgres(process.env.DATABASE_URL || process.env.POSTGRES_URL!, {
  ssl: "allow",
});

export default async function Home() {
  // let todos = await sql`SELECT * FROM todos`;

  return (
    <main>
      <h1 className="sr-only">Todos</h1>
      {/* <AddForm /> */}
      <a href={"/testings"}>이동</a>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <DeleteForm id={todo.id} todo={todo.text} />
          </li>
        ))}
      </ul> */}
    </main>
  );
}
