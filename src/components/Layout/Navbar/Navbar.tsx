// @Icons
import { MoonIcon, SunIcon } from "@icons";

// @Styles
import { PortfolioNavbar, NavbarSection } from "./Navbar.styles";
import NavbarLogo from "./components/NavbarLogo";
import CartButton from "./components/CartButton";

// @Types

type NavbarProps = {
  colorMode: "light" | "dark";
  setColorTheme: (colorMode: "light" | "dark") => void;
};

const Navbar = ({ colorMode, setColorTheme }: NavbarProps) => {
  return (
    <PortfolioNavbar>
      <NavbarLogo colorMode={colorMode} />
      <NavbarSection>
        <div
          onClick={() =>
            setColorTheme(colorMode === "light" ? "dark" : "light")
          }
        >
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </div>
        <CartButton />
      </NavbarSection>
    </PortfolioNavbar>
  );
};

export default Navbar;
