import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import Footer from "examples/Footer";
// Material Dashboard 2 React example components
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
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
        <Grid marginTop={2} container justifyContent="center">
          {/* <Grid item xs={12} md={6} xl={4}>
            <DefaultProjectCard
              image={homeDecor1}
              label="project"
              title="modern"
              description="As Uber works through a huge amount of internal management turmoil."
            />
          </Grid>
          {renderData} */}
          <MDBox
            sx={{
              width: "100%",
              height: 500,
              border: "2px solid #ccc",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <iframe
              title="looker studio"
              width="100%"
              height="675"
              src="https://lookerstudio.google.com/embed/reporting/37cd31f7-4f5d-48e2-bcf7-95981c2db877/page/A"
              frameBorder="0"
              allowFullScreen
              sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            />
          </MDBox>
          {/* <Typography>Content not Available</Typography> */}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Projects;
