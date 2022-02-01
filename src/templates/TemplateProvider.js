import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import { createContext } from "react";
import { CssBaseline } from "@mui/material";

const TemplateContext = createContext(null);

export const TemplateProvider = ({ children }) => {
  const theme = createTheme({
    overrides: {
      MuiDialog: {
        paperWidthSm: {
          maxWidth: "unset",
        },
      },

      MuiDialogContent: {
        root: {
          padding: "0px 0px !important",
        },
      },

      MuiTableCell: {
        root: {
          borderBottom: "none !important",
        },
      },
    },
  });

  return (
    <TemplateContext.Provider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </TemplateContext.Provider>
  );
};
