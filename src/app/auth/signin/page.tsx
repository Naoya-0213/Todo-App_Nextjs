// ログインページ実装
// use client側の components/login の読み込み

import { redirect } from "next/navigation";
import Signin from "@/app/components/signin/page";
import getSession from "@/app/components/auth/getSession";

// 認証状態の監視
export default async function signinPage() {
  const session = await getSession();

  // 認証している場合、リダイレクト
  if (session) {
    redirect("/");
  }

  return <Signin />;
}
