import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply Now - ESK IT",
  description: "ESK IT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
