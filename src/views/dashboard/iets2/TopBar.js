import React from "react";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";
import AddList from "./AddList";

export default function TopBar({
  onLayoutSave,
  items,
  onRemoveItem,
  onAddItem,
  originalItems,
}) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        padding: theme.spacing(1),
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <AddList
        items={items}
        onRemoveItem={onRemoveItem}
        onAddItem={onAddItem}
        originalItems={originalItems}
      />
      <IconButton aria-label="save" onClick={onLayoutSave}>
        <SaveIcon />
      </IconButton>
    </Card>
  );
}
