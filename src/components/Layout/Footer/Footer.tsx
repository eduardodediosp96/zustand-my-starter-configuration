// @Components
import Typography from "@commonComponents/Typography/Typography";

// @Styles
import { PortfolioFooter } from "./Footer.styles";

const Footer = () => {
  return (
    <PortfolioFooter>
      <Typography variant="subtitle" className="desktop-footer">
        Design and code by Daniela Argumanis © 2023
      </Typography>
      <Typography variant="subtitle" className="mobile-footer">
        Daniela Argumanis © 2023
      </Typography>
    </PortfolioFooter>
  );
};

export default Footer;
