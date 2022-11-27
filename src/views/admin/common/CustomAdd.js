import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slide, TextField } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import AnimateButton from 'ui-component/extended/AnimateButton';

// constants
import { borderRadius } from 'store/constant';

// animation
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

// ==============================|| CUSTOM ADD DIALOG ||============================== //

const CustomAdd = ({ name, headCells, open, handleCloseDialog }) => {
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
                <>
                    <DialogTitle>Add {name}</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={gridSpacing} sx={{ mt: 0.25 }}>
                            {headCells
                                .filter((x) => x.id !== 'id')
                                .map((item) => (
                                    <Grid item xs={12} key={item.id}>
                                        <TextField id="outlined-basic1" fullWidth label={`Enter ${name} ${item.id}*`} />
                                    </Grid>
                                ))}
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <AnimateButton>
                            <Button variant="contained">Create</Button>
                        </AnimateButton>
                        <Button variant="text" color="error" onClick={handleCloseDialog}>
                            Close
                        </Button>
                    </DialogActions>
                </>
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
