import getSession from "./components/auth/getSession";

// メインページ
export default async function Home() {
  const { supabase } = await getSession();

  // セッションの取得
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="text-center text-xl">
      {/* ここにTODOリスト作成予定！ */}
      {session ? <div>ログイン済</div> : <div>未ログイン</div>}
    </div>
  );
}
