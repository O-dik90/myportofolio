// Material Dashboard 2 React example components
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

import data from "layouts/service/data/index";

function Services() {
  const renderData = data.map((item) => (
    <Grid item xs={12} md={6} xl={4}>
      <DefaultInfoCard icon={item.icon} title={item.title} description={item.description} />
    </Grid>
  ));
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox p={2} justifyContent="flex-start">
        <Grid container spacing={6}>
          {renderData}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Services;
