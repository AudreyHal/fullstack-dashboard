"use client";
import { getToken } from "@/src/utilities/Auth";
import { useRouter } from "next/navigation";
import * as React from "react";

const withAuthenticatedLayout = (WrappedComponent: any) => {
  const AuthenticateLayout = (props: any) => {
    const router = useRouter();
    const token = getToken();

    React.useEffect(() => {
      if (!token) {
        return router.push("/login");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    return <WrappedComponent {...props} />;
  };

  return AuthenticateLayout;
};

export default withAuthenticatedLayout;
