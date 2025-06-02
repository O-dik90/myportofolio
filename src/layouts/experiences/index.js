import { useMemo } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import Footer from "examples/Footer";
// Material Dashboard 2 React example components
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import { Typography } from "@mui/material";
import data from "./data";

function Experiences() {
  const renderData = useMemo(
    () =>
      data ? (
        data.map((item) => (
          <Grid item xs={12} key={item.id}>
            <DefaultInfoCard icon={item.icon} title={item.title} description={item.description} />
          </Grid>
        ))
      ) : (
        <Typography>Content not Available</Typography>
      ),
    [data]
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox p={2}>
        <Grid container marginTop={2} justifyContent="center" spacing={3}>
          {renderData}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Experiences;
