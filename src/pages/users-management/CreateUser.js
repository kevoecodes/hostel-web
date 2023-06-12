import * as Yup from 'yup';
import { Box, FormHelperText, Grid, InputLabel, MenuItem, OutlinedInput, Select, Stack } from '@mui/material';
import AnimateButton from '../../components/@extended/AnimateButton';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import MainCard from '../../components/MainCard';
import { LoadingButton } from '@mui/lab';
import { getRolesRequest, registerUserRequest } from '../../utils/API';
import snack from '../../functions/snack';
import { useNavigate } from 'react-router';
import UserForm from './components/UserForm';
import { getRoleOptions } from '../../functions/common';

const CreateUser = () => {
    const [checked, setChecked] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [role, setRole] = React.useState('');
    const [roles_options, setRoleOptions] = React.useState([]);
    const [role_error, setRoleError] = React.useState(false);

    const [showPassword, setShowPassword] = React.useState(false);

    const navigate = useNavigate();
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const createUser = (values) => {
        setLoading(true);
        registerUserRequest(values)
            .then((res) => {
                console.log(res);
                setLoading(false);
                snack.success('User Created successfully');
                navigate('/users', { replace: true });
            })
            .catch((err) => {
                console.log(err);
                snack.error('Failed to create user');
                setLoading(false);
            });
    };

    useEffect(() => {
        getRoleOptions(setRoleOptions);
    }, []);

    return (
        <>
            <MainCard title={'Creating a User'} content={false} border={false} boxShadow>
                <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
                    <UserForm role_options={roles_options} onSubmitForm={(values) => createUser(values)} loading={loading} />
                </Box>
            </MainCard>
        </>
    );
};

export default CreateUser;
