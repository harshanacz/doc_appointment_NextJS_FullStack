import type { Metadata } from "next";
import "./globals.css";
import { reportWebVitals } from '../webVitals';

export const metadata: Metadata = {
  title: "EDoc Lanka",
  description: "Channel Your Doctor Online in Sri Lanka | Colombo | Kandy | Galle | Jaffna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.reportWebVitals = ${reportWebVitals.toString()}
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
