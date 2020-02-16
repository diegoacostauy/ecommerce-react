import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionContainer = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// one way to share styles between two different components
// const OptionStyles = css`
//   padding: 10px 15px;
//   text-transform: uppercase;
//   cursor: pointer;
// `

export const OptionLink = styled(Link)`
  /* ${'OptionStyles'} */

  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const OptionDiv = styled.div`
  /* ${'OptionStyles'} */
`;