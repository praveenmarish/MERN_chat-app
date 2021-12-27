import { FallbackProps } from "react-error-boundary";
import { useMutation } from "react-query";
import { Request } from 'api/server/main';
import { useEffect } from "react";

const operation = (error: String) => {
    if (error === 'Token not verified' && localStorage.getItem("refreshToken") !== null) {
        Request("refresh", { refreshToken: localStorage.getItem("refreshToken") }).then((data) => {
            localStorage.setItem("accessToken", data.data.accessToken);
        }).catch((err) => {
            console.log(err)
            localStorage.clear();
        })
    }
}

const ErrorComponent = ({ error }: FallbackProps) => {
    console.log(error)
    useEffect(() => {
        operation(error.message)
    }, [])
    return <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
}

export default ErrorComponent