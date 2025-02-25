import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { shellManager } from "@/shellManager";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
      console.log('rendering RootLayout');
  
      const sm = shellManager();
      const { theme, username } = sm; // this is too early to get the value
      const [ themeFunc, usernameFunc ] = await Promise.all([sm.getTheme?.(), sm.getUsername?.()]);
      console.log('rendered RootLayout');
  
  return (
    <html lang="en" data-theme={themeFunc}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <h3>This is Layout</h3>
            <ul>
            <li>username from getter: {usernameFunc}</li>
                <li>theme from getter: {themeFunc}</li>
                <li>username from property: {username}</li>
                <li>theme from getter: {theme}</li>
            </ul>

        </div>
        {children}
      </body>
    </html>
  );
}
