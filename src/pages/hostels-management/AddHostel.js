import MainCard from '../../components/MainCard';
import { Box } from '@mui/material';
import UserForm from '../users-management/components/UserForm';
import React from 'react';
import HostelForm from './components/HostelForm';

const AddHostel = () => {
    return (
        <>
            <MainCard title={'Creating Hostel'} content={false} border={false} boxShadow>
                <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
                    <HostelForm />
                </Box>
            </MainCard>
        </>
    );
};

export default AddHostel;
