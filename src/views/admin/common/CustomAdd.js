import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slide, TextField } from '@mui/material';

// third party
// import * as yup from 'yup';
import { Chance } from 'chance';
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
const chance = new Chance();

// ==============================|| CUSTOM ADD DIALOG ||============================== //

const getInitialValues = (headCells) => {
    let obj = {};
    Array.prototype.forEach.call(headCells, (item) => {
        obj[item.id] = item.initialValue;
    });
    obj['id'] = `${chance.integer({ min: 1000, max: 9999 })}`;
    console.log('generateInitialValues');
    return obj;
};

const CustomAdd = ({ name, headCells, customs, addCustom, open, handleCloseDialog }) => {
    const dispatch = useDispatch();

    // every time it renders: getInitialValues() will be called
    const formik = useFormik({
        initialValues: getInitialValues(headCells),
        onSubmit: (values) => {
            dispatch(addCustom(values, customs));
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
                            {headCells
                                .filter((x) => x.id !== 'id')
                                .map((item) => (
                                    <Grid item xs={12} key={item.id}>
                                        <TextField
                                            id={item.id}
                                            name={item.name}
                                            label={item.label}
                                            fullWidth
                                            value={formik.values[item.id]}
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
    );
};

CustomAdd.propTypes = {
    name: PropTypes.string,
    headCells: PropTypes.array,
    open: PropTypes.bool,
    handleCloseDialog: PropTypes.func
};

export default CustomAdd;
