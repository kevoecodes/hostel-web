import { BL_CHARGE_STATUS, BL_STATUS, BOOKED_HOSTEL_STATUS } from '../utils/constants';
import { Chip } from '@mui/material';
import { getRolesRequest } from '../utils/API';
import { globalNavigator } from '../App';
import snack from './snack';

export const renderHostelStatus = (status) => {
    if (status) return <Chip color="success" label={'Taken'} />;
    else return <Chip color="primary" label="Open" />;
};

export const renderBookedHostelStatus = (status) => {
    if (status === BOOKED_HOSTEL_STATUS.PENDING) return <Chip color="secondary" label={'Pending'} />;
    else if (status === BOOKED_HOSTEL_STATUS.ACCEPTED) return <Chip color="success" label="Accepted" />;
    else if (status === BOOKED_HOSTEL_STATUS.REJECTED) return <Chip color="error" label="Rejected" />;
};

export const renderDateTime = (datetimestring) => {
    const dateTime = new Date(datetimestring);
    return dateTime.toLocaleString();
};

export const renderRole = (role) => {
    if (role === 1) return 'Admin';
    else if (role === 2) return 'User';
};

export const getRoleOptions = (setRoleOptions) => {
    getRolesRequest()
        .then((res) => {
            console.log(res);
            setRoleOptions(res);
        })
        .catch((err) => {
            console.log(err);
        });
};

export const currencyFormatter = (_amount) => {
    const formattedAmount = _amount.toLocaleString('en-US', { style: 'currency', currency: 'TZS' });
    return formattedAmount;
};

export const logoutAction = () => {
    if (globalNavigator !== null) {
        globalNavigator('/login', { replace: true });
    }
    localStorage.clear();
};

export const requestResponseHandler = (error) => {
    if (!error.response) {
        snack.error('No network available, Please connect to a Network');
    } else if (error.response.status === 401) {
        snack.error('Unauthorized request, please login again');
        logoutAction();
    } else if (error.response.status === 400) {
        // Bad request
    } else if (error.response.status === 500) {
        // 500 ERROR PAGE
    } else if (error.response && error.response.status === 429) {
    } else {
        console.log('Error occurred, status: ' + error.response.status);
    }
};

export function formatPhoneNumber(number) {
    const countryCode = number.slice(0, 3);
    const phoneNumber = number.slice(3);

    if (phoneNumber.length === 9) {
        return {
            countryCode,
            phoneNumber
        };
    } else {
        return {
            countryCode: '255',
            phoneNumber: '1'.repeat(9)
        };
    }
}
