import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';

// project imports
import AlertDepartmentDelete from './AlertDepartmentDelete';
import { openSnackbar } from 'store/slices/snackbar';
import { useDispatch, useSelector } from 'store';
import { deleteDepartment } from 'store/slices/department';

// assets
import DeleteIcon from '@mui/icons-material/Delete';

// ==============================|| TABLE HEADER TOOLBAR ||============================== //

const CustomHeaderTableToolbar = ({ numSelected }) => {
    const dispatch = useDispatch();
    const departmentSelector = useSelector((state) => state.department);
    const { departments } = departmentSelector;

    //delete
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const handleDeleteModalClose = (status) => {
        setOpenDeleteModal(false);
        if (status) {
            let departmentIds = [];

            dispatch(deleteDepartment(department.id, departments));
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Departments Deleted successfully',
                    anchorOrigin: { vertical: 'top', horizontal: 'right' },
                    variant: 'alert',
                    alert: {
                        color: 'success'
                    },
                    close: false
                })
            );
        }
    };
    //delete

    return (
        <>
            <Toolbar
                sx={{
                    p: 0,
                    pl: 1,
                    pr: 1,
                    ...(numSelected > 0 && {
                        color: (theme) => theme.palette.secondary.main
                    })
                }}
            >
                {numSelected > 0 ? (
                    <Typography color="inherit" variant="h4">
                        {numSelected} Selected
                    </Typography>
                ) : (
                    <Typography variant="h6" id="tableTitle">
                        Nutrition
                    </Typography>
                )}
                <Box sx={{ flexGrow: 1 }} />
                {numSelected > 0 && (
                    <Tooltip title="Delete">
                        <IconButton size="large">
                            <DeleteIcon
                                fontSize="small"
                                onClick={() => {
                                    setOpenDeleteModal(true);
                                }}
                            />
                        </IconButton>
                    </Tooltip>
                )}
            </Toolbar>
            {openDeleteModal && (
                <AlertDepartmentDelete
                    title="Are you sure you want to delete these departments?"
                    open={openDeleteModal}
                    handleClose={handleDeleteModalClose}
                />
            )}
        </>
    );
};

CustomHeaderTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired
};

export default CustomHeaderTableToolbar;
