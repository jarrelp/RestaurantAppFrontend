import LineChart from '../customcharts/LineChart';
import AreaChart from '../customcharts/AreaChart';
import BarChart from '../customcharts/BarChart';
import ScatterChart from '../customcharts/ScatterChart';
import GeoChart from '../customcharts/GeoChart';
import RadialBarChart from '../customcharts/RadialBarChart';
import PieChart from '../customcharts/PieChart';
import RaderChart from '../customcharts/RaderChart';
import CustomShapeBarChart from '../customcharts/CustomShapeBarChart';
import BrushBarChart from '../customcharts/BrushBarChart';
import TreeMap from '../customcharts/TreeMap';

// export const ComponentsListData: IComponentsList[] = [
//   {
//     name: "a",
//     charttype: "Line Chart"
//   },
//   {
//     name: "b",
//     charttype: "Area Chart"
//   },
//   {
//     name: "c",
//     charttype: "Bar Chart"
//   },
//   {
//     name: "d",
//     charttype: "Scatter Chart"
//   },
//   {
//     name: "e",
//     charttype: "Scatter Chart"
//   },
//   {
//     name: "f",
//     charttype: "Scatter Chart"
//   }
// ];

export const WidgetNames = {
    a: 'Line Chart',
    b: 'Area Chart',
    c: 'Bar Chart',
    d: 'Scatter Chart',
    e: 'Pie Chart',
    f: 'Rader Chart',
    // g: "Geo Chart",
    h: 'Radial Bar Chart',
    i: 'Custom Shape Bar Chart'
    // j: "Brush Bar Chart",
    // k: "TreeMap",
};

export const ComponentListData = {
    a: LineChart,
    b: AreaChart,
    c: BarChart,
    d: ScatterChart,
    e: PieChart,
    f: RaderChart,
    // g: GeoChart,
    h: RadialBarChart,
    i: CustomShapeBarChart
    // j: BrushBarChart,
    // K: TreeMap,
};

export const OriginalItems = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    // "g",
    'h',
    'i'
    // "j",
    // "k",
];

export const InitialLayouts = {
    chartinfos: [
        ['a', 6, 6, 0, 0, false, false],
        ['b', 6, 6, 6, 0, false, false],
        ['c', 6, 6, 6, 6, false, false],
        ['d', 6, 6, 12, 6, false, false],
        ['e', 6, 6, 12, 12, false, false],
        ['f', 6, 6, 18, 12, false, false],
        // ["g", 6, 6, 18, 18, false, false],
        ['h', 6, 6, 24, 18, false, false],
        ['i', 6, 6, 24, 24, false, false]
        // ["j", 6, 6, 30, 24, false, false],
        // ["k", 6, 6, 30, 30, false, false],
    ]
};
