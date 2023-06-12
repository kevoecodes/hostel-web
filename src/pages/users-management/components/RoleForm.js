import { Divider, FormHelperText, Grid, InputLabel, OutlinedInput, Stack } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import RolesPermissions from './roles-permissions';
import AnimateButton from '../../../components/@extended/AnimateButton';
import { LoadingButton } from '@mui/lab';
import snack from '../../../functions/snack';
import { useState } from 'react';
import { permissionsHandler } from '../../../functions/pemissions';

const RoleForm = ({ intialPermissions = [], onSubmitForm, loading, title = '' }) => {
    console.log(intialPermissions, intialPermissions.includes('1'));
    const [userCRUD_permissions, setUserCurdPermissions] = useState(
        permissionsHandler.userCRUD_permissions().map((item) => ({ ...item, checked: intialPermissions.includes(item.value) }))
    );
    const [blCRUD_permissions, setBlCrudPermissions] = useState(
        permissionsHandler.blCRUD_permissions().map((item) => ({ ...item, checked: intialPermissions.includes(item.value) }))
    );
    const [bl_chargesCRUD_permissions, setBlChargesCrudPermissions] = useState(
        permissionsHandler.bl_chargesCRUD_permissions().map((item) => ({ ...item, checked: intialPermissions.includes(item.value) }))
    );
    const [vouchersCRUD_permissions, setVouchersCrudPermissions] = useState(
        permissionsHandler.vouchersCRUD_permissions().map((item) => ({ ...item, checked: intialPermissions.includes(item.value) }))
    );
    const [float_requestCRUD_permissions, setFloatRequestCrudPermissions] = useState(
        permissionsHandler.floatRequestCRUD_permissions().map((item) => ({ ...item, checked: intialPermissions.includes(item.value) }))
    );

    const permissions = () => {
        const newArray = userCRUD_permissions.concat(
            blCRUD_permissions,
            bl_chargesCRUD_permissions,
            vouchersCRUD_permissions,
            float_requestCRUD_permissions
        );
        return newArray.filter((item) => item.checked === true).map((item) => item.value);
    };

    return (
        <>
            <Formik
                initialValues={{
                    title: title,
                    permissions: [],
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    title: Yup.string().max(255).required('Title is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    let permission = permissions();
                    if (permission.length == 0) {
                        snack.warning('Atleast one permission must be chosen');
                        return;
                    }
                    values.permissions = permission;
                    onSubmitForm(values);
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3} mb={3}>
                            <Grid item xs={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="bootstrap">Role Title</InputLabel>
                                    <OutlinedInput
                                        id="email-login"
                                        type="text"
                                        value={values.title}
                                        name="title"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="eg. Admin"
                                        fullWidth
                                        error={Boolean(touched.title && errors.title)}
                                    />
                                    {touched.title && errors.title && (
                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                            {errors.title}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                        </Grid>
                        <Divider light={true} variant={'fullWidth'} mb={3}>
                            Permissions Manager
                        </Divider>
                        <Grid container spacing={3} mb={3} p={3}>
                            <Grid item xs={3}>
                                <RolesPermissions
                                    title={'Users CRUD'}
                                    permissions={userCRUD_permissions}
                                    onChangePermissionHandler={setUserCurdPermissions}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <RolesPermissions
                                    title={'Bls CRUD'}
                                    permissions={blCRUD_permissions}
                                    onChangePermissionHandler={setBlCrudPermissions}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <RolesPermissions
                                    title={'Bl Charges CRUD'}
                                    permissions={bl_chargesCRUD_permissions}
                                    onChangePermissionHandler={setBlChargesCrudPermissions}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <RolesPermissions
                                    title={'Vouchers CRUD'}
                                    permissions={vouchersCRUD_permissions}
                                    onChangePermissionHandler={setVouchersCrudPermissions}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <RolesPermissions
                                    title={'Float Request CRUD'}
                                    permissions={float_requestCRUD_permissions}
                                    onChangePermissionHandler={setFloatRequestCrudPermissions}
                                />
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" mg={3}>
                            <Grid item xs={6}>
                                <AnimateButton>
                                    <LoadingButton
                                        disableElevation
                                        loading={loading}
                                        disabled={loading}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
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

export default RoleForm;
