import React from 'react';

// material-ui
import { Grid, LinearProgress, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';

// ==============================|| UI PROGRESS ||============================== //

const Persentage = (value, maxValue) => {
    var x = value / maxValue;
    var y = x * 100;
    var z = y - (1 / maxValue) * 100;
    return z;
};

const UIProgress = (props) => {
    var progress = Persentage(props.value, props.maxValue);

    return (
        <SubCard>
            <Grid container direction="column" spacing={3}>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item>
                            <Typography variant="caption">Progress</Typography>
                        </Grid>
                        <Grid item xs>
                            <LinearProgress variant="determinate" color="secondary" value={progress} />
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">{Math.round(progress)}%</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </SubCard>
    );
};

export default UIProgress;
