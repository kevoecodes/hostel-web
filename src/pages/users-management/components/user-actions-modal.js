import { Menu, MenuItem } from '@mui/material';

const UserActionsModal = ({ anchorEl, open, onClose, onClick }) => {
    return (
        <>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button'
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={onClose}
                PaperProps={{
                    style: {
                        // maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch'
                    }
                }}
            >
                <MenuItem onClick={onClick}>Edit</MenuItem>
            </Menu>
        </>
    );
};

export default UserActionsModal;
