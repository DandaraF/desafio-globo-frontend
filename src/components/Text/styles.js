import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.palette.text.tertiary.tertiary_1};
`;
