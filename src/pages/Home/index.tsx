import { useSelector } from 'react-redux';

import { CompleteBlock } from './CompletedBlock';
import { ErrorBlock } from './ErrorBlock';
import { selectIsCompleted } from '../../store/reducers/TypingSlice';

import * as SC from './styles';

export const Home = () => {
    const isCompleted = useSelector(selectIsCompleted);

    return (
        <SC.AppContainer>
        <SC.Title>Typing Speed Trainer</SC.Title>
        {isCompleted ? (
            <CompleteBlock />
        ) : (
            <ErrorBlock />
        )}
      </SC.AppContainer>
      );
};