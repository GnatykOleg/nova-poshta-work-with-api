import { styled } from "@mui/styles";
import { TextField } from "@mui/material";

export const Form = styled("form")({
  marginBottom: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "@media screen and (min-width:768px)": {
    flexDirection: "unset",
    justifyContent: "space-between",
    marginBottom: "2rem",
  },
});

export const Input = styled(TextField)({
  margin: "20px",
  width: "100%",
  maxWidth: "400px",

  "@media screen and (min-width:1100px)": {
    maxWidth: "600px",
  },

  "&.MuiTextField-root": {
    "@media screen and (max-width:767px)": {
      marginBottom: "1rem",
    },
  },
});
