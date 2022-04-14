import styled from "styled-components";
import { maxScreensSizesPx } from "../../constants";

export const StyledQuestionForm = styled.div`
  max-width: 1340px;
  margin: 0 auto;
`;

export const StyledQuestionFormInner = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;

  @media (max-width: ${maxScreensSizesPx.tablet}) {
    flex-wrap: wrap;
  }
`;

export const StyledQuestionFormTitle = styled.div`
  width: 30%;
  margin-right: 60px;
  font-size: 4vw;
  text-transform: uppercase;

  @media (max-width: ${maxScreensSizesPx.tablet}) {
    font-size: 6vw;
    width: 100%;
    margin-bottom: 20px;
  }
  @media (max-width: ${maxScreensSizesPx.mobile}) {
    font-size: 8vw;
  }
`;

export const StyledForm = styled.div`
  width: 100%;
  margin-bottom: 60px;

  button {
    margin-top: 30px;
  }
`;

export const StyledRow = styled.div`
  width: 100%;
  display: flex;

  > .MuiFormControl-root:first-child {
    margin-right: 20px;
  }

  margin-bottom: 40px;

  @media (max-width: ${maxScreensSizesPx.mobile}) {
    flex-wrap: wrap;
    > .MuiFormControl-root {
      width: 100%;

      &:first-child {
        margin-bottom: 20px;
      }
    }
    margin-bottom: 20px;
  }
`;
