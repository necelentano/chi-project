const styles = {
  appbar: {
    bgcolor: "#F7F8FC",
  },
  mobileMenuIcon: {
    color: "#252733",
    mt: { sm: "0px", xs: "-60px" },
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: { sm: "space-between", xs: "flex-start" },
    width: "100%",
    py: "20px",
    flexDirection: { sm: "row", xs: "column" },
  },
  headerTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#252733",
  },
  headerMiddleSectionWrapper: {
    display: "flex",
    alignItems: "center",
    ml: { xs: "auto" },
  },
  iconsWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    color: "#C5C7CD",
    width: "22px",
    height: "22px",
  },
  notificationBadge: {
    "& .MuiBadge-badge": {
      backgroundColor: "primary",
      border: "1px solid #F7F8FC",
    },
  },
  notificationIcon: {
    color: "#C5C7CD",
    width: "22px",
    height: "22px",
    ml: "25px",
  },
  divider: {
    ml: "32px",
    display: { md: "block", sm: "none", xs: "none" },
  },
  userNameWrapper: {
    color: "#252733",
    fontSize: "14px",
    ml: "32px",
    fontWeight: "600",
    display: { sm: "block", xs: "none" },
  },
  usernameAvatarWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  menuWrapper: {
    ml: "14px",
  },
  avatar: { width: 40, height: 40, border: "2px solid #C5C7CD" },
};

export default styles;
