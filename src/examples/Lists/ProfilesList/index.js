// react-routers components
// import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
// import MDButton from "components/MDButton";

function ProfilesList({ title, profiles, shadow }) {
  const renderProfiles = profiles.map(({ sym, name, description, years }) => (
    <MDBox key={name} component="li" display="flex" alignItems="center" py={1} mb={1}>
      {/* <MDBox mr={2}>
        <MDAvatar src={image} alt="something here" shadow="md" />
      </MDBox> */}
      <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
        <MDTypography variant="button" fontWeight="medium">
          {sym}
          {name}
        </MDTypography>
        <MDTypography variant="caption" color="text">
          {description}
        </MDTypography>
      </MDBox>
      <MDBox
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        ml="auto"
      >
        <MDTypography variant="caption" color="text" pl={1}>
          {years}
        </MDTypography>
      </MDBox>
    </MDBox>
  ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <MDBox pt={2} pb={0}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </MDTypography>
      </MDBox>
      <MDBox px={0.5} pl={0.5} pr={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default props for the ProfilesList
ProfilesList.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  shadow: PropTypes.bool,
};

export default ProfilesList;
