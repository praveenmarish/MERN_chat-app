// material-ui
import { Container, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { FormField, MuiButton, MuiLable } from './FormComponents';
import * as Yup from "yup";
import { Request } from 'api/server/main';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary'

// ================================|| USERS ||================================ //

const RegisterValidation = Yup.object().shape({
    username: Yup.string().required("No user name"),
    password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    confirmPassword: Yup.string()
        .required("No password provided.")
        .oneOf([Yup.ref("password"), null], "Password doesn't match"),
})

const RegisterationForm = () => {
    const [error, seterror] = useState('')

    const handleError = useErrorHandler()
    const navigate = useNavigate()

    const { mutate: register } = useMutation(async (values: main.Form) => {
        const res = await Request("newUser", values)
        return res
    },
        {
            onSuccess: async (data) => {
                localStorage.setItem("accessToken", data.data.accessToken);
                localStorage.setItem("refreshToken", data.data.refreshToken);
                navigate('../chat')
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
    ) => {
        register(values)
    }

    return (
        <Container maxWidth="sm" sx={{ overflow: "auto", backgroundColor: "white", height: "100%", borderRadius: "10px", position: "relative" }}>
            <Formik
                initialValues={{ username: '', password: '', confirmPassword: '' }}
                validationSchema={RegisterValidation}
                onSubmit={onSubmit}
            >
                {({
                    handleSubmit,
                }) => (
                    <Container component={Form} onSubmit={handleSubmit} sx={{ textAlign: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} >
                        <FormField name="username" type="text" />
                        <FormField name="password" type="password" />
                        <FormField name="confirmPassword" type="password" />
                        <MuiButton sx={{ alignSelf: "center" }} />
                        <MuiLable value={error} sx={{ color: (theme) => theme.palette.primary.dark }} />
                        <Typography to="/" component={Link}
                            sx={{ marginTop: "10px", textDecoration: "none" }}>Back to login</Typography>
                    </Container>
                )}
            </Formik>
        </Container>
    );
};

export default RegisterationForm;

export declare namespace main {
    export interface Form {
        username: string;
        password: string;
        confirmPassword: string
    }
}