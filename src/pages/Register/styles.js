import styled from "styled-components";
import { bgPage } from "../../assets/img";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.palette.background.primary};
`;

export const ContainerHeader = styled.div`
  width: 100%;
  height: 104px;
  background-image: url(${bgPage});
  background-position: bottom;
`;
export const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 16px 16px;
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ContainerContent = styled.div`
  padding: 16px;
  flex: 1 0 auto;
`;

export const Content = styled.div`
  padding: 16px;
  background-color: ${(props) => props.theme.palette.background.default};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.palette.background.secondary}10;
  box-shadow: 0 0 6px 2px ${({ theme }) => theme.palette.background.secondary}10;
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.palette.background.default};
`;

export const ContainerButton = styled.div`
  flex-shrink: 0;
  padding: 16px;
`;
