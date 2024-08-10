import React, { FC } from 'react';
import * as SC from './styles';
import { ITextDisplayProps } from './types';

export const TextDisplay: FC<ITextDisplayProps> = React.memo((props) => {
  const { text, userInput } = props

  const renderText = () => {
    return text.split('').map((char, index) => {
      if (index < userInput.length) {
        const isCorrect = char === userInput[index]
        return isCorrect ? (
          <SC.CorrectText key={index}>{char}</SC.CorrectText>
        ) : (
          <SC.IncorrectText key={index}>{char}</SC.IncorrectText>
        )
      } else {
        return <SC.RemainingText key={index}>{char}</SC.RemainingText>
      }
    })
  }

  return (
    <SC.TextContainer>
        {renderText()}
    </SC.TextContainer>
  );
});
