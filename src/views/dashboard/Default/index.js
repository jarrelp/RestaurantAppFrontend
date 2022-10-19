import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import ApexRadarChart from './ApexRadarChart';
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={12} xl={12}>
                <MainCard title="result" contentSX={{ padding: 0 }}>
                    <ApexRadarChart isLoading={isLoading} />
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
