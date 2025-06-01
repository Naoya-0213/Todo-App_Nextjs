// supabaseからの情報取得用、ナビゲーションに渡す

"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "../../lib/database.types";
import { Navigation } from "./navigation";

// 認証状態の監視
export const SupabaseLisner = async () => {};
