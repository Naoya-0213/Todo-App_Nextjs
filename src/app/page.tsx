import { createClient } from "@/app/utils/supabase/supabase-server";
import { Database } from "@/lib/database.types";

// メインページ
export default async function Home() {
  const supabase = await createClient<Database>();

  // セッションに取得
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="text-center text-xl">
      {session ? <div>ログイン済</div> : <div>未ログイン</div>}
    </div>
  );
}
