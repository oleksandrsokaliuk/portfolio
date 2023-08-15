import styled from "styled-components";

export const FormContainer = styled.form`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
  border-left: 5px solid ${(props) => props.theme.light.secondaryBG};
`;

export const Label = styled.label`
  color: ${(props) => props.theme.light.header};
  font-family: ${(props) => props.theme.light.mainFont};
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 6.44px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  color: ${(props) => props.theme.light.header};
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 0.8em;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 3.68px;
  /* text-transform: capitalize; */
  background: transparent;
  border: none;
  border-bottom: 1px solid #e6e6e6;
  outline: none;
`;

/* color: ${(props) => props.theme.light.header};
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 3.68px;
  text-transform: capitalize;
  border-radius: 36px;
  background: ${(props) => props.theme.light.exceptionalColour};
  align-self: flex-start;
  padding: 3% 20%;
  text-decoration: none;
  position: relative;
  z-index: 1;
  cursor: pointer; */

export const Button = styled.button`
  color: ${(props) => props.theme.light.header};
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 1.5em;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 3.68px;
  text-transform: capitalize;
  border-radius: 36px;
  background: ${(props) => props.theme.light.exceptionalColour};
  align-self: flex-start;
  padding: 3% 20%;
  text-decoration: none;
  position: relative;
  z-index: 1;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.light.header};
    z-index: -1;
    transition: 0.3s;
    transform: rotateX(90deg);
    border-radius: 36px;
  }
  &:hover::before {
    transform: rotateX(0deg);
  }
  &:hover {
    color: ${(props) => props.theme.light.exceptionalColour};
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.light.header};
    z-index: -1;
    transition: 0.3s;
    transform: rotateY(90deg);
    border-radius: 36px;
  }
  &:hover::after {
    transform: rotateY(0deg);
  }
  &:disabled {
    color: ${(props) => props.theme.light.paragraph};
    background-color: ${(props) => props.theme.light.secondaryBG};
    cursor: inherit;
  }
  &:disabled::after {
    width: 0;
    height: 0;
  }
  &:disabled::before {
    width: 0;
    height: 0;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25%;
  width: 45%;
`;

export const MessageSent = styled.p`
  color: ${(props) => props.theme.light.header};
`;

export const FormInnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 50%;
  justify-content: space-between;
`;
