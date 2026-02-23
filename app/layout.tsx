import type { Metadata } from "next";
import { PrimeReactProvider } from 'primereact/api';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import "./globals.css";
import { MainMenu } from "@/components/main-menu"

export const metadata: Metadata = {
  title: "LetsFlow demo",
  description: "Demo application for LetsFlow workflow engine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png"/>
        <title>{metadata.title as string}</title>
      </head>
      <body>
        <PrimeReactProvider>
          <div className="flex flex-column min-h-screen surface-ground text-color">
            <header className="shadow-2">
              <MainMenu />
            </header>

            <main className="flex-grow-1 p-4">
              <div className="mx-auto p-4 border-round shadow-2 surface-card" style={{ maxWidth: "1024px" }}>
                {children}
              </div>
            </main>

            <footer className="text-center text-sm p-3 text-500">
              © {new Date().getFullYear()} LetsFlow demo application
            </footer>
          </div>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
