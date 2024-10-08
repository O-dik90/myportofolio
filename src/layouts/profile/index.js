// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Divider from "@mui/material/Divider";
// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
import Footer from "examples/Footer";
import GitHub from "@mui/icons-material/GitHub";
// @mui material components
import Grid from "@mui/material/Grid";
// Overview page components
import Header from "layouts/profile/components/Header";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import profilesListAch from "layouts/profile/data/profilesListAch";
// Data
// import profilesListData from "layouts/profile/data/profilesListData";
import profilesListEducation from "layouts/profile/data/profilesListEducation";
import profilesListLang from "layouts/profile/data/profilesListLang";
// import profilesListCert from "layouts/profile/data/profilesListCert";
import profilesListOrg from "layouts/profile/data/profilesListOrg";

// Images
function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2 }} />
              <PlatformSettings />
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2 }} />
              <ProfileInfoCard
                title="About Me"
                description="Hi, I’m Creative. I like Design and Programming"
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
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2 }} />
              <ProfilesList title="Education" profiles={profilesListEducation} shadow={false} />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProfilesList title="Organization" profiles={profilesListOrg} shadow={false} />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProfilesList title="Achievement" profiles={profilesListAch} shadow={false} />
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <ProfilesList title="Certificate" profiles={profilesListCert} shadow={false} />
            </Grid> */}
            <Grid item xs={12} md={6}>
              <ProfilesList title="Language" profiles={profilesListLang} shadow={false} />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
