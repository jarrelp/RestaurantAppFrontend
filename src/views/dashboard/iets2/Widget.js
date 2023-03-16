import React from 'react';
import { Card } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const rootStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
};

const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem'
};

const spacerStyle = {
    flexGrow: 1
};

const bodyStyle = {
    padding: '0.5rem',
    flexGrow: 1
};

const widgetNames = {
    a: 'Line Chart',
    b: 'Area Chart',
    c: 'Bar Chart',
    d: 'Scatter Chart',
    e: 'Line Chart',
    f: 'Bar Chart'
};
export default function Widget({ id, onRemoveItem, component: Item }) {
    return (
        <Card sx={rootStyle}>
            <div sx={headerStyle}>
                <Typography variant="h6" gutterBottom>
                    {widgetNames[id]}
                </Typography>
                <IconButton aria-label="delete" onClick={() => onRemoveItem(id)}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            </div>
            {/* <div className={classes.body}> */}
            <Item sx={bodyStyle} />
            {/* </div> */}
        </Card>
    );
}
