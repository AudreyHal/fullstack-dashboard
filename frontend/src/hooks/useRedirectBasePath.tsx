import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getToken } from "@/src/utilities/Auth";

const useRedirectBasePath = () => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleAuthRedirect = () => {
      const token = getToken();
      if (!token && pathname === "/") {
        router.replace("/login");
      } else if (token && pathname === "/") {
        router.replace("/dashboard");
      }
    };

    handleAuthRedirect();
  }, [pathname, router]);
};

export default useRedirectBasePath;
