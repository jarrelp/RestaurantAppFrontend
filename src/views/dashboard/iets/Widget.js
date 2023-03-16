import { styled } from '@mui/material';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import Typography from '@mui/material/Typography';
import { WidgetNames } from './data/ComponentsListData';
import { keyframes } from '@emotion/react';
import { useState } from 'react';

const myKeyframe = keyframes`
0%, 7% {
  transform: rotateZ(0);
}
15% {
  transform: rotateZ(-15deg);
}
20% {
  transform: rotateZ(10deg);
}
25% {
  transform: rotateZ(-10deg);
}
30% {
  transform: rotateZ(6deg);
}
35% {
  transform: rotateZ(-4deg);
}
40%, 100% {
  transform: rotateZ(0);
}
`;

const ShakedDeleteIcon = styled(DeleteOutlineTwoToneIcon)(({ theme }) => ({
    ':hover': {
        animation: `${myKeyframe} 2s linear infinite`
    }
}));

const ShakedAddIcon = styled(AddCircleOutlineTwoToneIcon)(({ theme }) => ({
    ':hover': {
        animation: `${myKeyframe} 2s linear infinite`
    }
}));

const RootWrapper = styled(Card)({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
});

const HeaderWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem'
});

const SpacerWrapper = styled('div')({
    flexGrow: 1
});

const BodyWrapper = styled('div')({
    // padding: "0.5rem",
    flexGrow: 1
});

export default function Widget({ id, onAddItem, onRemoveItem, component: Item, isInToolbox }) {
    return (
        <RootWrapper>
            <HeaderWrapper>
                <Typography variant="h6" gutterBottom>
                    {WidgetNames[id]}
                </Typography>
                <SpacerWrapper />
                {isInToolbox ? (
                    <IconButton color="primary" aria-label="add" onClick={() => onAddItem(id)}>
                        <ShakedAddIcon fontSize="small" />
                    </IconButton>
                ) : (
                    <IconButton color="error" aria-label="delete" onClick={() => onRemoveItem(id)}>
                        <ShakedDeleteIcon fontSize="small" />
                    </IconButton>
                )}
            </HeaderWrapper>
            <BodyWrapper>
                <Item />
            </BodyWrapper>
        </RootWrapper>
    );
}
