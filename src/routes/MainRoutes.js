import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import Button from '@mui/material/Button';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
// const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const RolesList = Loadable(lazy(() => import('pages/users-management/RolesList')));
const UsersList = Loadable(lazy(() => import('pages/users-management/UsersList')));

//  user management routes  //
const CreateUser = Loadable(lazy(() => import('pages/users-management/CreateUser')));
const AddRole = Loadable(lazy(() => import('pages/users-management/AddRole')));
const EditRole = Loadable(lazy(() => import('pages/users-management/EditRole')));
const EditUser = Loadable(lazy(() => import('pages/users-management/EditUser')));

const ListHostels = Loadable(lazy(() => import('pages/hostels-management/ListHostels')));
const ListBookedHostels = Loadable(lazy(() => import('pages/hostels-management/ListBookedHostels')));
const AddHostel = Loadable(lazy(() => import('pages/hostels-management/AddHostel')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '',
            children: [
                {
                    path: '',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: '/users',
            // element: <UsersList />,
            children: [
                {
                    path: '',
                    element: <UsersList />
                },
                {
                    path: 'create-user',
                    element: <CreateUser />
                },
                {
                    path: 'edit-user/:user_id',
                    element: <EditUser />
                }
            ]
        },
        {
            path: '/roles',
            children: [
                {
                    path: '',
                    element: <RolesList />
                },
                {
                    path: 'add-role',
                    element: <AddRole />
                },
                {
                    path: 'edit-role/:role_id',
                    element: <EditRole />
                }
            ]
        },
        {
            path: '/hostels',
            children: [
                {
                    path: '',
                    element: <ListHostels />
                },
                {
                    path: 'add-hostel',
                    element: <AddHostel />
                },
                {
                    path: 'edit-role/:role_id',
                    element: <EditRole />
                }
            ]
        },
        {
            path: '/booked-hostels',
            children: [
                {
                    path: '',
                    element: <ListBookedHostels />
                },
                {
                    path: 'add-hoostel',
                    element: <AddRole />
                },
                {
                    path: 'edit-role/:role_id',
                    element: <EditRole />
                }
            ]
        }
    ]
};

export default MainRoutes;
