import styled from "styled-components";

export const Container = styled.footer`
  height: 100vh;
  display: flex;
  width: 100%;
  scroll-snap-align: start;
  overflow: hidden;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
