import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import Footer from "examples/Footer";
// Material Dashboard 2 React example components
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import { Typography } from "@mui/material";
// import data from "layouts/service/data/index";

function Services() {
  // const renderData = data.map((item) => (
  //   <Grid item xs={12} md={6} xl={4}>
  //     <DefaultInfoCard icon={item.icon} title={item.title} description={item.description} />
  //   </Grid>
  // ));
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox p={2}>
        <Grid container marginTop={2} justifyContent="center">
          {/* {renderData} */}
          <Typography>Content not Available</Typography>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Services;
