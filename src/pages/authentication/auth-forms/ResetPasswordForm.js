import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
    Checkbox,
    FormControlLabel,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { useNavigate, useParams } from 'react-router';
import { loginRequest, resetPasswordRequest } from '../../../utils/API';
import { LoadingButton } from '@mui/lab';
import { EyeInvisibleOutlined, EyeOutlined, LoginOutlined } from '@ant-design/icons';
import snack from '../../../functions/snack';
import roleManager from '../../../functions/RoleManager';

// ============================|| LOGIN ||============================ //

const ResetPasswordForm = () => {
    const [checked, setChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const params = useParams();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleClickShowRepeatPassword = () => {
        setShowRepeatPassword(!showRepeatPassword);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLogin = (values) => {
        setLoading(true);
        resetPasswordRequest(values.password, values.confirm_password, params.user_id)
            .then((response) => {
                snack.success('Password reset successfully');
                roleManager.getUser();
                navigate({ pathname: '/' }, { replace: true });
            })
            .catch((error) => {
                console.log(error);
                snack.error('Something went wrong');
                setLoading(false);
            });
    };

    return (
        <>
            <Formik
                initialValues={{
                    password: '',
                    confirm_password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    password: Yup.string().max(255).required('Password is required'),
                    confirm_password: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .max(255)
                        .required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    handleLogin(values);
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-login">Password</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.password && errors.password)}
                                        id="-password-login"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    size="large"
                                                >
                                                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        placeholder="Enter password"
                                    />
                                    {touched.password && errors.password && (
                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                            {errors.password}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="password-login">Repeat Password</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.confirm_password && errors.confirm_password)}
                                        id="-password-login"
                                        type={showRepeatPassword ? 'text' : 'password'}
                                        value={values.confirm_password}
                                        name="confirm_password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowRepeatPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    size="large"
                                                >
                                                    {showRepeatPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        placeholder="Enter password"
                                    />
                                    {touched.confirm_password && errors.confirm_password && (
                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                            {errors.confirm_password}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <AnimateButton>
                                    <LoadingButton
                                        loading={loading}
                                        disableElevation
                                        disabled={loading}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        // endIcon={<LoginOutlined />}
                                        loadingPosition="end"
                                    >
                                        Submit
                                    </LoadingButton>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default ResetPasswordForm;
