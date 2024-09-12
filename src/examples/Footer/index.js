// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";

function Footer({ author }) {
  // const { href, name } = company;
  const { authorName } = author;
  const { size } = typography;

  // const renderLinks = () =>
  //   links.map((link) => (
  //     <MDBox key={link.name} component="li" px={2} lineHeight={1}>
  //       <Link href={link.href} target="_blank">
  //         <MDTypography variant="button" fontWeight="regular" color="text">
  //           {link.name}
  //         </MDTypography>
  //       </Link>
  //     </MDBox>
  //   ));

  return (
    <MDBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
      >
        &copy; {new Date().getFullYear()}, develop by
        <Typography variant="h6" fontWeight="medium">
          &nbsp;{authorName}&nbsp;
        </Typography>
      </MDBox>
      <MDBox
        component="ul"
        sx={({ breakpoints }) => ({
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          listStyle: "none",
          mt: 3,
          mb: 0,
          p: 0,

          [breakpoints.up("lg")]: {
            mt: 0,
          },
        })}
      >
        {/* {renderLinks()} */}
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of Footer
Footer.defaultProps = {
  author: { authorName: "ODIK Y N" },
  // company: { href: "https://www.creative-tim.com/", name: "Creative Team" },
  // links: [
  // { href: "https://www.creative-tim.com/", name: "Linkedin" },
  // { href: "https://www.creative-tim.com/presentation", name: "About Us" },
  // { href: "https://www.creative-tim.com/blog", name: "Blog" },
  // { href: "https://www.creative-tim.com/license", name: "License" },
  // ],
};

// Typechecking props for the Footer
Footer.propTypes = {
  author: PropTypes.objectOf(PropTypes.string),
  // company: PropTypes.objectOf(PropTypes.string),
  // links: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;
