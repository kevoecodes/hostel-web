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
import { renderDateTime } from '../../functions/common';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import PendingIcon from '@mui/icons-material/Pending';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { getRolesRequest } from '../../utils/API';
import StyledMenu from '../../components/StyledMenu';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const RolesList = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [roles, setRoles] = useState([]);
    const [rowRole, setRowRole] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const open = Boolean(anchorEl);

    const navigate = useNavigate();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const navigateToAddRole = () => {
        navigate('add-role');
    };

    const navigateToRoleDetail = (id) => {
        navigate('edit-role/' + id);
    };

    const handleClick = (event, role) => {
        setRowRole(role);
        setAnchorEl(event.currentTarget);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const getRoles = () => {
        getRolesRequest()
            .then((res) => {
                console.log(res);
                setRoles(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getRoles();
    }, []);

    return (
        <>
            <MainCard
                title={
                    <>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item>All Roles</Grid>
                            <Grid item xs={12} md={6} lg={4} sx={{ ml: 'auto' }}>
                                <Button variant="contained" endIcon={<AddOutlinedIcon />} onClick={navigateToAddRole}>
                                    Add Role
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
                                    <TableCell>Title</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {roles.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, idx) => {
                                    // if (filter_worthy(company.verification_status)) {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            key={idx}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>{renderDateTime(user.created_at)}</TableCell>
                                            <TableCell>{user.title}</TableCell>
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
                                                                navigateToRoleDetail(rowRole.id);
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
                        count={roles.length}
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

export default RolesList;
