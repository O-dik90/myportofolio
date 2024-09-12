import Card from "@mui/material/Card";
// import FacebookIcon from "@mui/icons-material/Facebook";
import GitHub from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MDBox from "components/MDBox";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import backgroundImage from "assets/images/bg-photo.jpg";

function MyProfile() {
  return (
    <MDBox position="relative">
      <MDBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="40rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0),
              rgba(gradients.info.state, 0)
            )}, url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
      </Card>
    </MDBox>
  );
}

export default MyProfile;
