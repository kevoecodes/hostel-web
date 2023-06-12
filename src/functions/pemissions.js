export const PERMISSIONS = {
    DEFAULT: '0',
    // USERS CRUD
    USERS_READ: '1',
    USERS_CREATE: '2',
    USER_UPDATE: '3',
    USER_DELETE: '4',
    USERS_CRUD: ['1', '2', '3', '4'],

    // ROLES CURD
    ROLE_CREATE: '5',
    ROLE_UPDATE: '6',
    ROLE_DELETE: '7',
    ROLE_READ: '8',
    ROLES_CRUD: ['5', '6', '7', '8'],

    // BL CRUD
    BL_CREATE: '9',
    BL_UPDATE: '10',
    BL_DELETE: '11',
    BL_READ: '12',
    BL_MARK_DONE: '13',
    BLS_CRUD: ['9', '10', '11', '12', '13'],

    // BL_CHARGE CRUD
    BL_CHARGE_CREATE: '14',
    BL_CHARGE_UPDATE: '15',
    BL_CHARGE_DELETE: '16',
    BL_CHARGE_READ: '17',
    BL_CHARGE_VERIFY: '18',
    BL_CHARGE_APPROVE: '19',
    BL_CHARGE_PAY: '20',
    BL_CHARGE_REJECT: '21',
    BL_CHARGES_CRUD: ['14', '15', '16', '17', '18', '19', '20', '21'],

    // BL_CHARGE CRUD
    VOUCHER_CREATE: '22',
    VOUCHER_UPDATE: '23',
    VOUCHER_DELETE: '24',
    VOUCHER_READ: '25',
    VOUCHER_VERIFY: '26',
    VOUCHER_APPROVE: '27',
    VOUCHER_PAY: '28',
    VOUCHER_REJECT: '29',
    VOUCHERS_CRUD: ['22', '23', '24', '25', '26', '27', '28', '29'],

    // FLOAT_REQUEST CRUD
    FLOAT_REQUEST_CREATE: '30',
    FLOAT_REQUEST_UPDATE: '31',
    FLOAT_REQUEST_DELETE: '32',
    FLOAT_REQUEST_READ: '33',
    FLOAT_REQUEST_VERIFY: '34',
    FLOAT_REQUEST_APPROVE: '35',
    FLOAT_REQUEST_REJECT: '36',
    FLOAT_REQUEST_PAY: '36',
    FLOAT_REQUEST_CRUD: ['30', '31', '32', '33', '34', '35', '36', '37']
};

class PermissionsHandler {
    userCRUD_permissions() {
        return [
            {
                label: 'Create Users',
                value: PERMISSIONS.USERS_CREATE
            },
            {
                label: 'View Users',
                value: PERMISSIONS.USERS_READ
            },
            {
                label: 'Update Users',
                value: PERMISSIONS.USER_UPDATE
            },
            {
                label: 'Delete Users',
                value: PERMISSIONS.USER_DELETE
            }
        ];
    }
    blCRUD_permissions() {
        return [
            {
                label: 'Create Bls',
                value: PERMISSIONS.BL_CREATE
            },
            {
                label: 'View Bls',
                value: PERMISSIONS.BL_READ
            },
            {
                label: 'Update Bls',
                value: PERMISSIONS.BL_UPDATE
            },
            {
                label: 'Delete Bls',
                value: PERMISSIONS.BL_DELETE
            },
            {
                label: 'Bl Mark Done',
                value: PERMISSIONS.BL_MARK_DONE
            }
        ];
    }
    bl_chargesCRUD_permissions() {
        return [
            {
                label: 'Create Bl Charges',
                value: PERMISSIONS.BL_CHARGE_CREATE
            },
            {
                label: 'View Bl Charges',
                value: PERMISSIONS.BL_CHARGE_READ
            },
            {
                label: 'Update Bl Charges',
                value: PERMISSIONS.BL_CHARGE_UPDATE
            },
            {
                label: 'Delete Bl Charges',
                value: PERMISSIONS.BL_CHARGE_DELETE
            },
            {
                label: 'Verify Bl Charges',
                value: PERMISSIONS.BL_CHARGE_VERIFY
            },
            {
                label: 'Approve Bl Charges',
                value: PERMISSIONS.BL_CHARGE_APPROVE
            },
            {
                label: 'Bl Charges payments',
                value: PERMISSIONS.BL_CHARGE_PAY
            },
            {
                label: 'Reject Bl Charges',
                value: PERMISSIONS.BL_CHARGE_REJECT
            }
        ];
    }

    vouchersCRUD_permissions() {
        return [
            {
                label: 'Create Vouchers',
                value: PERMISSIONS.VOUCHER_CREATE
            },
            {
                label: 'View Vouchers',
                value: PERMISSIONS.VOUCHER_READ
            },
            {
                label: 'Update Vouchers',
                value: PERMISSIONS.VOUCHER_UPDATE
            },
            {
                label: 'Delete Vouchers',
                value: PERMISSIONS.VOUCHER_DELETE
            },
            {
                label: 'Verify Vouchers',
                value: PERMISSIONS.VOUCHER_VERIFY
            },
            {
                label: 'Approve Vouchers',
                value: PERMISSIONS.VOUCHER_APPROVE
            },
            {
                label: 'Vouchers payments',
                value: PERMISSIONS.VOUCHER_PAY
            },
            {
                label: 'Reject Vouchers',
                value: PERMISSIONS.VOUCHER_REJECT
            }
        ];
    }

    floatRequestCRUD_permissions() {
        return [
            {
                label: 'Create Float Request',
                value: PERMISSIONS.FLOAT_REQUEST_CREATE
            },
            {
                label: 'View Float Request',
                value: PERMISSIONS.FLOAT_REQUEST_READ
            },
            {
                label: 'Update Float Request',
                value: PERMISSIONS.FLOAT_REQUEST_UPDATE
            },
            {
                label: 'Delete Float Request',
                value: PERMISSIONS.FLOAT_REQUEST_DELETE
            },
            {
                label: 'Verify Float Request',
                value: PERMISSIONS.FLOAT_REQUEST_VERIFY
            },
            {
                label: 'Approve Float Request',
                value: PERMISSIONS.FLOAT_REQUEST_APPROVE
            },
            {
                label: 'Vouchers Float Request',
                value: PERMISSIONS.FLOAT_REQUEST_PAY
            },
            {
                label: 'Reject Float Request',
                value: PERMISSIONS.FLOAT_REQUEST_REJECT
            }
        ];
    }
}

export const permissionsHandler = new PermissionsHandler();
