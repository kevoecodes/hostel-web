import MainCard from '../../components/MainCard';
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
import { renderDateTime, renderHostelStatus } from '../../functions/common';
import PendingIcon from '@mui/icons-material/Pending';
import StyledMenu from '../../components/StyledMenu';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getHostelsListRequest } from '../../utils/API';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';

const ListHostels = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [hostels, setHostels] = useState([]);
    const [rowHostel, setRowHostel] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const navigate = useNavigate();

    const open = Boolean(anchorEl);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const navigateToAddHostel = () => {
        navigate('add-hostel');
    };

    const navigateToHostelDetail = (id) => {
        navigate('edit-user/' + id);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleClick = (event, user) => {
        setRowHostel(user);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const getHostelsList = () => {
        getHostelsListRequest()
            .then((res) => {
                setHostels(res.results);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getHostelsList();
    }, []);

    return (
        <>
            <MainCard
                title={
                    <>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item>All Hostels</Grid>

                            <Grid item xs={12} md={6} lg={4} sx={{ ml: 'auto' }}>
                                <Button variant="contained" endIcon={<AddHomeWorkIcon />} onClick={navigateToAddHostel}>
                                    Add Hostel
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
                                    <TableCell>Hostel Name</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {hostels.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((hostel, idx) => {
                                    // if (filter_worthy(company.verification_status)) {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            key={idx}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>{renderDateTime(hostel.created_at)}</TableCell>
                                            <TableCell>{hostel.name}</TableCell>
                                            <TableCell>{renderHostelStatus(hostel.is_booked)}</TableCell>
                                            <TableCell>
                                                <div>
                                                    <IconButton
                                                        aria-label="more"
                                                        id="long-button"
                                                        aria-controls={open ? 'demo-customized-menu' : undefined}
                                                        aria-expanded={open ? 'true' : undefined}
                                                        disableElevation
                                                        aria-haspopup="true"
                                                        onClick={(e) => handleClick(e, hostel)}
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
                                                                navigateToHostelDetail(rowHostel.id);
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
                        count={hostels.length}
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

export default ListHostels;
