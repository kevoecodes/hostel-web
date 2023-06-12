import { useNavigate, useParams } from 'react-router';
import UserForm from './components/UserForm';
import { useEffect, useState } from 'react';
import { formatPhoneNumber, getRoleOptions } from '../../functions/common';
import { editUserRequest, getUserByIDRequest } from '../../utils/API';
import snack from '../../functions/snack';
import MainCard from '../../components/MainCard';
import { Box } from '@mui/material';

const EditUser = () => {
    const [role_options, setRoleOptions] = useState([]);
    const [initialValues, setInitialValues] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page_loading, setPageLoading] = useState(true);
    const params = useParams();
    const navigate = useNavigate();

    const editUser = (values) => {
        editUserRequest(params.user_id, values)
            .then((res) => {
                console.log(res);
                snack.success('User details edited successfully');
                navigate('/users', { replace: true });
            })
            .catch((err) => {
                console.log(err);
                snack.error('Failed to edit user details');
            });
    };

    const getUser = () => {
        getUserByIDRequest(params.user_id)
            .then((res) => {
                setInitialValues({
                    first_name: res.first_name,
                    last_name: res.last_name,
                    cellphone: formatPhoneNumber(res.cellphone).phoneNumber,
                    email: res.email,
                    role: res.role !== null ? res.role.id : ''
                });
                setPageLoading(false);
            })
            .catch((err) => {
                console.log(err);
                snack.error('Failed to load user details');
                navigate('/users', { replace: true });
            });
    };

    useEffect(() => {
        getRoleOptions(setRoleOptions);
        getUser();
    }, []);

    return (
        <>
            <MainCard title={'Editing a User'} content={false} border={false} boxShadow>
                <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
                    {!page_loading && (
                        <UserForm
                            initialValues={initialValues}
                            role_options={role_options}
                            onSubmitForm={(values) => editUser(values)}
                            initial_role={initialValues.role}
                            loading={loading}
                        />
                    )}
                </Box>
            </MainCard>
        </>
    );
};

export default EditUser;
