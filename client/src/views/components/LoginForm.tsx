// material-ui
import { Container, Typography } from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';
import { FormField, MuiButton, MuiLable } from './FormComponents';
import * as Yup from 'yup'
import { Request } from 'api/server/main';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary'

// ================================|| USERS ||================================ //

const LoginValidation = Yup.object().shape({
    username: Yup.string().required("No user name"),
    password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
})

const LoginForm = () => {
    const [error, seterror] = useState('')

    const handleError = useErrorHandler()
    const navigate = useNavigate()

    const { mutate: login } = useMutation(async (values: main.Form) => {
        const res = await Request("userLogin", values)
        return res
    },
        {
            onSuccess: async (data) => {
                localStorage.setItem("accessToken", data.data.accessToken);
                localStorage.setItem("refreshToken", data.data.refreshToken);
                navigate('./chat')
            },
            onError: (err) => {
                if ((err as any).response) {
                    seterror((err as any).response.data.error)
                } else {
                    handleError(Error(err as any))
                }
            },
        }
    );

    const onSubmit = (
        values: main.Form,
        formikHelpers: FormikHelpers<main.Form>
    ) => {
        login(values)
        formikHelpers.setSubmitting(false)
    }

    return (
        <Container maxWidth="sm" sx={{ overflow: "auto", backgroundColor: "white", height: "100%", borderRadius: "10px", position: "relative" }}>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={LoginValidation}
                onSubmit={onSubmit}
            >
                {({
                    handleSubmit,
                }) => (
                    <Container component={Form} onSubmit={handleSubmit} sx={{ textAlign: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} >
                        <FormField name="username" type="text" />
                        <FormField name="password" type="password" />
                        <MuiButton sx={{ alignSelf: "center" }} />
                        <MuiLable value={error} sx={{ color: (theme) => theme.palette.primary.dark }} />
                        <Typography to="register" component={Link}
                            sx={{ marginTop: "10px", textDecoration: "none" }}>Create an Account</Typography>
                    </Container>
                )}
            </Formik>
        </Container>
    );
};

export default LoginForm;


export declare namespace main {
    export interface Form {
        username: string;
        password: string;
    }
}