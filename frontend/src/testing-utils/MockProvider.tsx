import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

interface MockProviderProps {
  children: ReactNode;
}

const MockProvider = ({ children }: MockProviderProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default MockProvider;
