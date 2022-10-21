import { useState } from 'react';

import { Link } from 'react-router-dom';

// material-ui
import { Button, CardActions, Grid, Typography } from '@mui/material';

// project imports
import UIProgress from 'ui-component/UIProgress';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Question from './question';
import QuizData from './quiz-data';

// // quizpanel
// function QuizPanel({ children, value, index, ...other }) {
//     return (
//         <div role="quizpanel" hidden={value !== index} id={`simple-quizpanel-${index}`} aria-labelledby={`simple-quiz-${index}`} {...other}>
//             {value === index && <div>{children}</div>}
//         </div>
//     );
// }

// QuizPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired
// };

// // next question
// const nextQuestion = () => {
//     // Move on to the next question if not the last question
//     const nextQ = number + 1;

//     if (nextQ !== TOTAL_QUESTIONS) {
//         setNumber(nextQ);
//     }
// };

// // previous question
// const previousQuestion = () => {
//     // Move on to the next question if not the last question
//     const nextQ = number - 1;

//     if (nextQ !== 0) {
//         setNumber(nextQ);
//     }
// };

// ==============================|| SKELETON TOTAL APEX RADAR CHART ||============================== //

const Quiz = () => {
    //radio buttons
    const [valueBasic, setValueBasic] = useState();

    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    const handleChange = (event, newNumber) => {
        setNumber(newNumber);
    };

    return (
        <>
            <Question
                question={QuizData[number]}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
                valueBasic={valueBasic}
                setValueBasic={setValueBasic}
                setUserAnswers={setUserAnswers}
            >
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
                                    <Button variant="contained" size="large" component={Link} to="/result">
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
