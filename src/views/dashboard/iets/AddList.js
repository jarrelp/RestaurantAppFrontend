import { useState } from 'react';
import { styled } from '@mui/material';
import Popover from '@mui/material/Popover';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { WidgetNames } from './data/ComponentsListData';

const FormControlWrapper = styled(FormControl)(({ theme }) => ({
    padding: theme.spacing(2),
    component: 'fieldset'
}));

export const AddList = ({ items, onRemoveItem, onAddItem, originalItems }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleChange = (e) => {
        if (e.target.checked) {
            onAddItem(e.target.name);
        } else {
            onRemoveItem(e.target.name);
        }
    };

    return (
        <>
            <IconButton aria-label="add" onClick={handleClick} aria-describedby={id}>
                <AddCircleOutlineIcon />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
            >
                <FormControlWrapper>
                    <FormLabel component="legend">Select Widgets</FormLabel>
                    <FormGroup>
                        {originalItems.map((i) => (
                            <FormControlLabel
                                control={<Checkbox checked={items.includes(i)} onChange={handleChange} name={i} />}
                                label={WidgetNames[i]}
                                key={i}
                            />
                        ))}
                    </FormGroup>
                </FormControlWrapper>
            </Popover>
        </>
    );
};
