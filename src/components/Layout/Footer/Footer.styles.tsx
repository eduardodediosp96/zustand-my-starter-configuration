import styled from "@emotion/styled";
import { Breakpoint } from "@theme/Theme.types";

// @Types

export const PortfolioFooter = styled("footer")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: ${({ theme }) => `solid 2px ${theme.palette.primary()}`};
  height: ${(props) => props.theme.sizing.footer};
  position: sticky;
  background-color: ${({ theme }) => theme.palette.background()};
  bottom: 0;
  box-sizing: border-box;

  .mobile-footer {
    display: none;
  }

  ${(props) => props.theme.breakpoints.down(Breakpoint.mobileL)} {
    height: ${(props) => props.theme.sizing.footerMobile};
    .desktop-footer {
      display: none;
    }
    .mobile-footer {
      display: flex;
    }
  }
`;
