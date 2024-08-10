import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TYPING_SLICE_NAME } from './constants';
import { ITypingState, IUserInputPayload } from './types';
import { RootState } from '../../store';

const initialState: ITypingState = {
    userInput: '',
    startTime: null,
    wpm: 0,
    errorCount: 0,
    isCompleted: false,
};

const typingSlice = createSlice({
    name: TYPING_SLICE_NAME,
    initialState,
    reducers: {
      setUserInput(state, action: PayloadAction<IUserInputPayload>) {
        const { input, sampleText } = action.payload
        state.userInput = input
  
        if (!state.startTime) {
          state.startTime = Date.now()
        }
  
        if (input === sampleText) {
          state.isCompleted = true
        }
      },
      calculateWpm(state) {
        const wordsTyped = state.userInput
          .trim()
          .split(' ')
          .filter(word => word !== '').length
        const timeElapsed = (Date.now() - (state.startTime ?? Date.now())) / 1000 / 60
  
        if (timeElapsed > 0) {
          state.wpm = Math.round(wordsTyped / timeElapsed)
        }
      },
      calculateErrors(state, action: PayloadAction<string>) {
        const sampleText = action.payload
        let errors = 0
        for (let i = 0; i < state.userInput.length; i++) {
          if (state.userInput[i] !== sampleText[i]) {
            errors++
          }
        }
        state.errorCount = errors
      },
      resetTest(state) {
        state.userInput = ''
        state.startTime = null
        state.wpm = 0
        state.errorCount = 0
        state.isCompleted = false
      },
    },
  });
  
  export const { setUserInput, calculateWpm, calculateErrors, resetTest } = typingSlice.actions;
  
  const selectTypingState = (state: RootState) => state.typing;
  
  export const selectUserInput = createSelector(selectTypingState, typing => typing.userInput);
  export const selectWpm = createSelector(selectTypingState, typing => typing.wpm);
  export const selectErrorCount = createSelector(selectTypingState, typing => typing.errorCount);
  export const selectIsCompleted = createSelector(selectTypingState, typing => typing.isCompleted);
  
  export default typingSlice.reducer;