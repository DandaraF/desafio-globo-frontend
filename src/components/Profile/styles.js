import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 96px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.div`
  height: 100%;
  padding-top: ${(props) => props.padTop};
`;
export const DataUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.palette.text.tertiary.tertiary_2};
`;

export const Logo = styled.img`
  width: 50px;
  height: 37px;
`;

export const More = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
