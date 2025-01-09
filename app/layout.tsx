import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from "next";
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/app/theme';
import "./globals.css";

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
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
