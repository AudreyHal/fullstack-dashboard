"use client";
import React from "react";
import Login from "./login/page";
import useRedirectBasePath from "@/src/hooks/useRedirectBasePath";

const App = () => {
  useRedirectBasePath()

  return <Login />;
};

export default App;
