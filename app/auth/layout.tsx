import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "calc(100vh - 120px)",
          background: "#0a0014",
          fontFamily: "TrapBold",
        }}
      >
        {children}
      </main>

      <Footer />
    </>
  );
}
