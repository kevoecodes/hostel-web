// assets
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { PERMISSIONS } from '../functions/pemissions';

// icons
const icons = {
    PeopleOutlineIcon,
    LabelOutlinedIcon
};

// ==============================|| USERS MANAGEMENT ITEMS ||============================== //

const users_management = {
    id: 'group-user-management',
    permission: PERMISSIONS.USERS_READ,
    title: 'Users Management',
    type: 'group',
    children: [
        {
            id: 'users',
            title: 'Users',
            type: 'item',
            url: '/users',
            icon: icons.PeopleOutlineIcon,
            breadcrumbs: false
        },
        {
            id: 'roles',
            title: 'Roles',
            type: 'item',
            url: '/roles',
            icon: icons.LabelOutlinedIcon,
            breadcrumbs: false
        }
    ]
};

export default users_management;
