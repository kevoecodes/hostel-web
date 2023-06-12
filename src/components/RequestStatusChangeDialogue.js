import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControlLabel,
    Typography
} from '@mui/material';
import { useState } from 'react';
import { BL_CHARGE_STATUS } from '../utils/constants';

export const REQUEST_TYPE = {
    BL_CHARGE: {
        title: 'BL Charge'
    },
    VOUCHER: {
        title: 'Voucher'
    },
    FLOAT_REQUEST: {
        title: 'Float request'
    }
};

const CommonActionText = ({ action }) => (
    <>
        You are about to <span style={{ fontWeight: 'bolder' }}>{action}</span>{' '}
    </>
);
export const REQUEST_ACTION = {
    VERIFY: {
        value: BL_CHARGE_STATUS.VERIFIED,
        prompt_text: <CommonActionText action={'VERIFY'} />
    },
    APPROVE: {
        value: BL_CHARGE_STATUS.APPROVED,
        prompt_text: <CommonActionText action={'APPROVE'} />
    },
    PAYMENTS: {
        value: BL_CHARGE_STATUS.PAID,
        prompt_text: <CommonActionText action={'MAKE PAYMENTS'} />
    },
    REJECT: {
        value: BL_CHARGE_STATUS.REJECTED,
        prompt_text: <CommonActionText action={'REJECT'} />
    }
};

export const RequestStatusChangeDialogue = ({ open, setOpen, unique_identifier, request_type, action, onConfirm }) => {
    const [checked, setChecked] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const handleClose = () => {
        setOpen(false);
        setChecked(false);
    };

    const handleConfirm = async () => {
        setSubmitted(true);
        const success = await onConfirm();
        console.log('Success returned ', success);
        if (success) handleClose();
    };

    return (
        <>
            <Dialog fullWidth={true} maxWidth={'xs'} open={open} onClose={handleClose}>
                <DialogTitle>Are you sure</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div>
                            {action.prompt_text} {request_type.title} <span style={{ fontWeight: 'bolder' }}>{unique_identifier}</span>,
                            tick the box below if you are sure of this action
                        </div>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked}
                                    onChange={(event) => setChecked(event.target.checked)}
                                    name="checked"
                                    color="primary"
                                    size="small"
                                />
                            }
                            label={<Typography variant="h6">Yes, I am sure</Typography>}
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color={'secondary'} onClick={handleClose}>
                        Close
                    </Button>
                    <Button disabled={!checked || submitted} onClick={handleConfirm}>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
