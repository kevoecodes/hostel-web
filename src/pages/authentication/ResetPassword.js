import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthWrapper from './AuthWrapper';
import ResetPasswordForm from './auth-forms/ResetPasswordForm';

// ================================|| LOGIN ||================================ //

const ResetPasword = () => (
    <AuthWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Reset Password</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <ResetPasswordForm />
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default ResetPasword;
