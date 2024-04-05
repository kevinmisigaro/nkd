import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/NavBar";
import { posthog } from "posthog-js";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, { api_host: 'https://app.posthog.com' })

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
