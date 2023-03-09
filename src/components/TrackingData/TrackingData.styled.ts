import { CardContent, Card } from "@mui/material";
import { styled } from "@mui/styles";

export const MyCard = styled(Card)({
  width: "100%",
  minHeight: "312px",
  maxWidth: "468px",
  "@media screen and (max-width:1199px)": {
    marginBottom: "1rem",
  },
});

export const MyCardContent = styled(CardContent)({
  "& :not(:last-child)": {
    marginBottom: "1rem",
  },
});
