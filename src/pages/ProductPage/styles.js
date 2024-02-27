import { Snackbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const StyledBackBtn = styled(Link)(({ theme }) => ({
  display: "inline-block",
  textDecoration: "none",
  marginBottom: 25,
  "& > span": {
    display: "flex",
    alignItems: "center",
    columnGap: 2,
    fontSize: 24,
    color: "black",
    fontWeight: 700,
  },
  "& svg": {
    transition: "transform 0.2s",
  },
  "&:hover svg": {
    transform: "translateX(-2px)",
  },
  [theme.breakpoints.up("xl")]: {},
}));

export const StyledProductWrapper = styled("main")(({ theme }) => ({
  width: "90%",
  margin: "50px auto 150px auto",
  maxWidth: "1400px",
  [theme.breakpoints.up("xl")]: {
    margin: "150px auto",
  },
}));

export const StyledProcuct = styled("div")(({ theme }) => ({
  boxShadow: "0 6px 28px 0 rgba(31, 38, 135, 0.37)",
  borderRadius: 10,
  overflow: "hidden",
  [theme.breakpoints.up("xl")]: {},
}));

export const StyledProductInner = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));

export const WrapperProductImg = styled("div")(({ theme }) => ({
  height: 250,
  width: "100%",
  [theme.breakpoints.up("md")]: { height: 450 },
  [theme.breakpoints.up("lg")]: { flex: 0.7 },
}));

export const StyledImgProduct = styled("img")(({ theme }) => ({
  width: "100%",
  objectFit: "cover",
  height: "100%",
}));

export const ProductContent = styled("section")(({ theme }) => ({
  padding: "25px 30px 25px 30px",
  position: "relative",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "& h1": {
    fontWeight: 900,
    fontSize: "20px",
  },
  "& > h3": {
    color: "#2ecc71",
    fontWeight: 900,
  },
  "& > h4": {
    color: "#c0392b",
    fontWeight: 900,
  },
  "& > .date": {
    textAlign: "right",
  },
  "& > span": {
    color: "orange",
    fontWeight: "600",
    fontSize: "18px",
  },
  [theme.breakpoints.up("lg")]: {
    "& h1": {
      fontSize: "32px",
    },
  },
}));

export const ProductDetails = styled("section")(({ theme }) => ({
  height: "100%",
  border: "2px solid red",
}));

export const PromoCode = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  columnGap: 10,
  margin: "25px 0",
  "& > span, a": {
    width: "100%",
    maxWidth: 250,
    height: 50,
    textAlign: "center",
    background: "#e6e6e6",
    boxSizing: "border-box",
    margin: "5px 0",
    color: "black",
    padding: "15px 25px",
    borderRadius: "25px",
    border: "2px dashed red",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "0.2s",
    "&:hover": {
      background: "#f6e58d",
      cursor: "pointer",
    },
  },
  "& > span": {
    display: "flex",
    columnGap: 5,
    alignItems: "center",
    color: "red",
    justifyContent: "center",
  },
  "& > a": {
    background: "#DB2134",
    color: "white",
    textDecoration: "none",
    border: "none",
    "&:hover": {
      background: "#db3535",
    },
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
    flexDirection: "row",
    maxWidth: "none",
  },
}));

export const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  "&.MuiSnackbar-root": {
    [theme.breakpoints.up("sm")]: {},
  },
}));
