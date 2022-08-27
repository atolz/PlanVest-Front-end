import { createTheme, experimental_sx as sx } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import appVars from "../styles/variables.module.scss";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: appVars.colorPrimary,
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: appVars.colorError,
    },
    background: {
      default: "#F0F2F5",
    },
  },
  typography: {
    fontFamily: appVars.fontPrimary,
    htmlFontSize: 10,
    lineHeight: 24,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        fullWidth: true,
        sx: {
          borderRadius: appVars.borderRadiusPrimary,
          height: appVars.heightBtn,
          fontSize: "1.5rem",
          fontWeight: 600,
          lineHeight: "24px",
          // letterSpacing: 0.8,
          textTransform: "unset",
        },
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: appVars.borderRadiusPrimary,
          height: appVars.heightBtn,
          fontSize: "1.5rem",
          fontWeight: 600,
          lineHeight: "24px",
          // letterSpacing: 0.8,
          textTransform: "unset",
          ...(ownerState.variant == "outlined" && {
            border: "1.8px solid",
          }),
        }),
      },
    },

    MuiLoadingButton: {
      defaultProps: {
        // loadingPosition: "start",
        sx: {
          "&.MuiLoadingButton-loading": {
            backgroundColor: appVars.colorPrimary,
            // opacity: "90%",
          },
        },
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          "&.MuiLoadingButton-loading": {
            backgroundColor: appVars.colorPrimary,
            // opacity: "90%",
          },
        }),
      },
    },

    MuiInputLabel: {
      defaultProps: {
        sx: {
          color: appVars.colorLabel,

          "&.Mui-focused.MuiInputLabel-shrink": {
            fontSize: "1.8rem",
          },
          "&.MuiInputLabel-shrink.MuiFormLabel-filled": {
            fontSize: "1.8rem",
            color: appVars.colorPrimary,
            transform: "translate(1.6rem, 7px) scale(0.75)",
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        sx: {
          borderRadius: appVars.borderRadiusPrimary,
          overflow: "hidden",
          bgcolor: `${appVars.colorInput} !important`,
          // bgcolor: "red",
        },
      },
      // styleOverrides: {
      //   fullWidth: true,
      //   sx: {
      //     borderRadius: appVars.borderRadiusPrimary,
      //     overflow: "hidden",
      //   },
      // },
    },
    MuiFilledInput: {
      defaultProps: {
        fullWidth: true,
        disableUnderline: true,
        sx: {
          borderRadius: appVars.borderRadiusPrimary,
          height: appVars.heightInput,
          border: `1px solid transparent`,
          bgcolor: `${appVars.colorInput} !important`,
          "&.Mui-focused": {
            border: `1px solid ${appVars.colorPrimary}`,
          },
          "& .MuiFilledInput-input": {
            color: appVars.colorPrimaryDark,
            fontFamily: appVars.fontSecondary,
            fontWeight: 500,
            fontSize: "1.6rem",
            paddingLeft: "1.6rem",
          },
        },
      },
      // styleOverrides: {
      //   fullWidth: true,
      //   disableUnderline: true,
      //   sx: {
      //     borderRadius: appVars.borderRadiusPrimary,
      //     height: appVars.heightInput,
      //     border: `1px solid transparent`,
      //     "&.Mui-focused": {
      //       border: `1px solid ${appVars.colorPrimary}`,
      //     },
      //     "& .MuiFilledInput-input": {
      //       color: appVars.colorPrimaryDark,
      //       fontFamily: appVars.fontSecondary,
      //       fontWeight: 500,
      //       fontSize: "1.6rem",
      //       paddingLeft: "1.6rem",
      //     },
      //   },
      // },
    },
    MuiDialog: {
      defaultProps: {
        fullWidth: true,
        scroll: "paper",
        sx: {
          "& .MuiDialog-container .MuiDialog-paper": {
            borderRadius: appVars.borderRadiusPrimary,
            boxShadow: "none",
          },
          "& .MuiDialog-container": {
            maxWidth: "59.3rem",
            margin: "auto",
          },
        },
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          "& .MuiBackdrop-root": {
            // backgroundColor: "rgba(45, 45, 53, 0.8)",
            // opacity: "0.5 !important",
            // transition: "all !important",
          },
          "& .MuiDialog-container .MuiDialog-paper": {
            borderRadius: appVars.borderRadiusPrimary,
            boxShadow: "none",
          },
          "& .MuiDialog-container": {
            maxWidth: "59.3rem",
            margin: "auto",
          },
        }),
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: appVars.borderRadiusPrimary,
        }),
      },
    },
  },
});

export default theme;
