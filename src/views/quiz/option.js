import React from 'react';

import { Grid, Radio, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';

// ==============================|| OPTION ||============================== //

const Option = (props) => {
    var list = props.optionList;

    return (
        <SubCard>
            <Grid container spacing={2}>
                <Grid item sm={2} md={1} lg={1} xl={1} xxl={1}>
                    <Radio
                        aria-label={props.questionId}
                        value={props.option.id}
                        onChange={() =>
                            props.setOptionOnChange((list) => ({
                                ...list,
                                [props.questionId]: props.option.id
                            }))
                        }
                        checked={list[props.questionId] === props.option.id}
                        name={props.questionId}
                    />
                    <label>{props.option.place}</label>
                </Grid>
                <Grid item xs={10}>
                    <Typography>{props.option.description}</Typography>
                </Grid>
            </Grid>
        </SubCard>
    );
};

export default Option;
