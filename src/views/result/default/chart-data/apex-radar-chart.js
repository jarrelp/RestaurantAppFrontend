import { fontFamily } from '../../../../store/constant';

// ===========================|| DASHBOARD - TOTAL GROWTH BAR CHART ||=========================== //

const chartData = {
    type: 'radar',
    toolbar: {
        show: false
    },
    options: {
        dataLabels: {
            enabled: false
        },
        responsive: [
            {
                breakpoint: 450,
                chart: {},
                options: {
                    legend: {
                        show: false,
                        position: 'bottom'
                    }
                }
            }
        ],
        plotOptions: {
            radar: {
                polygons: {
                    strokeColors: '#e9e9e9',
                    fill: {
                        colors: ['#f8f8f8', '#fff']
                    }
                }
            }
        },
        xaxis: {
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            labels: {
                style: {
                    fontFamily: fontFamily
                }
            }
        }
    },
    series: [
        {
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20]
        }
    ]
};
export default chartData;
