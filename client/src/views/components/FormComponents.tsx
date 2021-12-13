import { Button, ButtonProps, IconButton, TextField, TextFieldProps, Typography, TypographyProps } from "@mui/material"
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from "react";

export const FormField = ({ name, type }: Field.Props) => {
    return (<>
        <MuiLable value={name} sx={{ marginBottom: "10px" }} />
        {type === "password" ?
            <MuiPasswordField value={type} sx={{ marginBottom: "15px" }} /> : <MuiTextField sx={{ marginBottom: "15px" }} />}
    </>
    )
}
export const MuiTextField = ({ ...props }: TextFieldProps) => (
    <TextField
        {...props}
        variant="outlined"
        fullWidth
    />
);

export const MuiLable = ({ value, ...props }: Field.Value & TypographyProps) => (
    <Typography {...props}>
        {value}
    </Typography>
);

export const MuiPasswordField = ({ value, sx, ...props }: Field.Value & TextFieldProps) => {
    const [visible, setVisible] = useState(false);
    return (
        <TextField
            {...props}
            sx={{
                ...sx,
                "& input::-ms-reveal, & input::-ms-clear": {
                    display: "none"
                }
            }}
            variant="outlined"
            fullWidth
            type={visible ? "text" : value}
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
        name: string;
        type: string
    }
}