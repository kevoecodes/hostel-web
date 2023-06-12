import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import { Grid, Skeleton, Stack } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import roleManager from '../functions/RoleManager';
import { Result } from 'antd';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

// ===============================|| COMPONENT - SKELETON ||=============================== //

const PermissionProvider = ({ children, permission, unauthorized_page = false, withOtherDeps = () => true }) => {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/', { replace: true });
    };
    return (
        <>
            {roleManager.has_permission(permission) && withOtherDeps() ? (
                children
            ) : unauthorized_page ? (
                <Result
                    status="403"
                    title="403"
                    subTitle="Sorry, you are not authorized to access this page."
                    extra={
                        <Button onClick={navigateHome} type="primary">
                            Back Home
                        </Button>
                    }
                />
            ) : (
                <> </>
            )}
        </>
    );
};

PermissionProvider.propTypes = {
    children: PropTypes.node
};

export default PermissionProvider;
