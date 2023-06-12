import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function RolesPermissions({ permissions = [], title, onChangePermissionHandler }) {
    const handleChangeAll = (event) => {
        const checked = event.target.checked;
        if (checked) {
            // Add all permissions
        } else {
            // remove all permission
        }
        onChangePermissionHandler((prevState) => prevState.map((item) => ({ ...item, checked: checked })));
    };

    const handleChange = (event, index) => {
        console.log(event, index);
        onChangePermissionHandler((prevState) =>
            prevState.map((item, idx) => {
                if (idx === index) return { ...item, checked: !item.checked };
                else return item;
            })
        );
    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            {permissions.map((permission, idx) => (
                <FormControlLabel
                    key={idx}
                    label={permission.label}
                    control={<Checkbox checked={permission.checked} onChange={(e) => handleChange(e, idx)} />}
                />
            ))}
            {/*<FormControlLabel label="Edit User" control={<Checkbox checked={checked[1]} onChange={handleChange3} />} />*/}
            {/*<FormControlLabel label="Delete User" control={<Checkbox checked={checked[1]} onChange={handleChange3} />} />*/}
        </Box>
    );

    return (
        <div>
            <FormControlLabel
                label={title}
                control={
                    <Checkbox
                        checked={permissions.every((item) => item.checked === true)}
                        indeterminate={permissions.some((item) => item.checked === true)}
                        onChange={handleChangeAll}
                    />
                }
            />
            {children}
        </div>
    );
}
