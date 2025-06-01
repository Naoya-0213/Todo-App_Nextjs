// サインインページのクライアント側の処理

import { signin, signup } from "./action";
import ErrorPage from "../../error/page";
import { z } from "zod";

// zodの指定　入力データの検証およびバリデーション
const schema = z.object({
  email: z.string().email({ message: "メールアドレスの形式ではありません" }),
  password: z.string().min(6, { message: "6文字以上入力する必要があります" }),
});

// サインインページ
export default function Signin() {
  // react-hook-form連携

  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={signin}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
    </div>
  );
}
