import styled from "styled-components";
import { gray5 } from "../../colors";
import { maxScreensSizesPx } from "../../constants";

export const StyledClients = styled.div`
  padding: 60px 0;
  margin-bottom: 40px;
  background-color: ${gray5};
`;

export const StyledClientTitle = styled.div`
  font-size: 4vw;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: ${maxScreensSizesPx.tablet}) {
    font-size: 5vw;
  }
`;

export const StyledClientDescription = styled.div`
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
`;

export const StyledLogosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  width: fit-content;
  margin: 20px auto 0;

  @media (max-width: ${maxScreensSizesPx.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 517px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledLogoImageWrapper = styled.div`
  height: 120px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLogoImage = styled.img`
  object-fit: contain;
`;
