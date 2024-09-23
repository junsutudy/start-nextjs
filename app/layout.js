// wrapper class

import "./globals.css";

export const metadata = {
  title: "JunJaBoy",
  description: "Your first NextJS app!",
};

// content is injected here, named as childeren
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
