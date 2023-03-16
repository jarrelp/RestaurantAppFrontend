import Chart from "react-google-charts";
import { styled } from "@mui/material";
import { ResponsiveContainer } from "recharts";

// const CustomizedGeoChart = styled(Chart)`
//   margin-top: 10px;
//   margin-right: 30px;
//   margin-left: 0px;
//   margin-bottom: 0px;
// `;

const CustomizedGeoChart = styled(Chart)(({ theme }) => ({
  height: 320,
  colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
  // backgroundColor:
  //   theme.palette.mode === LIGHT_MODE_THEME ? "error" : "primary",
  datalessRegionColor: "#f8bbd0",
  defaultColor: "#f5f5f5",
}));

const CustomizedResponsiveContainer = styled(ResponsiveContainer)`
  
  /* Center vertically and horizontally */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-right: 30px;
  margin-left: 0px;
  margin-bottom: 0px;
}
`;

// const CustomizedGeoChart = styled(Chart)(({ theme }) => ({
//   position: "absolute",
//   bottom: theme.spacing(2),
//   right: theme.spacing(2),
// }));

const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
];

export const options = {
  colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
  backgroundColor: "#ffffff",
  opacity: 0.0,
  // "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
  // {theme.palette.mode === LIGHT_MODE_THEME ? "error" : "primary"},
  datalessRegionColor: "#f8bbd0",
  defaultColor: "#f5f5f5",
  marginTop: "10px",
  marginRight: "30px",
  marginLeft: "0px",
  marginBottom: "0px",
};

export default function GeoChart() {
  return (
    <ResponsiveContainer width="99%" height="99%">
      <CustomizedGeoChart
        chartType="GeoChart"
        data={data}
        options={options}
        width="99%"
        height="99%"
      />
    </ResponsiveContainer>
  );
}
