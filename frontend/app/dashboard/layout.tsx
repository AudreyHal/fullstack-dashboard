"use client";
import TopBar from "@/src/components/layout/TopBar";
import withAuthLayout from "@/src/hocs/withAuthLayout";

import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TopBar />
      {children}
    </div>
  );
};

export default withAuthLayout(Layout);
