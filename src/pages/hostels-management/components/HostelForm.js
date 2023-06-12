import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormHelperText, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Stack } from '@mui/material';
import AnimateButton from '../../../components/@extended/AnimateButton';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';

const HostelForm = ({ initialValues = null }) => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Formik
                initialValues={
                    initialValues === null
                        ? {
                              first_name: '',
                              last_name: '',
                              cellphone: '',
                              email: '',
                              role: ''
                          }
                        : initialValues
                }
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    first_name: Yup.string().max(255).required('First Name is required'),
                    last_name: Yup.string().max(255).required('Last Name is required'),
                    cellphone: Yup.string().max(9).min(9).required('Phone Number is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    if (role !== '') {
                        values.role = role;
                        values.cellphone = `255${values.cellphone}`;
                        onSubmitForm(values);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form
                        noValidate
                        onSubmit={(e) => {
                            if (role === '') {
                                setRoleError(true);
                            } else {
                                setRoleError(false);
                            }
                            handleSubmit(e);
                        }}
                    >
                        <Grid container spacing={3} mb={3}>
                            <Grid item xs={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="bootstrap">First Name</InputLabel>
                                    <OutlinedInput
                                        id="email-login"
                                        type="text"
                                        value={values.first_name}
                                        name="first_name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="eg. John"
                                        fullWidth
                                        error={Boolean(touched.first_name && errors.first_name)}
                                    />
                                    {touched.first_name && errors.first_name && (
                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                            {errors.first_name}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="bootstrap">Last Name</InputLabel>
                                    <OutlinedInput
                                        id="email-login"
                                        type="text"
                                        value={values.last_name}
                                        name="last_name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="eg. Doe"
                                        fullWidth
                                        error={Boolean(touched.last_name && errors.last_name)}
                                    />
                                    {touched.last_name && errors.last_name && (
                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                            {errors.last_name}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} mb={3}>
                            <Grid item xs={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="bootstrap">Email Address</InputLabel>
                                    <OutlinedInput
                                        id="email-login"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="eg. example@gmail.com"
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" mg={3}>
                            <Grid item xs={6}>
                                <AnimateButton>
                                    <LoadingButton
                                        disableElevation
                                        disabled={loading}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        loading={loading}
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

export default HostelForm;
