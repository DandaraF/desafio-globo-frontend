import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: ${(props) => props.pdtop || 0};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
`;

export const Text = styled.p`
  font-style: italic;
  text-align: center;
  font-size: ${(props) => props.fontsize || "1.25rem"};
  color: ${(props) => props.color || props.theme.palette.text.secondary};
  font-weight: ${(props) => props.weight || "400"};
  span {
    font-weight: 600;
  }
`;
