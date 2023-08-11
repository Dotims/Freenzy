import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const StyledProductsWrapper = styled("main")(({ theme }) => ({
  width: "90%",
  margin: "150px auto",
  maxWidth: "1400px",
  "& > h2": {
    position: "relative",
    display: "inline-block",
    marginTop: 0,
    marginBottom: 30,
    fontSize: 32,
    fontWeight: 900,
    "&::after": {
      content: "''",
      bottom: -2,
      right: -10,
      width: 100,
      height: 10,
      background: "#ff3838",
      position: "absolute",
      display: "block",
      zIndex: -1,
    },
  },
  [theme.breakpoints.up("md")]: {
    "& > h2": {
      fontSize: 38,
    },
  },
  [theme.breakpoints.up("lg")]: {
    "& > h2": {
      fontSize: 42,
    },
  },
}));

export const ProductsBox = styled("section")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  justifyItems: "center",
  gap: "25px",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  [theme.breakpoints.up("xl")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
}));

export const StyledProduct = styled(Link)(({ theme }) => ({
  overflow: "hidden",
  width: "100%",
  maxWidth: 450,
  background: "rgba(255, 255, 255, 0.5)",
  boxShadow: "0 6px 28px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(9px)",
  webkitBackdropFilter: "blur(9px)",
  borderRadius: "15px",
  textDecoration: "none",
  transition: "0.2s",
  display: "flex",
  flexDirection: "column",
  color: "black",
  "&:hover": {
    cursor: "pointer",
    transform: "translateY(-5px)",
  },
  "& section": {
    flex: 1,
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  "& img": {
    width: "100%",
    objectFit: "cover",
    height: 200,
  },
  "& h2": {
    textAlign: "center",
    fontSize: "18px",
  },
  "& a": {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    fontweight: "800",
    width: 180,
    textAlign: "center",
    color: "white",
    background: "#ff3838",
    padding: "13px",
    borderRadius: "15px",
    alignItems: "center",
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {
    "& img": {
      height: 200,
    },
    "& h2": {
      textAlign: "center",
      fontSize: "20px",
    },
  },
  [theme.breakpoints.up("xl")]: {
    "& img": {
      height: 250,
    },
  },
}));

export const StyledPrice = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "15px 0",
  alignItems: "center",
  justifyContent: "center",
  "& s": {
    marginRight: "15px",
    fontWeight: "700",
    fontSize: "19px",
  },
  "& h3": {},
}));
