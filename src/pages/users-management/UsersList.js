import {
    Button,
    Grid,
    IconButton,
    MenuItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from '@mui/material';
import MainCard from '../../components/MainCard';
import { renderDateTime, renderRole } from '../../functions/common';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PendingIcon from '@mui/icons-material/Pending';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { getUserListRequest } from '../../utils/API';
import StyledMenu from '../../components/StyledMenu';

const UsersList = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [users, setUsers] = useState([]);
    const [rowUser, setRowUser] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const navigate = useNavigate();

    const open = Boolean(anchorEl);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const navigateToAddUser = () => {
        navigate('create-user');
    };

    const navigateToUserDetail = (id) => {
        navigate('edit-user/' + id);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleClick = (event, user) => {
        setRowUser(user);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const getUserList = () => {
        getUserListRequest()
            .then((res) => {
                console.log(res);
                setUsers(res.results);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getUserList();
    }, []);

    return (
        <>
            <MainCard
                title={
                    <>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item>All Users</Grid>

                            <Grid item xs={12} md={6} lg={4} sx={{ ml: 'auto' }}>
                                <Button variant="contained" endIcon={<PersonAddOutlinedIcon />} onClick={navigateToAddUser}>
                                    Add User
                                </Button>
                            </Grid>
                        </Grid>
                    </>
                }
            >
                <Paper>
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Created At</TableCell>
                                    <TableCell>Full Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Role</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, idx) => {
                                    // if (filter_worthy(company.verification_status)) {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            key={idx}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>{renderDateTime(user.date_joined)}</TableCell>
                                            <TableCell>{user.full_name}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{renderRole(user.role)}</TableCell>
                                            <TableCell>
                                                <div>
                                                    <IconButton
                                                        aria-label="more"
                                                        id="long-button"
                                                        aria-controls={open ? 'demo-customized-menu' : undefined}
                                                        aria-expanded={open ? 'true' : undefined}
                                                        disableElevation
                                                        aria-haspopup="true"
                                                        onClick={(e) => handleClick(e, user)}
                                                    >
                                                        <PendingIcon />
                                                    </IconButton>

                                                    <StyledMenu
                                                        id="demo-customized-menu"
                                                        anchorEl={anchorEl}
                                                        open={open}
                                                        onClose={handleClose}
                                                        MenuListProps={{
                                                            'aria-labelledby': 'demo-customized-menu'
                                                        }}
                                                    >
                                                        <MenuItem
                                                            onClick={() => {
                                                                navigateToUserDetail(rowUser.id);
                                                            }}
                                                        >
                                                            <VisibilityIcon style={{ fontSize: 25, color: 'green' }} />
                                                            Edit
                                                        </MenuItem>

                                                        <MenuItem onClick={handleClose} disableRipple>
                                                            <DeleteForeverIcon style={{ fontSize: 25, color: 'red' }} />
                                                            Delete
                                                        </MenuItem>
                                                    </StyledMenu>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                    // }
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 15, 20]}
                        component="div"
                        count={users.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </MainCard>
        </>
    );
};

export default UsersList;
