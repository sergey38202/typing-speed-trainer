import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { resetTest, selectErrorCount, selectWpm } from '../../../store/reducers/TypingSlice';

import * as SC from './styles';
import { AppDispatch } from '../../../store/store';

export const CompleteBlock: FC = () => {
    const wpm = useSelector(selectWpm);
    const errorCount = useSelector(selectErrorCount);

    const dispatch = useDispatch<AppDispatch>();

    const handleRestart = useCallback(() => {
        dispatch(resetTest());
    }, [dispatch]);

    return (
    <SC.ResultScreen>
        <SC.ResultText>Congratulations! You've completed the test.</SC.ResultText>
        <SC.ResultText>Your WPM: {wpm}</SC.ResultText>
        <SC.ResultText>Number of Errors: {errorCount}</SC.ResultText>
        <SC.RestartButton onClick={handleRestart}>Try Again</SC.RestartButton>
    </SC.ResultScreen>
    );
};