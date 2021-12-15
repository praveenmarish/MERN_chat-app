import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export const Provider = ({ children }: Provider.Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export declare namespace Provider {
    export interface Props {
        children: React.ReactNode;
    }
}