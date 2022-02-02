import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  font-size: 1rem;
  font-style: italic;
  font-weight: 600;
  background-color: ${(props) =>
    props.theme.palette.background.tertiary.tertiary_1};
  border-radius: 8px;
  color: ${(props) => props.theme.palette.text.tertiary.tertiary_4};
`;
