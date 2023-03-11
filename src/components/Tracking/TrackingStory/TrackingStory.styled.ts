import { styled } from "@mui/styles";
import { CardContent, Box } from "@mui/material";

export const MyCardContent = styled(CardContent)({
  display: "flex",
  flexWrap: "nowrap",
  flexDirection: "column",

  overflowY: "auto",
  overflowX: "hidden",

  "&.MuiCardContent-root": {
    paddingTop: "84px",
    minWidth: "350px",
  },
});

export const ActionsWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "2rem",
});
