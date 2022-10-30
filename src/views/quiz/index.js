import { useState } from 'react';

// import { Link } from 'react-router-dom';

// material-ui
import { Button, CardActions, Grid, Typography } from '@mui/material';

// project imports
import UIProgress from 'ui-component/UIProgress';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Question from './question';
import QuizData from './quiz-data';

// ==============================|| QUIZ ||============================== //

const Quiz = () => {
    const [number, setNumber] = useState(0);
    const [option, setOption] = useState({});

    const handleChange = (event, newNumber) => {
        setNumber(newNumber);
    };

    // const getResult = () => {
    //     var iets = option.toList();
    //     iets?.foreach((option) => {
    //         console.log(' answer= ' + option);
    //     });
    // };

    return (
        <>
            <Question question={QuizData[number]} setOptionOnChange={setOption} questionId={number} optionList={option}>
                <UIProgress value={number + 1} maxValue={Object.keys(QuizData).length - 1} />
                <CardActions>
                    <Grid container justifyContent="space-between" spacing={0}>
                        <Grid item>
                            {number > 0 && (
                                <AnimateButton>
                                    <Button variant="outlined" size="large" onClick={(e) => handleChange(e, number - 1)}>
                                        Previous
                                    </Button>
                                </AnimateButton>
                            )}
                        </Grid>
                        <Grid item>
                            {number < Object.keys(QuizData).length - 1 && (
                                <AnimateButton>
                                    <Button variant="contained" size="large" onClick={(e) => handleChange(e, 1 + number)}>
                                        Next
                                    </Button>
                                </AnimateButton>
                            )}
                            {number === Object.keys(QuizData).length - 1 && (
                                <AnimateButton>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        // component={Link}
                                        // to="/result"
                                        // onClick={getResult}
                                    >
                                        Result
                                    </Button>
                                </AnimateButton>
                            )}
                        </Grid>
                    </Grid>
                </CardActions>
                <Typography textAlign="center">
                    Question: {number + 1} of {Object.keys(QuizData).length}
                </Typography>
            </Question>
        </>
    );
};

export default Quiz;
