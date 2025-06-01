// 全体読み込み用！ローディング
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center">
      <div className="h-7 w-7 animate-spin rounded-full border-2 border-sky-500 border-t-transparent" />
    </div>
  );
};

export default LoadingSpinner;
