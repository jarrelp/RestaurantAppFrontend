import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';

// project imports
import AlertSkillDelete from './AlertSkillDelete';
import { openSnackbar } from 'store/slices/snackbar';
import { useDispatch, useSelector } from 'store';
import { deleteSkills } from 'store/slices/skill';

// assets
import DeleteIcon from '@mui/icons-material/Delete';

// ==============================|| TABLE HEADER TOOLBAR ||============================== //

const SkillHeaderTableToolbar = ({ selected }) => {
    const dispatch = useDispatch();
    const skillSelector = useSelector((state) => state.skill);
    const { skills } = skillSelector;

    //delete
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const handleDeleteModalClose = (status) => {
        setOpenDeleteModal(false);
        if (status) {
            dispatch(deleteSkills(selected, skills));
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Skills Deleted successfully',
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
                    ...(selected.length > 0 && {
                        color: (theme) => theme.palette.secondary.main
                    })
                }}
            >
                {selected.length > 0 ? (
                    <Typography color="inherit" variant="h4">
                        {selected.length} Selected
                    </Typography>
                ) : (
                    <Typography variant="h6" id="tableTitle">
                        Nutrition
                    </Typography>
                )}
                <Box sx={{ flexGrow: 1 }} />
                {selected.length > 0 && (
                    <Tooltip title="Delete">
                        <IconButton
                            size="large"
                            onClick={() => {
                                setOpenDeleteModal(true);
                            }}
                        >
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                )}
            </Toolbar>
            {openDeleteModal && (
                <AlertSkillDelete title={`${selected.length} skill(s)`} open={openDeleteModal} handleClose={handleDeleteModalClose} />
            )}
        </>
    );
};

SkillHeaderTableToolbar.propTypes = {
    selected: PropTypes.array.isRequired
};

export default SkillHeaderTableToolbar;
