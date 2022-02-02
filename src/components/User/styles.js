import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Border = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid
    ${({ theme }) => theme.palette.background.tertiary.tertiary_1};
`;

export const ImgUser = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 3px solid
    ${({ theme }) => theme.palette.background.tertiary.tertiary_2};
`;
