import styled, { css } from 'styled-components';

const ButtonStyles = css`
  background-color: black;
  border: 1px solid black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const ButtonInverted = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    border-color: black;
    color: white;
  }
`;

const ButtonGoogle = css`
  background-color: #4285f4;
  border: 1px solid #4285f4;
  color: #fff;

  &:hover,
  &:focus {
    background-color: #357ae8;
    border-color: #357ae8;
    color: #fff;
  }
`;

const getButtonStyles = props => (
  props.isGoogleSignIn ?
    ButtonGoogle :
    props.inverted ?
      ButtonInverted : ButtonStyles
);

export const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;