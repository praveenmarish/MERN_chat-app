import { Button, ButtonProps, IconButton, TextField, Typography, TypographyProps, TextFieldProps as MuiTextFieldProps } from "@mui/material"
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from "react";
import { Field as FormicField } from "formik";
import { TextFieldProps, fieldToTextField } from 'formik-mui'

export const FormField = ({ ...props }: Partial<MuiTextFieldProps>) => {
    return (<>
        <MuiLable value={props.name as string} sx={{ marginBottom: "10px" }} />
        <FormicField
            component={props.type === "password" ? MuiPasswordField : MuiTextField}
            {...props}
        />
    </>
    )
}
export const MuiTextField = ({ ...props }: TextFieldProps) => (
    <TextField
        sx={{ marginBottom: "15px" }}
        variant="outlined"
        fullWidth
        {...fieldToTextField(props)}
    />
);

export const MuiLable = ({ value, ...props }: Field.Value & TypographyProps) => (
    <Typography {...props} sx={{ textAlign: "initial" }}>
        {value}
    </Typography>
);

export const MuiPasswordField = ({ ...props }: TextFieldProps) => {
    const [visible, setVisible] = useState(false);
    return (
        <TextField
            {...fieldToTextField(props)}
            sx={{
                marginBottom: "15px",
                "& input::-ms-reveal, & input::-ms-clear": {
                    display: "none"
                }
            }}
            variant="outlined"
            fullWidth
            type={visible ? "text" : "password"}
            InputProps={{
                endAdornment: (
                    <IconButton onClick={() => setVisible(!visible)}>
                        {visible ? (
                            <VisibilityOff fontSize="inherit" />
                        ) : (
                            <Visibility fontSize="inherit" />
                        )}
                    </IconButton>
                ),
            }}
        />
    );
}

export const MuiButton = ({ ...props }: ButtonProps) => {
    return (
        <Button {...props} type="submit">
            Submit
        </Button>
    )
}

export declare namespace Field {
    export interface Value {
        value: string
    }
    export interface Props {
        name?: string;
        type?: string
    }
}