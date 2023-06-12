import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import MainCard from '../../components/MainCard';
import {
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
import { renderBookedHostelStatus, renderDateTime } from '../../functions/common';
import PendingIcon from '@mui/icons-material/Pending';
import StyledMenu from '../../components/StyledMenu';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { acceptBookedHostelRequest, getBookedHostelsListRequest, rejectBookedHostelRequest } from '../../utils/API';
import snack from '../../functions/snack';

const ListBookedHostels = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [booked_hostels, setBookedHostels] = useState([]);
    const [rowBookedHostel, setRowBookedHostel] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const navigate = useNavigate();

    const open = Boolean(anchorEl);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const navigateToAddHostel = () => {
        navigate('create-user');
    };

    const navigateToHostelDetail = (id) => {
        navigate('edit-user/' + id);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleClick = (event, booked_hostel) => {
        setRowBookedHostel(booked_hostel);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const getBookedHostelsList = () => {
        getBookedHostelsListRequest()
            .then((res) => {
                console.log(res);
                setBookedHostels(res.results);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const acceptBook = () => {
        acceptBookedHostelRequest(rowBookedHostel.id)
            .then((res) => {
                getBookedHostelsList();
                snack.success('Successfully accepted booking');
            })
            .catch((err) => {
                snack.error('Failed to accept booking');
            });
    };

    const rejectBook = () => {
        rejectBookedHostelRequest(rowBookedHostel.id)
            .then((res) => {
                getBookedHostelsList();
                snack.success('Successfully rejected booking');
            })
            .catch((err) => {
                snack.error('Failed to reject booking');
            });
    };

    useEffect(() => {
        getBookedHostelsList();
    }, []);

    return (
        <>
            <MainCard
                title={
                    <>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item>All Booked Hostels</Grid>

                            {/*<Grid item xs={12} md={6} lg={4} sx={{ ml: 'auto' }}>*/}
                            {/*  <Button variant="contained" endIcon={<PersonAddOutlinedIcon />} onClick={navigateToAddHostel}>*/}
                            {/*    Add User*/}
                            {/*  </Button>*/}
                            {/*</Grid>*/}
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
                                    <TableCell>Hostel Name</TableCell>
                                    <TableCell>User</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {booked_hostels.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((booked_hostel, idx) => {
                                    // if (filter_worthy(company.verification_status)) {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            key={idx}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>{renderDateTime(booked_hostel.created_at)}</TableCell>
                                            <TableCell>{booked_hostel.hostel.name}</TableCell>
                                            <TableCell>{booked_hostel.user.full_name}</TableCell>
                                            <TableCell>{renderBookedHostelStatus(booked_hostel.status)}</TableCell>
                                            <TableCell>
                                                <div>
                                                    <IconButton
                                                        aria-label="more"
                                                        id="long-button"
                                                        aria-controls={open ? 'demo-customized-menu' : undefined}
                                                        aria-expanded={open ? 'true' : undefined}
                                                        disableElevation
                                                        aria-haspopup="true"
                                                        onClick={(e) => handleClick(e, booked_hostel)}
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
                                                                acceptBook();
                                                            }}
                                                        >
                                                            <VisibilityIcon style={{ fontSize: 25, color: 'green' }} />
                                                            Accept
                                                        </MenuItem>

                                                        <MenuItem onClick={rejectBook} disableRipple>
                                                            <DeleteForeverIcon style={{ fontSize: 25, color: 'red' }} />
                                                            Reject
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
                        count={booked_hostels.length}
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

export default ListBookedHostels;
