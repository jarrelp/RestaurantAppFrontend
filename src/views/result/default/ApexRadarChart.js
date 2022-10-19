import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import SkeletonApexRadarChart from 'ui-component/cards/skeleton/ApexRadarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// constants
// import { fontFamily } from 'store/constant';

// chart data
import chartData from './chart-data/apex-radar-chart';

// ==============================|| RADAR CHART ||============================== //

const ApexRadarChart = ({ isLoading }) => {
    const theme = useTheme();

    const { primary } = theme.palette.text;
    const darkLight = theme.palette.dark.light;
    const grey200 = theme.palette.grey[200];
    const backColor = theme.palette.background.paper;

    const secondary = theme.palette.secondary.main;
    const primaryMain = theme.palette.primary.main;
    const successDark = theme.palette.success.dark;
    const error = theme.palette.error.main;
    const warningDark = theme.palette.warning.dark;
    const orangeDark = theme.palette.orange.dark;

    useEffect(() => {
        const newChartData = {
            ...chartData.options,
            colors: [secondary, primaryMain, successDark, error, warningDark, orangeDark],
            xaxis: {
                labels: {
                    style: {
                        colors: [primary, primary, primary, primary, primary, primary, primary]
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [primary]
                    }
                }
            },
            grid: {
                borderColor: grey200
            },
            legend: {
                labels: {
                    colors: 'grey.500'
                }
            },
            stroke: {
                colors: [backColor]
            }
        };

        // do not load chart when loading
        if (!isLoading) {
            ApexCharts.exec(`radar-chart`, 'updateOptions', newChartData);
        }
    }, [primary, darkLight, grey200, backColor, secondary, primaryMain, successDark, error, warningDark, isLoading, orangeDark]);

    return (
        // <div id="chart">
        //     <ReactApexChart series={series} options={options} type="radar" margin="0px" padding="0px" border="0px" />
        // </div>
        <>
            {isLoading ? (
                <MainCard title="result" contentSX={{ padding: 0 }}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Chart {...chartData} />
                        </Grid>
                    </Grid>
                </MainCard>
            ) : (
                <SkeletonApexRadarChart />
            )}
        </>
    );
};

ApexRadarChart.propTypes = {
    isLoading: PropTypes.bool
};

export default ApexRadarChart;
