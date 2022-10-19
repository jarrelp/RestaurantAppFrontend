import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import ApexRadarChart from './ApexRadarChart';
import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT Result ||============================== //

const Result = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={12} xl={12}>
                <ApexRadarChart isLoading={isLoading} />
            </Grid>
        </Grid>
    );
};

export default Result;
