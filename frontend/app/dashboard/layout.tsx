"use client";
import TopBar from "@/src/components/layout/TopBar";
import withAuthenticatedLayout from "@/src/hocs/withAuthenticatedLayout";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TopBar />
      {children}
    </div>
  );
};

export default withAuthenticatedLayout(Layout);
