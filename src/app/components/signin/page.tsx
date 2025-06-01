import { signin, signup } from "./action";

export default function Signin() {
  return (
    <div>
      <div>hello!</div>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={signin}>sign in</button>
        <button formAction={signup}>Sign up</button>
      </form>
    </div>
  );
}
