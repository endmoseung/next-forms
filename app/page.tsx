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
      <div>
        <a href={"/testings"}>테스팅으로 이동</a>
      </div>
      <br />
      <div>
        <a href={"/imagePage"}>이미지로 이동</a>
      </div>
      <br />
      <div>
        <a href={"/except"}>미들웨어 제외된 페이지로 이동</a>
      </div>
      <br />
      <div>
        <a href={"/serverAction"}>서버액션</a>
      </div>
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
