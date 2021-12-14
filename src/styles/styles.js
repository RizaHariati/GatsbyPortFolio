const paper = {
  height: "100%",
  width: "100%",
  display: "flex",
  backgroundColor: "transparent",
  flexDirection: { md: "column", xs: "row" },
  alignItems: "center",
  justifyContent: "space-between",
  padding: 2,
  paddingInline: { md: 0, sm: 2, xs: 1 },
}
const paperSocial = {
  height: "fit-content",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "transparent",
  alignItems: "center",
  justifyContent: "space-between",
  rowGap: 4,
  padding: 2,
  paddingInline: { md: 0, sm: 2, xs: 1 },
}

const gridBanner = {
  width: "100%",
  height: { md: "100%", sm: "85%", xs: "85%" },
}
const fullDivider = { width: "100%", marginBlock: 2 }
const paperBanner = {
  height: "fit-content",
  minHeight: "calc(100vh - 60px)",
  width: "100%",
  display: "flex",
  backgroundColor: "transparent",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: { md: 2, sm: 1, xs: 1 },
  paddingInline: { md: 3, sm: 2, xs: 1 },
}
const cardActions = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 1,
  borderBottom: "0.5px solid gray",
}

const sideAvatar = {
  border: "2px solid white",
  height: { md: "100px", sm: "70px", xs: "40px" },
  width: { md: "100px", sm: "70px", xs: "40px" },
}

const titleFont = {
  fontSize: { xs: "24px", sm: "28px", md: "32px" },
  width: "100%",
  align: "left",
}
const descriptionFont = {
  fontSize: { xs: "16px", md: "18px" },
  letterSpacing: { xs: "0px", md: "0.5px" },
  align: "left",
}
const imageGrid = {
  width: "100%",
  margin: "auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingInline: { md: 5, sm: 2, xs: 0 },
}
const smallGrid = {
  width: "100%",
  paddingInline: { md: 5, sm: 2, xs: 0 },
}
const subMenuBtnContainer = {
  width: "100%",
  height: "50px",
}
const subMenuBtn = {
  fontSize: { xs: "16px", sm: "18px", md: "16px" },
  width: "100%",
  align: "left",
}
const social = {
  background: "transparent",
  width: 40,
  height: 40,
}
export {
  paper,
  descriptionFont,
  gridBanner,
  paperBanner,
  cardActions,
  sideAvatar,
  titleFont,
  fullDivider,
  imageGrid,
  smallGrid,
  subMenuBtnContainer,
  subMenuBtn,
  paperSocial,
  social,
}
