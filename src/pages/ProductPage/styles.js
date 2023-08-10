import { styled } from "@mui/material/styles";

export const StyledProcuctItem = styled("section")(({ theme }) => ({
  width: "90%",
  margin: "150px auto",
  maxWidth: "1250px",
  boxShadow: "0 6px 28px 0 rgba(31, 38, 135, 0.37)",
  borderRadius: 10,
  overflow: "hidden",
  [theme.breakpoints.up("xxl")]: {
    width: "100%",
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
  padding: "25px 30px 0px 30px",
  position: "relative",
  width: "65%",
  "& > h3": {
    color: "#2ecc71",
    fontWeight: 900,
  },
  "& > h4": {
    color: "#c0392b",
    fontWeight: 900,
  },
  "& > p:last-of-type": {
    margin: "0 0 20px 0",
    textAlign: "end",
    fontWeight: "bold",
    position: "absolute",
    bottom: "0",
    right: "35px",
  },
  "& > span": {
    color: "orange",
    fontWeight: "600",
    fontSize: "18px",
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
    width: "40%",
    textAlign: "center",
    background: "#e6e6e6",
    margin: "25px 10px",
    color: "black",
    padding: "15px",
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
