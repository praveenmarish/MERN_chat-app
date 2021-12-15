import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export const Provider = ({ children }: Providers.Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export declare namespace Providers {
    export interface Props {
        children: React.ReactNode;
    }
}