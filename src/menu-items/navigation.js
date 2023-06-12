// assets
import { DashboardOutlined } from '@ant-design/icons';
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';

// icons
const icons = {
    DashboardOutlined,
    GpsFixedOutlinedIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const navigation = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'track',
            title: 'Track',
            type: 'item',
            url: '/',
            icon: icons.GpsFixedOutlinedIcon,
            breadcrumbs: false
        }
    ]
};

export default navigation;
