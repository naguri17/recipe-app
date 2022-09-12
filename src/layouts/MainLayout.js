import Header from "./Header";

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className="p-5 pt-[70px]">{children}</div>
    </>
  );
}
