import styled from "styled-components";
import { black, white } from "../../colors";
import { StyledTextBody } from "../../Typography";

export const StyledFooterWrapper = styled.div`
  width: 100%;
  background-color: ${black};
`;

export const StyledFooter = styled.div`
  max-width: 1340px;
  margin: 0 auto;
  padding: 90px 0;
`;

export const StyledFooterInner = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const StyledLogo = styled(StyledTextBody)`
  font-size: 2rem;
  font-weight: bold;
  font-family: sans-serif;
  color: ${white};
`;
