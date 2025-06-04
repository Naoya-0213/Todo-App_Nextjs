// supabaseとのセッション取得用

import { createClient } from "@/app/utils/supabase/supabase-server";
import type { Database } from "@/lib/database.types";

// 認証状態の監視
export default async function getSession() {
  const supabase = await createClient<Database>();

  // セッションの取得（session はsupabaseでのセッション情報）
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return { session, supabase };
}