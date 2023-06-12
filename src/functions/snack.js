import { snackbarRef } from '../App';

class Snack {
    success(message) {
        if (snackbarRef) {
            snackbarRef.enqueueSnackbar(message, { variant: 'success' });
        }
    }
    error(message) {
        if (snackbarRef) {
            snackbarRef.enqueueSnackbar(message, { variant: 'error' });
        }
    }
    warning(message) {
        if (snackbarRef) {
            snackbarRef.enqueueSnackbar(message, { variant: 'warning' });
        }
    }
}

export default new Snack();
