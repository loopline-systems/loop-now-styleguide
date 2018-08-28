import styled from 'styled-components';
import SvgIcon from '../../src/shared/SvgIcon';

const React = require('react')

const SideBarTitle = styled.span`
  color: #ffffff;
  display: flex;
  font-size: 33px;
  font-weight: 100;
  justify-content: space-around;
  font-family: 'Open Sans', sans-serif;
  padding: 35px 0;
`;


const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Logo = (props) => (
  <SideBarTitle>
    <SvgIcon name="iconLogo" width={120} height={50} />
    <span>Styleguide</span>
  </SideBarTitle>
)


module.exports = Logo;
