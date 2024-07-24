"use client";
import React, { useEffect } from "react";
import Login from "./login/page";
import { getToken } from "@/src/utilities/Auth";
import { useRouter, usePathname } from "next/navigation";

const App = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleAuthRedirect = () => {
    const token = getToken();
    if (!token && pathname === "/") {
      router.replace("/login");
    } else if (token && pathname === "/") {
      router.replace("/dashboard");
    }
  };
  useEffect(() => {
    handleAuthRedirect();
  }, [router]);

  return <Login />;
};

export default App;
