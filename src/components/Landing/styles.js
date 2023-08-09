import { styled } from "@mui/material/styles";

export const StyledLandingContainer = styled("main")(({ theme }) => ({
  width: "90%",
  margin: "100px auto 150px auto",
  maxWidth: "1250px",
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledHeroSection = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    height: "450px",
    background: "#ff3838",
    flexDirection: "row",
  },
}));

export const StyledHeroContent = styled("div")(({ theme }) => ({
  background: "white",
  margin: 0,
  flex: 1,
  padding: 25,
  "& > h3": {
    fontSize: 24,
  },
  "& > h2": {
    fontSize: 32,
  },
  "& > p": {
    fontSize: 18,
  },
  "& > a": {
    marginTop: 50,
    fontSize: 18,
    padding: 15,
    textDecoration: "none",
    color: "white",
    fontWeight: 700,
    display: "inline-block",
    background: "#ff3838",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledHeroImageWrapper = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  height: "100%",
  width: "100%",
  "& > img": {
    width: "100%",
    objectFit: "cover",
    height: "250px",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    "& > img": {
      width: "80%",
    },
  },
}));

export const StyledBenefitSection = styled("div")(({ theme }) => ({
  marginTop: 100,
  display: "grid",
  rowGap: "25px",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "repeat(4, 1fr)",
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    gap: "100px 50px",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(2, 200px)",
  },
}));

export const StyledBenefit = styled("div")(({ theme }) => ({
  display: "flex",
  rowGap: 25,
  flexDirection: "column",
  "& > img": {
    height: "150px",
  },
  [theme.breakpoints.up("md")]: {
    columnGap: 25,
    flexDirection: "row",
  },
  [theme.breakpoints.up("lg")]: {
    "& > img": {
      height: "100%",
    },
  },
}));

export const StyledLastProductsWrapper = styled("div")(({ theme }) => ({
  marginTop: 100,
  "& > h3": {
    fontSize: 24,
  },
  "& > h2": {
    fontSize: 32,
  },
  "& > p": {
    fontSize: 18,
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const StyledLastProducts = styled("div")(({ theme }) => ({
  marginTop: 25,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: 25,
  flexWrap: "wrap",
  "& > a": {
    flex: 1,
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));
