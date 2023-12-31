import { styled } from "@mui/material/styles";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export const StyledFooter = styled("footer")(({ theme }) => ({
  width: "100%",
  padding: "20px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "18px",
  background: "#2f3640",
  minHeight: "225px",
  flexDirection: "column",
}));

export const StyledContactWrapper = styled("section")(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  marginBottom: "40px",
  "> div": {
    display: "flex",
    flexDirection: "column",
  },
  "& p": {
    width: "100%",
    fontWeight: "300",
    fontSize: "16px",
  },
  [theme.breakpoints.up("md")]: {
    width: "30%",
  },
  [theme.breakpoints.up("lg")]: {
    justifyContent: "center",
  },
}));

export const StyledLinks = styled("div")(({ theme }) => ({
  width: "80%",
  display: "flex",
  rowGap: "10px",
  flexDirection: "column",
  paddingTop: "20px",
  "& a": {
    color: "white",
    textDecoration: "none",
    padding: "10px 0 0 0",
    transition: ".3s",
    "&:hover": {
      color: "#ff3c3c",
    },
    [theme.breakpoints.up("md")]: {
      padding: "15px 0 0 0",
      alignItems: "space-around",
      justifyContent: "center",
    },
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    columnGap: "35px",
  },
}));

export const StyledAlternateEmailIcon = styled(AlternateEmailIcon)(
  ({ theme }) => ({
    fontSize: "30px ",
    marginRight: "10px",
    padding: "0px !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "40px ",
    },
  })
);

export const EmailWrapper = styled("div")(({ theme }) => ({
  fontSize: "19px",
  display: "flex",
  marginTop: 45,
  "& a": {
    padding: "0px",
    position: "absolute",
    fontSize: "17px",
  },
  "& div > a": {
    padding: 0,
  },
}));
