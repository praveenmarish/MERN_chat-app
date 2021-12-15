// material-ui
import { Container } from '@mui/material';
import { Form, Formik } from 'formik';
import { FormField, MuiButton } from './FormComponents';
import * as Yup from "yup";

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

    return (
        <Container maxWidth="sm" sx={{ backgroundColor: "white", height: "100%", borderRadius: "10px", position: "relative" }}>
            <Formik
                initialValues={{ username: '', password: '' }}
                validate={values => {
                    var errors = { username: "" };
                    if (!values.username) {
                        errors.username = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <Container component={Form} onSubmit={handleSubmit} sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", display: "flex", flexDirection: "column" }} >
                        <FormField name="User Name" type="text" />
                        <FormField name="Password" type="password" />
                        <MuiButton sx={{ alignSelf: "center" }} />
                    </Container>
                )}
            </Formik>
        </Container>
    );
};

export default LoginForm;