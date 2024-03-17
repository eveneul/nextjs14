export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <span>여기는 어바웃 페이지입니다!!</span>
    </div>
  );
}
