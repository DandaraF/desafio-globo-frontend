import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 8px;
  height: 28px;
  border: 1px solid ${(props) => props.theme.palette.text.secondary}24;
`;

export const Text = styled.p`
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.text.secondary};
`;
