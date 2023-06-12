import { Box, FormHelperText, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Stack } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AnimateButton from '../../../components/@extended/AnimateButton';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import { AccountCircle } from '@mui/icons-material';

const UserForm = ({ onSubmitForm, role_options, loading, initial_role = '', initialValues = null }) => {
    const [role, setRole] = useState(initial_role);
    const [role_error, setRoleError] = useState(false);
    const [country_code, setCountryConde] = useState('255');
    console.log('Initial Values', initialValues);

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
                                    <InputLabel htmlFor="bootstrap">Phone Number</InputLabel>
                                    <OutlinedInput
                                        id="email-login"
                                        type="number"
                                        value={values.cellphone}
                                        name="cellphone"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="eg. 7111..."
                                        fullWidth
                                        style={{ padding: 0 }}
                                        startAdornment={
                                            <InputAdornment style={{ padding: 0 }} position="start">
                                                {' '}
                                                <Select
                                                    labelId="demo-simple-select-helper-label"
                                                    id="demo-simple-select-helper"
                                                    value={country_code}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={'255'}>+255</MenuItem>
                                                </Select>
                                            </InputAdornment>
                                        }
                                        error={Boolean(touched.cellphone && errors.cellphone)}
                                    />
                                    {touched.cellphone && errors.cellphone && (
                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                            {errors.cellphone}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
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
                        <Grid container spacing={3} mb={3}>
                            <Grid item xs={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="bootstrap">Role</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-disabled-label"
                                        id="demo-simple-select-disabled"
                                        value={role}
                                        onChange={(e) => {
                                            setRoleError(false);
                                            setRole(e.target.value);
                                        }}
                                        error={Boolean(role_error)}
                                    >
                                        {role_options.map((val, idx) => (
                                            <MenuItem key={idx} value={val.id}>
                                                {val.title}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    {role_error && (
                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                            Select Role
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            {errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Grid>
                            )}
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

export default UserForm;
