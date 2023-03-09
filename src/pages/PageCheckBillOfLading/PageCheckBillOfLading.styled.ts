import { styled } from "@mui/styles";
import { Box } from "@mui/material";

export const DataWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "@media screen and (min-width:1200px)": {
    justifyContent: "space-between",
    flexDirection: "unset",
    alignItems: "unset",
  },
});
