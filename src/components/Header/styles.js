import styled from "styled-components";
import { bgPage } from "../../assets/img";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 290px;
  padding: 24px 16px;
  background-image: url(${bgPage});
  background-position: bottom;
  font-style: italic;
  color: ${(props) => props.theme.palette.text.tertiary.tertiary_2};
`;
