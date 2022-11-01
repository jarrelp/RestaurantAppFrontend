// material-ui
import { Card, CardContent, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

// project imports
import { gridSpacing } from 'store/constant';

// ==============================|| SKELETON APEX RADAR CHART ||============================== //

const Quiz = () => {
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
                    <Grid item xs={12}>
                        <Skeleton variant="rectangular" />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Quiz;
