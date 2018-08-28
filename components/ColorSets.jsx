import React from 'react';
import styled from 'styled-components';
import { orderedColorsSets } from '../../src/styles/colors/orderedColorsSets';

const ColorSet = styled.div`
  text-align: center;
`;

const Color = styled.div`
  background-color: ${({ color }) => color};
  padding: 10px;
  margin: 5px;
  color: #fff;
`;

const ColorContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`;

function ColorSets() {
  return (
    <ColorContainer>
      {Object.values(orderedColorsSets).map( (colorSet, index) => (
        <ColorSet key={colorSet.length}>
          <span>{index+1}</span>
          {colorSet.reverse().map( color => (
            <Color key={color} color={color}>{color}</Color>
          ))}
        </ColorSet>
      ))}
    </ColorContainer>
  );
}

export default ColorSets;
