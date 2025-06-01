// エラー表示

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          エラーが発生しました
        </h1>
        <p className="text-gray-700 mb-6">
          ログインに失敗したか、アクセス権限がありません。
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded transition"
        >
          ホームに戻る
        </a>
      </div>
    </div>
  );
}
