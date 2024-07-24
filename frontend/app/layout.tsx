"use client";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TopBar from "../src/components/layout/TopBar";
import ToastProvider from "@/src/providers/Toast.provider";

// Creates a react-query client
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Provides the client to the App to allow use of react-query hooks 
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <body>
        <ToastProvider>
          {children}
          </ToastProvider>
        </body>
      </html>
    </QueryClientProvider>

  );
}
