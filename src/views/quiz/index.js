import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

// material-ui
import { Button, CardActions, Grid, Typography, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

// project imports
import UIProgress from 'ui-component/UIProgress';
import AnimateButton from 'ui-component/extended/AnimateButton';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import QuizData from './quiz-data';

import { gridSpacing } from 'store/constant';

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

// ==============================|| QUIZ ||============================== //

// const userAnswersInitialState = () => {
//     var array = new Array();
//     QuizData.map((item) => array.push(item.id));
//     return array;
// };

const Quiz = () => {
    const [number, setNumber] = useState(0);

    // matrix
    // first row: question
    // seccond row: answer
    // const [userAnswers, setUserAnswers] = useState(new Array(Object.keys(QuizData).length)); //new Array(Object.keys(QuizData).length)

    // const setUserAnswer = (questionId, userAnswerId) => {
    //     var data = userAnswersInitialState;
    //     var index = data.indexOf(questionId);
    //     var array = userAnswers;
    //     array[index] = userAnswerId;
    //     setUserAnswers(array);
    // };

    // const handleChange = (event, questionId, newNumber) => {
    //     var index = userAnswers.findIndex(questionId);
    //     userAnswers.
    // };

    // stappenplan
    // nog steeds: maak 2 dimentionale list aan die de aangeklikte antwoord per vraag onthoudt.

    //radio buttons
    // const [valueBasic, setValueBasic] = useState([]); // dit moet veranderd worden
    const [answer, setAnswer] = useState({});

    // const setValueBasicEvent = (event, questionKey) => {
    //     var array = valueBasic;
    //     array[questionKey] = event.target.value;
    //     setValueBasic(array);
    // };

    const handleChange = (event, newNumber) => {
        setNumber(newNumber);
    };

    // const showAnswers = () => {
    //     valueBasic.map((answer, key) => console.log(answer[key] + '\n'));
    // };

    // useEffect(() => {
    //     console.log('rerender');
    // }, valueBasic);

    return (
        <>
            {QuizData.map((question, questionKey) => (
                <MainCard title={question.description} key={questionKey} content={true}>
                    <Grid container spacing={gridSpacing}>
                        {question.answers?.map((options, answerKey) => (
                            <Grid item xs={12} lg={12} key={answerKey}>
                                <SubCard>
                                    <Grid container spacing={2}>
                                        <Grid item sm={2} md={1} lg={1} xl={1} xxl={1}>
                                            {/* <FormControl> */}
                                            <Radio
                                                defaultValue={question.answers[0].id}
                                                aria-label={question.id}
                                                value={options.id}
                                                onChange={
                                                    // (e) => setValueBasicEvent(e, questionKey)

                                                    // setValueBasic((answer.id) => ({
                                                    //     ...valueBasic,
                                                    //     [question.id]
                                                    // }))

                                                    () =>
                                                        setAnswer((answer) => ({
                                                            ...answer,
                                                            [question.id]: options.id
                                                        }))
                                                }
                                                checked={
                                                    // valueBasic[questionKey] === answer.id
                                                    answer[question.id] === options.id
                                                }
                                                name={question.id}
                                            >
                                                {/* <FormControlLabel value={answer.id} control={<Radio />} label={answer.place} /> */}
                                            </Radio>
                                            {/* </FormControl> */}
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography>{answer.description}</Typography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </Grid>
                        ))}
                        <Grid item xs={12} lg={12}>
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
                                                    // onClick={() => showAnswers}
                                                    component={Button}
                                                    // component={Link}
                                                    // to="/result"
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
                        </Grid>
                    </Grid>
                </MainCard>
            ))}
            {/* {console.log(valueBasic)} */}
        </>
    );
};

export default Quiz;
