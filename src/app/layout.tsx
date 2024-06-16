import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { StyledRoot } from "./StyledRoot";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ESK IT",
  description:
    "ESK IT - No IT background or college degree required, change your career into: You will be able to apply for the following jobs after training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <StyledRoot>
            <Header />
            {children}
            <Footer />
          </StyledRoot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
