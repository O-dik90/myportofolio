/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
// import FacebookIcon from "@mui/icons-material/Facebook";
import GitHub from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
// import MDTypography from "components/MDTypography";
import backgroundImage from "assets/images/bg-photo.jpg";
// import Icon from "@mui/material/Icon";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

// Material Dashboard 2 React examples
// import DataTable from "examples/Tables/DataTable";

// Data
// import data from "layouts/dashboard/components/Projects/data";

function Projects() {
  // const { columns, rows } = data();
  // const [menu, setMenu] = useState(null);

  // const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  // const closeMenu = () => setMenu(null);

  // const renderMenu = (
  //   <Menu
  //     id="simple-menu"
  //     anchorEl={menu}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "left",
  //     }}
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={Boolean(menu)}
  //     onClose={closeMenu}
  //   >
  //     <MenuItem onClick={closeMenu}>Action</MenuItem>
  //     <MenuItem onClick={closeMenu}>Another action</MenuItem>
  //     <MenuItem onClick={closeMenu}>Something else</MenuItem>
  //   </Menu>
  // );

  return (
    <MDBox position="relative">
      <MDBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="20.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.1),
              rgba(gradients.info.state, 0)
            )}, url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          position: "relative",
          mt: -10,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <ProfileInfoCard
          title="Profile Information"
          description="Hi, I’m ODIK"
          info={{
            fullName: "Odik Yudi Nugroho",
            // phone: "(62) 89 5353 0130 65",
            email: "nugrohoodik90@gmail.com",
            location: "Indonesia",
          }}
          social={[
            // {
            //   link: "https://facebook.com/nugrohoodik",
            //   icon: <FacebookIcon />,
            //   color: "facebook",
            // },
            {
              link: "https://www.instagram.com/nugroho_odik",
              icon: <InstagramIcon />,
              color: "instagram",
            },
            {
              link: "https://www.linkedin.com/in/odik-yudi-nugroho-600657165/",
              icon: <LinkedInIcon />,
              color: "linkedin",
            },
            {
              link: "https://github.com/O-dik90",
              icon: <GitHub />,
              color: "github",
            },
          ]}
          action={{ route: "", tooltip: "Edit Profile" }}
          shadow={false}
        />
      </Card>
    </MDBox>
  );
}

export default Projects;
