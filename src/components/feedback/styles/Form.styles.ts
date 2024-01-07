import styled from "styled-components";
import { screenSizes } from "../../../generalStyles/GlobalStyles";

export const FormContainer = styled.form`
  display: flex;
  padding: 10% 50px 10% 20px;
  flex: 3 0 60%;
  border-left: 5px solid ${(props) => props.theme.light.secondaryBG};
  @media (max-width: ${screenSizes.l}) {
    padding: 35% 50px 35% 20px;
  }
  @media (max-width: ${screenSizes.s}) {
    padding: 15% 10px 25% 10px;
    border-left: none;
    background-color: #888787;
  }
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
  margin-bottom: 20px;
  @media (max-width: ${screenSizes.s}) {
    font-size: 1.4rem;
  }
`;

export const Input = styled.input`
  color: ${(props) => props.theme.light.header};
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 0.8em;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 3.68px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #e6e6e6;
  outline: none;
  padding: 0 10px 5px 10px;
  &:focus {
    border-bottom: 2px solid ${(props) => props.theme.light.exceptionalColour};
  }
`;

export const InputText = styled.textarea`
  color: ${(props) => props.theme.light.header};
  font-family: ${(props) => props.theme.light.secondaryFont};
  font-size: 0.8em;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 3.68px;
  background: transparent;
  outline: none;
  border: 1px solid #e6e6e6;
  min-height: 100px;
  padding: 10px 10px 0 10px;
  &::placeholder {
  }
  &:focus {
    border: 2px solid ${(props) => props.theme.light.exceptionalColour};
  }
`;

export const ButtonErrorContainer = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 40px;
  align-items: center;
  min-height: 50px;
  @media (max-width: ${screenSizes.l}) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
`;

export const ErrorContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: auto;
  gap: 5px;
  flex-wrap: wrap;
  @media (max-width: ${screenSizes.l}) {
    margin: 0 auto;
    padding-left: 20px;
  }
`;

export const Error = styled.li`
  color: white;
  font-size: 0.9rem;
  color: #ff1611;
  letter-spacing: 2px;
  @media (max-width: ${screenSizes.l}) {
    font-size: 1rem;
  }
`;

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
  border: none;
  padding: 0 60px;
  background: ${(props) => props.theme.light.exceptionalColour};
  text-decoration: none;
  position: relative;
  z-index: 1;
  cursor: pointer;
  height: 100%;
  height: 50px;

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
  @media (max-width: ${screenSizes.s}) {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const ItemContainerWholeWidth = styled(ItemContainer)`
  width: 100%;
  align-self: center;
`;

export const FormInnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
`;
