// material-ui
import { Grid } from '@mui/material';

// project imports
import Content from './iets2/Content';
import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT Result ||============================== //

const Result = () => {
    return (
        // <div sx={{ display: 'flex' }}>
        //     <Content />
        // </div>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Content />
            </Grid>
        </Grid>
    );
};

export default Result;
