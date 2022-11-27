import { useEffect, useState } from 'react';

// project imports
import CustomList from '../common/CustomList';
import { useDispatch, useSelector } from 'store';
import { getQuizList, addQuiz } from 'store/slices/quiz';
import { openDrawer } from 'store/slices/menu';

// table header options
const headCells = [
    {
        id: 'id',
        numeric: true,
        label: 'ID',
        align: 'left',
        initialValue: 0
    },
    {
        id: 'description',
        numeric: false,
        label: 'Description',
        align: 'left',
        initialValue: ''
    },
    {
        id: 'active',
        numeric: false,
        label: 'Active',
        align: 'left',
        initialValue: 'false'
    }
];

// ==============================|| QUIZ LIST ||============================== //

const QuizList = () => {
    const dispatch = useDispatch();

    // quiz data
    const [quizzes, setQuizzes] = useState([]);
    const quizState = useSelector((state) => state.quiz);

    useEffect(() => {
        setQuizzes(quizState.quizzes);
    }, [quizState]);

    useEffect(() => {
        dispatch(getQuizList());

        // hide left drawer when email app opens
        dispatch(openDrawer(false));
    }, [dispatch]);

    return <CustomList name={'Quiz'} headCells={headCells} customs={quizzes} addCustom={addQuiz} />;
};

export default QuizList;
