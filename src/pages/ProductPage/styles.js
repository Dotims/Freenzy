import { Snackbar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledProcuctItem = styled("section")(({ theme }) => ({
  width: "90%",
  margin: "50px auto 150px auto",
  maxWidth: "1250px",
  boxShadow: "0 6px 28px 0 rgba(31, 38, 135, 0.37)",
  borderRadius: 10,
  overflow: "hidden",
  [theme.breakpoints.up("xl")]: {
    margin: "150px auto",
  },
}));

export const ContainerProduct = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));

export const WrapperProductImg = styled("div")(({ theme }) => ({
  height: 350,
  width: "100%",
  [theme.breakpoints.up("lg")]: { width: "35%" },
}));

export const StyledImgProduct = styled("img")(({ theme }) => ({
  width: "100%",
  objectFit: "cover",
  height: "100%",
}));

export const ProductContent = styled("section")(({ theme }) => ({
  padding: "25px 30px 25px 30px",
  position: "relative",
  width: "65%",
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
  width: "100%",
  "& > h5, a": {
    textAlign: "center",
    background: "#e6e6e6",
    margin: "25px 10px",
    color: "black",
    padding: "15px 25px",
    borderRadius: "25px",
    border: "2px dashed red",
    fontSize: "16px",
    fontWeight: "bold",
    transition: ".4s",
    "&:hover": {
      background: "#f6e58d",
      cursor: "pointer",
    },
  },
  "& > a": {
    background: "#ff3838",
    color: "white",
    textDecoration: "none",
    border: "none",
    "&:hover": {
      background: "#db3535",
    },
  },
}));

export const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  "&.MuiSnackbar-root": {
    [theme.breakpoints.up("sm")]: {},
  },
}));
