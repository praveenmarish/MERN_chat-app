// material-ui
import { Container } from '@mui/material';
import { Form, Formik } from 'formik';
import { FormField, MuiButton, MuiLable } from './FormComponents';
import * as Yup from 'yup'
import { Request } from 'api/server/main';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import axios from "axios";
import { Router, useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate()

    const { mutate: login } = useMutation(async (values: main.Form) => {
        const res = await Request("userLogin", values)
        return res
    },
        {
            onSuccess: async (data) => { console.log(data) },
            onError: (err) => {
                seterror((err as any).response.data.error)
            },
        }
    );

    const onSubmit = (
        values: main.Form,
    ) => {
        login(values)
    }

    return (
        <Container maxWidth="sm" sx={{ backgroundColor: "white", height: "100%", borderRadius: "10px", position: "relative" }}>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={LoginValidation}
                onSubmit={onSubmit}
            >
                {({
                    handleSubmit,
                }) => (
                    <Container component={Form} onSubmit={handleSubmit} sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", display: "flex", flexDirection: "column" }} >
                        <FormField name="username" type="text" />
                        <FormField name="password" type="password" />
                        <MuiButton sx={{ alignSelf: "center" }} />
                        <MuiLable value={error} sx={{ color: (theme) => theme.palette.primary.dark }} />
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