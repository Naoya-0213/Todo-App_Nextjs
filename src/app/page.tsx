import getSession from "./components/auth/getSession";

// メインページ
export default async function Home() {
  const session = await getSession();

  return (
    <div className="text-center text-xl">
      {/* ここにTODOリスト作成予定！ */}
      {session ? <div>ログイン済</div> : <div>未ログイン</div>}
    </div>
  );
}
