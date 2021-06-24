import Navbar from "./Navbar";

export default function OpenLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
