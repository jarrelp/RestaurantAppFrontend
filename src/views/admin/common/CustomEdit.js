import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slide, TextField } from '@mui/material';

// third-party
import { useFormik } from 'formik';

// project imports
import { gridSpacing } from 'store/constant';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { openSnackbar } from 'store/slices/snackbar';
import { useDispatch } from 'store';

// constants
import { borderRadius } from 'store/constant';

// animation
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

// ==============================|| CUSTOM EDIT ||============================== //

const CustomEdit = ({ name, custom, customs, editCustoms, open, handleCloseDialog }) => {
    const dispatch = useDispatch();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: custom,
        // {
        //     id: item.id,
        //     title: item.title
        // },
        onSubmit: (values) => {
            const customToEdit = {
                id: values.id,
                title: values.title
            };
            dispatch(editCustoms(customToEdit, customs));
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
                    <DialogTitle>Add {name}</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={gridSpacing} sx={{ mt: 0.25 }}>
                            {Object.getOwnPropertyNames(custom)
                                .filter((x) => x !== 'id')
                                .map((item) => (
                                    <Grid item xs={12} key={item}>
                                        <TextField
                                            id={item}
                                            name={item}
                                            label={item}
                                            fullWidth
                                            value={formik.values[item]}
                                            onChange={formik.handleChange}
                                        />
                                    </Grid>
                                ))}
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
        // <Grid item xs={12}>
        //     <TextField
        //         fullWidth
        //         id="title"
        //         name="title"
        //         label="Title"
        //         value={formik.values.title}
        //         onChange={formik.handleChange}
        //         error={formik.touched.title && Boolean(formik.errors.title)}
        //         helperText={formik.touched.title && formik.errors.title}
        //     />
        // </Grid>
    );
};

CustomEdit.propTypes = {
    name: PropTypes.string,
    open: PropTypes.bool,
    handleCloseDialog: PropTypes.func
};

export default CustomEdit;
