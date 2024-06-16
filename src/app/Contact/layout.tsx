import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - ESK IT",
  description:
    "ESK IT - No IT background or college degree required, change your career into: You will be able to apply for the following jobs after training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
