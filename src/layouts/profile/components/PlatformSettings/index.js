// import { useState } from "react";

import Arduino from "assets/images/arduino.png";
import Autocad from "assets/images/autocad.png";
// @mui material components
import Card from "@mui/material/Card";
import CorelDraw from "assets/images/corel.png";
import Csharp from "assets/images/csharp.png";
import Css from "assets/images/css.png";
import Html from "assets/images/html.png";
import Js from "assets/images/js_1.png";
// import Switch from "@mui/material/Switch";
import MDAvatar from "components/MDAvatar";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Python from "assets/images/python.png";
import ReactJs from "assets/images/reactjs.png";
import Solidworks from "assets/images/solidwork.png";
import Sqlserver from "assets/images/sqlserver.png";

function PlatformSettings() {
  return (
    <Card sx={{ boxShadow: "none" }}>
      <MDBox py={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          skill
        </MDTypography>
      </MDBox>
      <MDBox mt={0} pb={2} px={2} lineHeight={1.25}>
        <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="capitalize">
          Programming
        </MDTypography>
        <MDBox display="flex" alignItems="center" mt={1} mb={0.5} ml={0}>
          <MDAvatar src={Python} alt="profile-image" size="sm" shadow="sm" />
          <MDAvatar src={Js} alt="profile-image" size="sm" shadow="sm" />
          <MDAvatar src={Html} alt="profile-image" size="sm" shadow="sm" />
          <MDAvatar src={Css} alt="profile-image" size="sm" shadow="sm" />
        </MDBox>
        <MDBox display="flex" alignItems="center" mt={1} mb={0.5} ml={0}>
          <MDAvatar src={Csharp} alt="profile-image" size="sm" shadow="sm" />
          <MDAvatar src={Sqlserver} alt="profile-image" size="sm" shadow="sm" />
          <MDAvatar src={ReactJs} alt="profile-image" size="sm" shadow="sm" />
        </MDBox>
        <MDBox mt={1}>
          <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="capitalize">
            design 3d
          </MDTypography>
          <MDBox display="flex" alignItems="center" mt={1} mb={0.5}>
            <MDAvatar src={Solidworks} alt="profile-image" size="sm" shadow="sm" />
            <MDAvatar src={Autocad} alt="profile-image" size="sm" shadow="sm" />
            <MDAvatar src={CorelDraw} alt="profile-image" size="sm" shadow="sm" />
          </MDBox>
        </MDBox>
        <MDBox mt={1}>
          <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="capitalize">
            other
          </MDTypography>
          <MDBox display="flex" alignItems="center" mt={1} mb={0.5}>
            <MDAvatar src={Arduino} alt="profile-image" size="sm" shadow="sm" />
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default PlatformSettings;
