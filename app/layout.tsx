import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://navaneeth-dev.vercel.app"),

	title:"Navaneeth",
	authors: {
		name: "navaneeth",
	},

	description:
		"Based in india , Im a fullstack developer passionate about building modern web applications that users love",
	openGraph: {
		title: "Navaneeth",
		description:
			"Based in india , Im a fullstack developer passionate about building modern web applications that users love",
		url: "https://navaneeth-dev.vercel.app",
		siteName: "Navaneeth.dev",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily coding", "navaneeth", "Full stack developer","indian developer","kerala","Navaneeth.dev"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={spaceGrotesk.className}>  <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
