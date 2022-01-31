import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div``;

export const Text = styled.p`
  font-style: italic;
  font-size: ${(props) => props.fontsize || "1.25rem"};
  color: ${(props) => props.color || props.theme.palette.text.secondary};
  font-weight: ${(props) => props.weight || "400"};
  span {
    font-weight: 600;
  }
`;
