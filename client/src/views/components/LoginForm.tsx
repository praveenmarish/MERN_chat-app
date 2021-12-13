// material-ui
import { Container } from '@mui/material';
import { Form, Formik } from 'formik';
import { FormField, MuiButton } from './FormComponents';

// ================================|| USERS ||================================ //

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