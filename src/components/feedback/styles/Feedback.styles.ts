import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
