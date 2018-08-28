import React from 'react';
import styled from 'styled-components';
import {
  lls_blue_light,
  lls_blue_lighter,
  lls_dark_blue_heavy,
  lls_dark_blue_light,
  lls_dark_violet_heavy,
  lls_dark_violet_light,
  lls_dark_white,
  lls_dark_white_light,
  lls_gold,
  lls_green,
  lls_grey_grey_heavy,
  lls_light_blue,
  lls_light_grey_heavy,
  lls_light_grey_light,
  lls_light_white,
  lls_light_white_light,
  lls_light_white_selected,
  lls_login_red,
  lls_pink, lls_pink_light,
  lls_text_grey,
  lls_violet_heavy,
  lls_white,
} from '../../src/styles/colors/index';

const ColorBrick = styled.div`
  background-color: ${({ color }) => color};
  color: #fff;
  padding: 10px;
  min-width: 220px;
  margin: 5px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-size: 20px;
`;

const ColorContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`;

function Colors() {
  return (
    <ColorContainer>
      <ColorBrick color={lls_dark_blue_heavy}>lls_dark_blue_heavy</ColorBrick>
      <ColorBrick color={lls_dark_blue_light}>lls_dark_blue_light</ColorBrick>
      <ColorBrick color={lls_blue_light}>lls_blue_light</ColorBrick>
      <ColorBrick color={lls_blue_lighter}>lls_blue_lighter</ColorBrick>
      <ColorBrick color={lls_violet_heavy}>lls_violet_heavy</ColorBrick>
      <ColorBrick color={lls_dark_violet_light}>lls_dark_violet_light</ColorBrick>
      <ColorBrick color={lls_dark_violet_heavy}>lls_dark_violet_heavy</ColorBrick>
      <ColorBrick color={lls_white}>lls_white</ColorBrick>
      <ColorBrick color={lls_light_white}>lls_light_white</ColorBrick>
      <ColorBrick color={lls_dark_white}>lls_dark_white</ColorBrick>
      <ColorBrick color={lls_dark_white_light}>lls_dark_white_light</ColorBrick>
      <ColorBrick color={lls_light_grey_light}>lls_light_grey_light</ColorBrick>
      <ColorBrick color={lls_light_white_light}>lls_light_white_light</ColorBrick>
      <ColorBrick color={lls_text_grey}>lls_text_grey</ColorBrick>
      <ColorBrick color={lls_light_white_selected}>lls_light_white_selected</ColorBrick>
      <ColorBrick color={lls_light_grey_heavy}>lls_light_grey_heavy</ColorBrick>
      <ColorBrick color={lls_grey_grey_heavy}>lls_grey_grey_heavy</ColorBrick>
      <ColorBrick color={lls_pink}>lls_pink</ColorBrick>
      <ColorBrick color={lls_login_red}>lls_login_red</ColorBrick>
      <ColorBrick color={lls_gold}>lls_gold</ColorBrick>
      <ColorBrick color={lls_green}>lls_green</ColorBrick>
      <ColorBrick color={lls_light_blue}>lls_light_blue</ColorBrick>
      <ColorBrick color={lls_pink_light}>lls_pink_light</ColorBrick>
    </ColorContainer>
  );
}

export default Colors;
