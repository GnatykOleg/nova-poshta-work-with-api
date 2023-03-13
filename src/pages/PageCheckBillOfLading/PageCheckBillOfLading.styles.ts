import { styled } from "@mui/styles";
import { Container } from "@mui/material";

export const MyContainer = styled(Container)({
  paddingTop: "3rem",
  paddingBottom: "3rem",

  "&.MuiContainer-root": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
