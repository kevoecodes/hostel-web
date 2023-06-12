import { useState } from 'react';

// material-ui
import { Grid, MenuItem, Stack, TextField, Typography } from '@mui/material';

// project import
import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// assets
import { DASHBOARD_OPTIONS } from '../../utils/constants';
import { currencyFormatter } from '../../functions/common';

// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// sales report status
const status = [
    {
        value: DASHBOARD_OPTIONS.TODAY,
        label: 'Today'
    },
    {
        value: DASHBOARD_OPTIONS.THIS_WEEK,
        label: 'This Week'
    },
    {
        value: DASHBOARD_OPTIONS.MONTHLY,
        label: 'Monthly'
    }
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardView = ({ data }) => {
    const [value, setValue] = useState(DASHBOARD_OPTIONS.MONTHLY);
    const [slot, setSlot] = useState('week');

    const stats = data.monthly;

    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Dashboard</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            id="standard-select-currency"
                            size="small"
                            select
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            sx={{ '& .MuiInputBase-input': { py: 0.5, fontSize: '0.875rem' } }}
                        >
                            {status.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Total Bill Of Loadings" count={stats.total_bls.toString()} percentage={59.3} extra="35,000" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce
                    title="Total Bill of Loading Charges"
                    count={currencyFormatter(stats.total_bills)}
                    percentage={70.5}
                    extra="8,900"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce
                    title="Total Vouchers"
                    count={currencyFormatter(stats.total_vouchers)}
                    percentage={27.4}
                    isLoss
                    color="warning"
                    extra="1,943"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce
                    title="Current Float"
                    count={currencyFormatter(data.current_float)}
                    percentage={27.4}
                    isLoss
                    color="warning"
                    extra="$20,395"
                />
            </Grid>
            {value !== DASHBOARD_OPTIONS.TODAY && (
                <Grid item xs={12}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Expense Report</Typography>
                        </Grid>
                    </Grid>
                    <MainCard sx={{ mt: 1.75 }}>
                        <Stack spacing={1.5} sx={{ mb: -12 }}>
                            <Typography variant="h6" color="secondary">
                                Total Expense
                            </Typography>
                            <Typography variant="h4">{currencyFormatter(stats.total_vouchers + stats.total_bills)}</Typography>
                        </Stack>
                        <SalesColumnChart categories={stats.categories} data_series={stats.series} />
                    </MainCard>
                </Grid>
            )}
        </Grid>
    );
};

export default DashboardView;
