import { useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import Answer from './answer';

// ==============================|| QUESTION ||============================== //

const Question = (props) => {
    //radio buttons
    const [valueBasic, setValueBasic] = useState();

    // van deze question:
    // we moeten de userantwoord ophalen:
    // de userantwoord is de value van valueBasic
    // deze value basic moet in een list gestopt worden.
    // deze lijst wordt door middel van een state opgeslagen in de parent class.
    // deze class krijgt van de parent class de lijst van de useranswers
    // deze class kan de lijst van de useranswers bewerken door middel van setUsweAnswers method
    // die meegegeven wordt door de parent class

    // useEffect(() => {
    //     setUserAnswers(valueBasic);
    //     console.log('change answer value of question ' + valueBasic);
    // }, [setUserAnswers, valueBasic]);

    return (
        <MainCard title={props.question.description} content={true}>
            <Grid container spacing={gridSpacing}>
                {props.question.answers?.map((answer, key) => (
                    <Grid item xs={12} lg={12} key={key}>
                        <Answer
                            description={answer.description}
                            setValueBasic={setValueBasic}
                            valueBasic={valueBasic}
                            questionId={props.question.id}
                            answerId={answer.id}
                            answerPlace={answer.place}
                            setUserAnswer={props.setUserAnswer}
                        />
                    </Grid>
                ))}
                <Grid item xs={12} lg={12}>
                    {props.children}
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Question;
