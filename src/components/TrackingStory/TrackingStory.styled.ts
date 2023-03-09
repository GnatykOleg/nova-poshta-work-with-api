import { styled } from "@mui/styles";
import { CardContent, Card } from "@mui/material";

export const MyCard = styled(Card)({
  width: "100%",
  maxWidth: "468px",
});

export const MyCardContent = styled(CardContent)({
  display: "flex",
  flexWrap: "nowrap",
  flexDirection: "column",
  height: "300px",
  overflowY: "auto",
  overflowX: "hidden",
});
