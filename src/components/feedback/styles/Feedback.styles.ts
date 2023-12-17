import styled from "styled-components";

export const Container = styled.footer`
  height: 100vh;
  display: flex;
  width: 100%;
  /* margin: 0 auto; */
  scroll-snap-align: start;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
