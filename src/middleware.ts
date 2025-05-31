import { type NextRequest } from "next/server";
import { updateSession } from "@/app/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * 次のようなパスで始まるリクエスト以外すべてに対して、
     * ミドルウェアを適用します：
     *
     * - _next/static → Next.jsが使う静的ファイル（JSなど）
     * - _next/image → 画像最適化用のファイル
     * - favicon.ico → ブラウザのアイコンファイル
     *
     * 必要に応じて、他にも除外したいパスがあればここに追加してOKです。
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
