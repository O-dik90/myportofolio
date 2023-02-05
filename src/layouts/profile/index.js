// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
// import profilesListData from "layouts/profile/data/profilesListData";
import profilesListEducation from "layouts/profile/data/profilesListEducation";
import profilesListAch from "layouts/profile/data/profilesListAch";
import profilesListCert from "layouts/profile/data/profilesListCert";
import profilesListOrg from "layouts/profile/data/profilesListOrg";
import profilesListLang from "layouts/profile/data/profilesListLang";

// Images
function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="About Me"
                description="Hi, I’m Creative. I like Design and Programming"
                info={{
                  fullName: "Odik Yudi Nugroho",
                  phone: "(62) 89 5353 0130 65",
                  email: "nugrohoodik90@gmail.com",
                  location: "Indonesia",
                }}
                social={[
                  {
                    link: "https://facebook.com/nugrohoodik",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
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
                    link: "https://https://github.com/O-dik90/",
                    icon: <GitHub />,
                    color: "github",
                  },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={4}>
              <ProfilesList title="Education" profiles={profilesListEducation} shadow={false} />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDBox display="flex" alignItems="center">
            <Grid item xs={6}>
              <ProfilesList title="Organization" profiles={profilesListOrg} shadow={false} />
            </Grid>
            <Grid item xs={6}>
              <ProfilesList title="Achievement" profiles={profilesListAch} shadow={false} />
            </Grid>
          </MDBox>
          <MDBox display="flex" alignItems="center">
            <Grid item xs={6}>
              <ProfilesList title="Certificate" profiles={profilesListCert} shadow={false} />
            </Grid>
            <Grid item xs={6}>
              <ProfilesList title="Language" profiles={profilesListLang} shadow={false} />
            </Grid>
          </MDBox>
        </MDBox>
        {/* <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor2}
                label="project #1"
                title="scandinavian"
                description="Music is something that everyone has their own specific opinion about."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                ]}
              />
              </Grid> */}
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
