import { useState } from "react";
import { Grid, styled, Typography } from "@mui/material";
import Popover from "@mui/material/Popover";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { WidgetNames } from "./data/ComponentsListData";
import Widget from "./Widget";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";

const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };

// const GetNewPlace = (length, x, y) => {};

const CustomizedTypography = styled(Typography)(({ theme }) => ({
  position: "absolute",
  color: "#484848",
}));

const ToolBox = ({ items, onAddItem, onRemoveItem, componentListData }) => {
  return (
    <div className="toolbox">
      {items.length === 0 && (
        <CustomizedTypography variant="h1">Customize...</CustomizedTypography>
      )}
      <div className="toolboxItemBox">
        {items.map((key) => (
          <div key={key} className="toolboxItem">
            <Widget
              id={key}
              onRemoveItem={onRemoveItem}
              onAddItem={onAddItem}
              component={componentListData[key]}
              isInToolbox={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolBox;
