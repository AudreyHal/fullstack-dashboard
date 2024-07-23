"use client";
import "./globals.css";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import TopBar from "./components/layout/TopBar";

// Creates a react-query client
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Provides the client to the App to allow use of react-query hookds
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <body>
          <TopBar />
          {children}
        </body>
      </html>
    </QueryClientProvider>
  );
}
