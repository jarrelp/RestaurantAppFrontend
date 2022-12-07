import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slide, TextField } from '@mui/material';

// third party
import * as yup from 'yup';
import { Chance } from 'chance';
import { useFormik } from 'formik';

// project imports
import { gridSpacing } from 'store/constant';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { openSnackbar } from 'store/slices/snackbar';
import { useDispatch, useSelector } from 'store';
import { addUser } from 'store/slices/user';

// constants
import { borderRadius } from 'store/constant';

// animation
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

// validation
const chance = new Chance();
const validationSchema = yup.object({
    name: yup.string().required('User name is required')
});

// ==============================|| ADD DEPARTMENT DIALOG ||============================== //

const AddUser = ({ open, handleCloseDialog }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const { users } = user;

    const formik = useFormik({
        initialValues: {
            id: `${chance.integer({ min: 1000, max: 9999 })}`,
            name: '',
            department: ''
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(addUser(values, users));
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Submit Success',
                    variant: 'alert',
                    alert: {
                        color: 'success'
                    },
                    close: false
                })
            );
            handleCloseDialog();
        }
    });

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseDialog}
            sx={{
                '&>div:nth-of-type(3)': {
                    '&>div': {
                        m: 0,
                        borderRadius: `${borderRadius}px`,
                        maxWidth: 450,
                        maxHeight: '100%'
                    }
                }
            }}
        >
            {open && (
                <form onSubmit={formik.handleSubmit}>
                    <DialogTitle variant="subtitle3">Add User</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={gridSpacing} sx={{ mt: 0.25 }}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="name"
                                    name="name"
                                    label="Name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container alignItems="center" spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <Typography variant="subtitle1">department</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <Grid container justifyContent="flex-start">
                                            <Autocomplete
                                                id="department"
                                                value={profiles.find((profile) => profile.id === formik.values.department) || null}
                                                onChange={(event, value) => formik.setFieldValue('department', value?.id)}
                                                options={profiles}
                                                fullWidth
                                                autoHighlight
                                                getOptionLabel={(option) => option.name}
                                                isOptionEqualToValue={(option) => option.id === formik.values.department}
                                                renderOption={(props, option) => (
                                                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                                        <img loading="lazy" width="20" src={avatarImage(`./${option.avatar}`)} alt="" />
                                                        {option.name}
                                                    </Box>
                                                )}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label="Choose a assignee"
                                                        inputProps={{
                                                            ...params.inputProps,
                                                            autoComplete: 'new-password' // disable autocomplete and autofill
                                                        }}
                                                    />
                                                )}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <AnimateButton>
                            <Button variant="contained" type="submit">
                                Create
                            </Button>
                        </AnimateButton>
                        <Button variant="text" color="error" onClick={handleCloseDialog}>
                            Close
                        </Button>
                    </DialogActions>
                </form>
            )}
        </Dialog>
    );
};

AddUser.propTypes = {
    open: PropTypes.bool,
    handleCloseDialog: PropTypes.func
};

export default AddUser;
