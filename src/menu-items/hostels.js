// assets
import { DashboardOutlined } from '@ant-design/icons';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import SellIcon from '@mui/icons-material/Sell';

// icons
const icons = {
    HolidayVillageIcon,
    SellIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const hostels = {
    id: 'hostels-dashboard',
    title: 'Hostel Management',
    type: 'group',
    children: [
        {
            id: 'hostels',
            title: 'List Hostels',
            type: 'item',
            url: '/hostels',
            icon: icons.HolidayVillageIcon,
            breadcrumbs: false
        },
        {
            id: 'booked-hostels',
            title: 'Booked Hostels',
            type: 'item',
            url: '/booked-hostels',
            icon: icons.SellIcon,
            breadcrumbs: false
        }
    ]
};

export default hostels;
