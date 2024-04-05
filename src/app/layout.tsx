import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/NavBar";
import { CSPostHogProvider } from "@/utils/providers/posthog";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Krowd</title>
        <meta property="og:url" content="https://www.partykrowd.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Krowd" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:description" content="Know where the party is." />
        <meta
          name="image"
          property="og:image"
          content="/assets/images/projectkrowdlogo.png"
        />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="50" />
        <meta property="og:image:height" content="50" />
        <meta property="og:image:alt" content="logo" />
        <meta name="image" content="/assets/images/projectkrowdlogo.png" />
        <meta name="description" content="Know where the party is." />
        <meta
          name="twitter:image"
          content="/assets/images/projectkrowdlogo.png"
        />
      </head>
      <CSPostHogProvider>
        <body>
          <div className="bg-gray-950 relative">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
