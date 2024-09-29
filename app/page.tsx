export default async function Home() {
  return (
    <main>
      <div>
        <a href={"/testings"}>서스펜스 적용된 페이지</a>
      </div>
      <br />
      <div>
        <a href={"/nonSuspense"}>서스펜스 없는 페이지</a>
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
      <br />
      <div>
        <a href={"/parallelPage"}>parallel 라우트</a>
      </div>
    </main>
  );
}
