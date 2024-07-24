"use client";
import withoutAuthLayout from "@/src/hocs/withoutAuthLayout";

import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default withoutAuthLayout(Layout);
