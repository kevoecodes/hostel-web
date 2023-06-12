import { Grid, MenuItem, Select, Typography } from '@mui/material';
import { FieldView } from '../pages/bl-management/components/reusables';
import MainCard from './MainCard';
import { useState } from 'react';
import { currencyFormatter } from '../functions/common';

const AmountView = ({ amount, title = 'AMOUNT' }) => {
    const [currency, setCurrency] = useState(0);

    return (
        <>
            <Grid container spacing={4} alignItems={'center'} justifyContent={'center'}>
                <Grid item xs={4}>
                    <FieldView
                        title={title}
                        value={
                            <>
                                <MainCard style={{ width: 300 }}>
                                    <Grid container alignItems={'center'} justifyContent={'center'}>
                                        <Grid xs={5}>
                                            <Select
                                                labelId="select-currency"
                                                id="demo-simple-select-autowidth"
                                                value={currency}
                                                onChange={(e) => {
                                                    setCurrency(e.target.value);
                                                }}
                                                autoWidth
                                            >
                                                <MenuItem value={0}>TZS</MenuItem>
                                                {/*<MenuItem value={1}>USD</MenuItem>*/}
                                            </Select>
                                        </Grid>
                                        <Grid xs={7}>
                                            <Typography variant="h5">{currencyFormatter(amount)}</Typography>
                                        </Grid>
                                    </Grid>
                                </MainCard>
                            </>
                        }
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default AmountView;
