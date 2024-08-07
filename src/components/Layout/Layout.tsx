// @Components
import Navbar from "@components/Layout/Navbar/Navbar";

// @Router
import { Outlet } from "react-router";

// @Styles
import {
  MainBody,
  MainContainer,
  MainLayout,
} from "@components/Layout/Layout.styles";

// @Theme
import getTheme from "@theme/Theme";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";

const Layout = () => {
  const [colorMode, setColorTheme] = useState<"light" | "dark">("light");
  const theme = getTheme(colorMode);

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <MainContainer>
          <Navbar colorMode={theme.colorMode} setColorTheme={setColorTheme} />
          <MainBody>
            <Outlet />
          </MainBody>
        </MainContainer>
      </MainLayout>
    </ThemeProvider>
  );
};

export default Layout;
