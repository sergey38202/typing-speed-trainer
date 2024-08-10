import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TextDisplay } from '../../../components';
import { SAMPLE_TEXT } from './constants';
import { 
    calculateErrors, 
    calculateWpm, 
    selectErrorCount, 
    selectUserInput, 
    selectWpm, 
    setUserInput
} from '../../../store/reducers/TypingSlice';
import { AppDispatch } from '../../../store/store';

import * as SC from './styles';

export const ErrorBlock = () => {
    const userInput = useSelector(selectUserInput);
    const wpm = useSelector(selectWpm);
    const errorCount = useSelector(selectErrorCount);

    const dispatch = useDispatch<AppDispatch>();

    const displayText = useMemo(() => <TextDisplay text={SAMPLE_TEXT} userInput={userInput} />, [userInput]);

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;

          dispatch(setUserInput({ input: value, sampleText: SAMPLE_TEXT }));
          dispatch(calculateWpm());
          dispatch(calculateErrors(SAMPLE_TEXT));
        },

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [dispatch, SAMPLE_TEXT]
    );

    return (
        <SC.ContentWrapper>
        { displayText }
        <SC.InputField
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Start typing..."
          autoFocus
        />
        <SC.WpmDisplay>WPM: {wpm}</SC.WpmDisplay>
        <SC.ErrorDisplay>Errors: {errorCount}</SC.ErrorDisplay>
      </SC.ContentWrapper>
    );
};