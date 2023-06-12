import { useEffect, useState } from 'react';
import snack from '../../functions/snack';
import { useNavigate, useParams } from 'react-router';
import RoleForm from './components/RoleForm';
import { editRoleRequest, getRoleByIdRequest } from '../../utils/API';
import { Box } from '@mui/material';
import MainCard from '../../components/MainCard';

const EditRole = () => {
    const [loading, setLoading] = useState(false);
    const [page_loading, setPageLoading] = useState(true);
    const [initialValues, setInitialValues] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    const editRole = (values) => {
        setLoading(true);
        editRoleRequest(params.role_id, values)
            .then((res) => {
                console.log(res);
                snack.success('Role details edited successfully');
                navigate('/roles', { replace: true });
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                snack.error('Failed to edit role details');
            });
    };

    const getRoleDetails = () => {
        getRoleByIdRequest(params.role_id)
            .then((res) => {
                console.log(res);
                setInitialValues({
                    title: res.title,
                    permissions: res.permissions
                });
                setPageLoading(false);
            })
            .catch((err) => {
                console.log(err);
                snack.error('Failed to load role details');
                navigate('/roles', { replace: true });
            });
    };

    useEffect(() => {
        getRoleDetails();
    }, []);

    return (
        <>
            <MainCard title={'Adding role'} content={false} border={false} boxShadow>
                <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
                    {!page_loading && (
                        <RoleForm
                            onSubmitForm={(values) => editRole(values)}
                            loading={loading}
                            intialPermissions={initialValues.permissions}
                            title={initialValues.title}
                        />
                    )}
                </Box>
            </MainCard>
        </>
    );
};

export default EditRole;
