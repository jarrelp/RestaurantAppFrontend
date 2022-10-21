// material-ui
import { Grid } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import Answer from './answer';

// ==============================|| SKELETON TOTAL APEX RADAR CHART ||============================== //

const Question = (props) => {
    return (
        <MainCard title={props.question.description} content={true}>
            <Grid container spacing={gridSpacing}>
                {props.question.answers?.map((answer) => (
                    <Grid item xs={12} lg={12} key={answer.id}>
                        <Answer
                            description={answer.description}
                            setValueBasic={props.setValueBasic}
                            valueBasic={props.valueBasic}
                            questionId={props.question.id}
                            answerId={answer.id}
                            answerPlace={answer.place}
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
