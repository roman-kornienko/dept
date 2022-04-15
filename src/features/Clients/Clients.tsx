import {
  StyledClientDescription,
  StyledClients,
  StyledClientTitle,
  StyledLogoImage,
  StyledLogoImageWrapper,
  StyledLogosWrapper,
} from "./Clients.styled";
import { LOGOS_PATHS } from "./constants";

const Clients = () => {
  return (
    <StyledClients>
      <StyledClientTitle>Clients</StyledClientTitle>
      <StyledClientDescription>
        We value a great working relationship with our clients above all else.
        <br />
        It’s why they often come to our parties. It’s also why we’re able to
        <br />
        challenge and inspire them to reach for the stars.
      </StyledClientDescription>
      <StyledLogosWrapper>
        {LOGOS_PATHS.map((logoPath) => {
          return (
            <StyledLogoImageWrapper key={logoPath}>
              <StyledLogoImage src={logoPath} />
            </StyledLogoImageWrapper>
          );
        })}
      </StyledLogosWrapper>
    </StyledClients>
  );
};

export default Clients;
