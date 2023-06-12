import { Box } from '@mui/material';
import { useState } from 'react';
import { createRoleRequest } from '../../utils/API';
import snack from '../../functions/snack';
import { useNavigate } from 'react-router';
import RoleForm from './components/RoleForm';
import MainCard from '../../components/MainCard';

const AddRole = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const createRole = (values) => {
        createRoleRequest(values)
            .then((res) => {
                console.log('Response', res);
                snack.success('Role was successfully added');
                navigate('/roles', { replace: true });
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
                snack.error('Failed to add Role');
            });
    };

    return (
        <>
            <MainCard title={'Adding role'} content={false} border={false} boxShadow>
                <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
                    <RoleForm onSubmitForm={(values) => createRole(values)} loading={loading} />
                </Box>
            </MainCard>
        </>
    );
};

export default AddRole;
