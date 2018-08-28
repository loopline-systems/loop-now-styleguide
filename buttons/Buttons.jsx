import React from 'react';
import styled from 'styled-components';
import {
  BaseButton, LabelButton, NextButton,
  PrimaryButton, PrimaryCardButton, RatingButton,
  SecondaryButton,
  SecondaryCardButton, TransparentButton,
} from '../../src/styles/buttons.sc';
import { lls_green } from '../../src/styles/colors';

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const SingleButton = styled.div`
  min-width: 400px;
  margin: 10px 0;
`

function Buttons() {
  return (
    <ButtonContainer>
      <SingleButton>
        <BaseButton>BaseButton</BaseButton>
      </SingleButton>
      <SingleButton>
        <PrimaryButton>PrimaryButton</PrimaryButton>
      </SingleButton>
      <SingleButton>
        <SecondaryButton>SecondaryButton</SecondaryButton>
      </SingleButton>
      <SingleButton>
        <SecondaryCardButton>SecondaryCardButton</SecondaryCardButton>
      </SingleButton>
      <SingleButton>
        <PrimaryCardButton>PrimaryCardButton</PrimaryCardButton>
      </SingleButton>
      <SingleButton>
        <LabelButton color={lls_green} background="rgb(237, 237, 237)">LabelButton</LabelButton>
      </SingleButton>
      <SingleButton>
        <RatingButton color={lls_green} background="rgb(237, 237, 237)">10</RatingButton>
      </SingleButton>
      <SingleButton>
        <NextButton>NextButton</NextButton>
      </SingleButton>
      <SingleButton>
        <TransparentButton>TransparentButton</TransparentButton>
      </SingleButton>
    </ButtonContainer>
  );
}

export default Buttons;
