// material-ui
import { Container } from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';
import { FormField, MuiButton, MuiLable } from './FormComponents';
import * as Yup from "yup";

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

    const onSubmit = (
        values: main.Form,
        formikHelpers: FormikHelpers<main.Form>
    ) => {
        console.log(values)
        console.log(formikHelpers)
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
                    <Container component={Form} onSubmit={handleSubmit} sx={{ height: "100%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", display: "flex", flexDirection: "column" }} >
                        <FormField name="username" type="text" />
                        <FormField name="password" type="password" />
                        <FormField name="confirmPassword" type="password" />
                        <MuiButton sx={{ alignSelf: "center" }} />
                        <MuiLable value="Error" sx={{ color: (theme) => theme.palette.primary.dark }} />
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