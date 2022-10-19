// material-ui
import { Card, CardContent, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import UseWindowSize from 'hooks/useWindowSize';

// project imports
import { gridSpacing } from 'store/constant';

// ==============================|| SKELETON TOTAL GROWTH BAR CHART ||============================== //

const ApexRadarChart = () => {
    const [widtht] = UseWindowSize();

    return (
        <Card>
            <CardContent>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                            <Grid item xs zeroMinWidth>
                                <Grid item xs={1}>
                                    <Skeleton variant="text" height={30} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} height={widtht - widtht * 0.5}>
                        <Skeleton variant="rectangular" height="100%" />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ApexRadarChart;
