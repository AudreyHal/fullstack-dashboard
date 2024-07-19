'use client'
import "./globals.css";
import TopBar from "./components/TopBar";
import Container from "@mui/material/Container";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body >
        <TopBar/>
        <Container maxWidth="lg" sx={{backgroundColor: 'white', borderRadius: 5, marginTop: 5}}> {children}</Container>
        </body>
    </html>
  );
}
