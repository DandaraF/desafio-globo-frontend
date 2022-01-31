import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  font-style: italic;
  color: ${(props) => props.theme.palette.text.tertiary.tertiary_1};
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.palette.text.tertiary.tertiary_2};
`;
export const ImgUser = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid #ed4d77;
`;

export const Name = styled.p`
  font-size: 1.25rem;
`;

export const Email = styled.p`
  font-size: 0.5rem;

  color: ${(props) => props.theme.palette.text.tertiary.tertiary_2}95;
`;
