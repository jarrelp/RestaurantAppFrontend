import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import { AddList } from './AddList';

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EditIcon from '@mui/icons-material/Edit';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import EditOffTwoToneIcon from '@mui/icons-material/EditOffTwoTone';

// interface TopBarProps {
//   onLayoutSave: (event: React.MouseEvent<HTMLElement>) => void
//   items: string[]
//   onRemoveItem: (itemId: string) => void
//   onAddItem: (itemId: string) => void
//   originalItems?: () => string[]
// };

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    // position: "absolute",
    // bottom: theme.spacing(2),
    // right: theme.spacing(2),
}));

const StyledBox = styled(Box)(({ theme }) => ({
    height: 320,
    transform: 'translateZ(0px)',
    flexGrow: 1,
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1
}));

export default function SpeedDialComponent({ onLayoutSave, onToggleToolBox }) {
    const [show, setShow] = useState(false);

    const editOnClick = () => {
        onToggleToolBox();
        setShow(!show);
    };

    const actions = [
        { icon: <SaveIcon />, name: 'Save', onClick: () => onLayoutSave() },
        {
            icon: show ? <EditOffTwoToneIcon /> : <EditTwoToneIcon />,
            name: 'Add',
            onClick: editOnClick
        }
    ];

    return (
        <StyledBox>
            <StyledSpeedDial
                ariaLabel="SpeedDial openIcon example"
                sx={{ position: 'absolute', bottom: 0, right: 0 }}
                icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                direction="left"
            >
                {actions.map((action) => (
                    <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={action.onClick} />
                ))}
            </StyledSpeedDial>
        </StyledBox>
    );
}
