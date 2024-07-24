"use client";
import { getToken } from "@/src/utilities/Auth";
import { useRouter } from "next/navigation";
import * as React from "react";

/**
 * HOC wrapper for unauthenticated pages
 * @param WrappedComponent 
 * @returns {component}
 */

const withoutAuthLayout = (WrappedComponent: any) => {
  const WithoutAuthenticateLayout = (props: any) => {
    const router = useRouter();
    const token = getToken();

    React.useEffect(() => {
      if (token) {
        return router.push("/dashboard");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    return <WrappedComponent {...props} />;
  };

  return WithoutAuthenticateLayout;
};

export default withoutAuthLayout;
