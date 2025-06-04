import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // createServerClient() を呼び出してから
  // supabase.auth.getUser() を実行するまでの間には、
  // 何もコードを入れないでください！
  //
  // もしこの間に余計な処理を入れてしまうと、
  // 「ログイン中なのに勝手にログアウトされる」といった
  // 不具合が起きても原因がとても分かりにくくなります。

  // 【重要】この auth.getUser() は絶対に削除しないでください！

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (
    !user &&
    !request.nextUrl.pathname.startsWith("/signin") &&
    !request.nextUrl.pathname.startsWith("/auth")
  ) {
    // ユーザーが存在しない場合（＝未ログインのとき）は、
    // ログインページへリダイレクト（強制的に移動）させることで対応する可能性があります。
    const url = request.nextUrl.clone();
    url.pathname = "/signin";
    return NextResponse.redirect(url);
  }

  // 【重要】必ず supabaseResponse をそのまま return（返却）してください。
  // もし、自分で新しい NextResponse オブジェクトを作る場合は、以下の手順を守ってください：

  // 1. 必ず request オブジェクトを渡して生成すること
  //    例：const myNewResponse = NextResponse.next({ request })

  // 2. supabaseResponse に入っているクッキー情報をすべて myNewResponse にコピーすること
  //    例：myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())

  // 3. 必要に応じて myNewResponse を変更してもOKですが、クッキーの内容は変更しないでください！

  // 4. 最後に return するのは、supabaseResponse ではなく myNewResponse にしてください
  //    return myNewResponse

  // これらを守らないと、ブラウザとサーバー側のセッション情報（ログイン状態など）がズレてしまい、
  // ユーザーが勝手にログアウトさせられるなどの不具合が発生します！

  return supabaseResponse;
}
