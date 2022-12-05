import { useState } from 'react';

// material-ui
import { Checkbox, IconButton, Menu, MenuItem, TableCell, TableRow, Typography } from '@mui/material';

// project imports
import EditDepartment from './EditDepartment';

// assets
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const DepartmentItem = ({ department, index, isItemSelected, labelId, handleClick }) => {
    const [openEdit, setOpenEdit] = useState(false);
    const handleClickOpenEditDialog = () => {
        setOpenEdit(true);
    };
    const handleCloseEditDialog = () => {
        setOpenEdit(false);
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event?.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <TableRow hover role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={index} selected={isItemSelected}>
                <TableCell padding="checkbox" sx={{ pl: 3, pr: 3 }} onClick={(event) => handleClick(event, department.name)}>
                    <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                            'aria-labelledby': labelId
                        }}
                    />
                </TableCell>

                <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    onClick={(event) => handleClick(event, department.id)}
                    sx={{ cursor: 'pointer' }}
                >
                    <Typography variant="subtitle1" sx={{ color: 'grey.900' }}>
                        {department.id}
                    </Typography>
                </TableCell>

                <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    onClick={(event) => handleClick(event, department.name)}
                    sx={{ cursor: 'pointer' }}
                >
                    <Typography variant="subtitle1" sx={{ color: 'grey.900' }}>
                        {department.name}
                    </Typography>
                </TableCell>

                <TableCell align="right" sx={{ pl: 3, pr: 3, width: 0 }}>
                    <IconButton onClick={handleMenuClick} size="large">
                        <MoreHorizOutlinedIcon aria-controls="menu-popular-card-1" aria-haspopup="true" sx={{ fontSize: '1.3rem' }} />
                    </IconButton>
                    <Menu
                        id="menu-popular-card-1"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        variant="selectedMenu"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        sx={{
                            '& .MuiMenu-paper': {
                                boxShadow: 1
                            }
                        }}
                    >
                        <MenuItem
                            onClick={() => {
                                handleClose();
                                handleClickOpenEditDialog();
                            }}
                        >
                            {' '}
                            Edit
                        </MenuItem>
                        <MenuItem onClick={handleClose}> Delete</MenuItem>
                    </Menu>
                </TableCell>
            </TableRow>
            <EditDepartment department={department} open={openEdit} handleCloseDialog={handleCloseEditDialog} />
        </>
    );
};

export default DepartmentItem;
