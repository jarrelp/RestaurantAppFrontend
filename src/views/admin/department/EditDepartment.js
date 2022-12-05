import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slide, TextField, Typography } from '@mui/material';

// third party
import * as yup from 'yup';
import { useFormik } from 'formik';

// project imports
import { gridSpacing } from 'store/constant';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { openSnackbar } from 'store/slices/snackbar';
import { useDispatch, useSelector } from 'store';
import { editDepartment } from 'store/slices/department';

// constants
import { borderRadius } from 'store/constant';

// animation
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

// validation
const validationSchema = yup.object({
    name: yup.string().required('Department name is required')
});

// ==============================|| ADD DEPARTMENT DIALOG ||============================== //

const EditDepartment = ({ department, open, handleCloseDialog }) => {
    const dispatch = useDispatch();
    const departmentSelector = useSelector((state) => state.department);
    const { departments } = departmentSelector;

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: department.id,
            name: department.name
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(editDepartment(values, departments));
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
                    <DialogTitle>
                        <Typography variant="h4">Edit Department</Typography>
                    </DialogTitle>
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
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <AnimateButton>
                            <Button variant="contained" type="submit">
                                Save
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

EditDepartment.propTypes = {
    open: PropTypes.bool,
    handleCloseDialog: PropTypes.func,
    department: PropTypes.object
};

export default EditDepartment;
