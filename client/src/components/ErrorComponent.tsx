import { FallbackProps } from "react-error-boundary";
import { Request } from 'api/server/main';

export const onErrorFn = (error: Error, info: { componentStack: string }) => {
    console.log(error, info)
    if (error.message === 'Token not verified' && localStorage.getItem("refreshToken") !== null) {
        Request("refresh", { refreshToken: localStorage.getItem("refreshToken") }).then((data) => {
            localStorage.setItem("accessToken", data.data.accessToken);
            window.location.reload();
        }).catch((err) => {
            console.log(err)
            localStorage.clear();
            window.location.reload();
        })
    }
}

const ErrorComponent = ({ error }: FallbackProps) => {
    console.log(error)
    return <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
}

export default ErrorComponent