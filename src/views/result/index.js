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
            <Grid item xs={12} sm={12} md={10} lg={8} xl={6}>
                <ApexRadarChart isLoading={true} />
            </Grid>
        </Grid>
    );
};

export default Result;
