import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import { Grid, Skeleton, Stack } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import { Card, Image } from 'antd';

// ===============================|| COMPONENT - SKELETON ||=============================== //

export const ComponentSkeleton = ({ children, isLoading }) => {
    // const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        // setLoading(false);
    }, []);

    const skeletonCard = (
        <MainCard
            title={<Skeleton sx={{ width: { xs: 120, md: 180 } }} />}
            secondary={<Skeleton animation="wave" variant="rectangular" width={24} height={24} />}
        >
            <Stack spacing={1}>
                <Skeleton />
                <Skeleton sx={{ height: 64 }} animation="wave" variant="rectangular" />
                <Skeleton />
                <Skeleton />
            </Stack>
        </MainCard>
    );

    return (
        <>
            {isLoading && (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {skeletonCard}
                    </Grid>
                </Grid>
            )}
            {!isLoading && children}
        </>
    );
};

ComponentSkeleton.propTypes = {
    children: PropTypes.node
};

export const TableListSkeleton = ({ children, isLoading }) => {
    return (
        <>
            {isLoading && (
                <Grid container spacing={3} p={3} mt={1}>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <Skeleton sx={{ height: 30 }} animation="wave" variant="rounded" />
                            <Skeleton sx={{ height: 30 }} animation="wave" variant="rounded" />
                            <Skeleton sx={{ height: 30 }} animation="wave" variant="rounded" />
                            <Skeleton sx={{ height: 30 }} animation="wave" variant="rounded" />
                            <Skeleton sx={{ height: 30 }} animation="wave" variant="rounded" />
                        </Stack>
                    </Grid>
                </Grid>
            )}
            {!isLoading && children}
        </>
    );
};

TableListSkeleton.propTypes = {
    children: PropTypes.node
};

export const AttachmentsSkeleton = ({ children, isLoading }) => {
    // const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        // setLoading(false);
    }, []);

    const skeletonCard = (
        <Card hoverable style={{ width: 140 }} cover={<Skeleton sx={{ width: { xs: 140, md: 140 }, height: 180 }} />}>
            <Skeleton />
        </Card>
    );

    return (
        <>
            {isLoading && (
                <Grid container mb={3} mt={1} alignItems={'center'} justifyContent={'flex-start'}>
                    <Grid item xs={2}>
                        {skeletonCard}
                    </Grid>
                    <Grid item xs={2}>
                        {skeletonCard}
                    </Grid>
                    <Grid item xs={2}>
                        {skeletonCard}
                    </Grid>
                    <Grid item xs={2}>
                        {skeletonCard}
                    </Grid>
                    <Grid item xs={2}>
                        {skeletonCard}
                    </Grid>
                    <Grid item xs={2}>
                        {skeletonCard}
                    </Grid>
                </Grid>
            )}
            {!isLoading && children}
        </>
    );
};

AttachmentsSkeleton.propTypes = {
    children: PropTypes.node
};
