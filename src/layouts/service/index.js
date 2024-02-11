// Material Dashboard 2 React example components
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";

function Services() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <p>Content Projects</p>
      <MDBox p={2}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} xl={4}>
            <DefaultProjectCard
              image={homeDecor1}
              label="project #1"
              title="modern"
              description="As Uber works through a huge amount of internal management."
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
          <Grid item xs={12} md={6} xl={4}>
            <DefaultProjectCard
              image={homeDecor2}
              label="project #2"
              title="scandinavian"
              description="Music is something that everyone has their own specific opinion about."
            />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <DefaultProjectCard
              image={homeDecor3}
              label="project #3"
              title="minimalist"
              description="Different people have different taste, and various types of music."
            />
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Services;
