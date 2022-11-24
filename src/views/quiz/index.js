import { useState, useEffect } from 'react';

// import { Link } from 'react-router-dom';

// material-ui
import { Button, CardActions, Grid, Typography } from '@mui/material';

// project imports
import UIProgress from 'ui-component/UIProgress';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Question from './question';
import QuizSkeleton from 'ui-component/cards/skeleton/Quiz';

import { useDispatch, useSelector } from 'store';
import { getQuizActive } from 'store/slices/quiz';
import { openDrawer } from 'store/slices/menu';

// ==============================|| QUIZ ||============================== //

const Quiz = () => {
    const [number, setNumber] = useState(0);
    const [option, setOption] = useState([]);

    const handleChange = (event, newNumber) => {
        setNumber(newNumber);
    };

    const dispatch = useDispatch();

    const [isLoading, setLoading] = useState(true);

    // quiz data
    const [quizData, setQuizData] = useState([]);
    const quizState = useSelector((state) => state.quiz);

    useEffect(() => {
        setQuizData(quizState.activeQuiz);
    }, [quizState]);

    useEffect(() => {
        dispatch(getQuizActive());

        // hide left drawer when email app opens
        dispatch(openDrawer(false));
    }, [dispatch]);

    useEffect(() => {
        if (quizData.length > 0) {
            setLoading(false);
        }
    }, [quizData]);

    return (
        <>
            {isLoading ? (
                <QuizSkeleton />
            ) : (
                <Question question={quizData[number]} setOptionOnChange={setOption} questionId={number} optionList={option}>
                    <UIProgress value={number + 1} maxValue={Object.keys(quizData).length - 1} />
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
                                {number < Object.keys(quizData).length - 1 && (
                                    <AnimateButton>
                                        <Button variant="contained" size="large" onClick={(e) => handleChange(e, 1 + number)}>
                                            Next
                                        </Button>
                                    </AnimateButton>
                                )}
                                {number === Object.keys(quizData).length - 1 && (
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
                        Question: {number + 1} of {Object.keys(quizData).length}
                    </Typography>
                </Question>
            )}
        </>
    );
};

export default Quiz;
