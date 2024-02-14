// Material Dashboard 2 React example components
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import homeDecor1 from "assets/images/home-decor-1.jpg";

import data from "layouts/Projects/data/index";

function Projects() {
  const renderData = data.map((item) => (
    <Grid item xs={12} md={6} xl={4} key={`${item.label}`}>
      <DefaultProjectCard
        image={homeDecor1}
        label={item.label}
        title={item.title}
        description={item.description}
      />
    </Grid>
  ));
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox p={2}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} xl={4}>
            <DefaultProjectCard
              image={homeDecor1}
              label="project"
              title="modern"
              description="As Uber works through a huge amount of internal management turmoil."
              // action={{
              //   type: "internal",
              //   route: "/pages/profile/profile-overview",
              //   color: "info",
              //   label: "view project",
              // }}
              // authors={[
              //   { image: team1, name: "Elena Morison" },
              //   { image: team2, name: "Ryan Milly" },
              //   { image: team3, name: "Nick Daniel" },
              //   { image: team4, name: "Peterson" },
              // ]}
            />
          </Grid>
          {renderData}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Projects;
