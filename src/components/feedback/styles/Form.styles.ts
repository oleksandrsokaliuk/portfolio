import styled from "styled-components";

export const FormContainer = styled.form`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5%;
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
  text-transform: capitalize;
  background: transparent;
  border: none;
  border-bottom: 1px solid #e6e6e6;
  outline: none;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.light.header};
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
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25%;
  width: 45%;
`;

export const FormInnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 50%;
  justify-content: space-between;
`;
