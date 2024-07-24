"use client";
import withAuthenticatedLayout from "@/src/hocs/withAuthenticatedLayout";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default withAuthenticatedLayout(Layout);
