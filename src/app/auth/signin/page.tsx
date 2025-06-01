// ログインページ実装
// use client側の components/login の読み込み

import { createClient } from "@/app/utils/supabase/supabase-server";
import type { Database } from "@/lib/database.types";
import { redirect } from "next/navigation";
import Signin from "@/app/components/signin/page";

// 認証状態の監視
export default async function signinPage() {
  const supabase = await createClient<Database>();

  // セッションの取得
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // 認証している場合、リダイレクト
  if (session) {
    redirect("/");
  }
  return <Signin />;
}
