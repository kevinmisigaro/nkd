import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-950 relative">
          <Navbar />
         <main>
         {children}
         </main>
         <Footer />
        </div>
      </body>
    </html>
  );
}
