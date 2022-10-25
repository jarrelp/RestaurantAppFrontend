import React from 'react';

import { FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';

// ==============================|| ANSWER ||============================== //

const Answer = (props) => {
    let handleClickAnswer = (e) => {
        props.setValueBasic(e.target.value);
        props.setUserAnswer(props.questionId, e.target.value);
    };

    return (
        <SubCard>
            <Grid container spacing={2}>
                <Grid item sm={2} md={1} lg={1} xl={1} xxl={1}>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-label={props.questionId}
                            value={props.valueBasic ?? ' '}
                            onChange={(e) => handleClickAnswer(e)}
                            name="controlled-radio-buttons-group"
                        >
                            <FormControlLabel value={props.answerId} control={<Radio />} label={props.answerPlace} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={10}>
                    <Typography>{props.description}</Typography>
                </Grid>
            </Grid>
        </SubCard>
    );
};

export default Answer;
