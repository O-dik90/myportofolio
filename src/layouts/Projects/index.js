import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import Footer from "examples/Footer";
// Material Dashboard 2 React example components
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import { Typography } from "@mui/material";
// import data from "layouts/Projects/data/index";
// import homeDecor1 from "assets/images/home-decor-1.jpg";

function Projects() {
  // const renderData = data.map((item) => (
  //   <Grid item xs={12} md={6} xl={4} key={`${item.label}`}>
  //     <DefaultProjectCard
  //       image={homeDecor1}
  //       label={item.label}
  //       title={item.title}
  //       description={item.description}
  //     />
  //   </Grid>
  // ));
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox p={2}>
        <Grid container spacing={6} justifyContent="center">
          {/* <Grid item xs={12} md={6} xl={4}>
            <DefaultProjectCard
              image={homeDecor1}
              label="project"
              title="modern"
              description="As Uber works through a huge amount of internal management turmoil."
            />
          </Grid>
          {renderData} */}
          <Typography>Content not Available</Typography>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Projects;
