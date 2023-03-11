import { styled } from "@mui/styles";
import { Box } from "@mui/material";

export const MyBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  marginBottom: "2rem",
});

export const selectStyles = {
  container: (provided: any) => ({
    ...provided,
    width: "100%",
    maxWidth: "600px",
  }),
};
