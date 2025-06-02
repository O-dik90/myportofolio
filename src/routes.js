import Dashboard from "layouts/dashboard";
import Experiences from "layouts/experiences";
// import Contacts from "layouts/contacts";
// @mui icons
import Icon from "@mui/material/Icon";
import Profile from "layouts/profile";
import Projects from "layouts/Projects";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Projects",
    key: "projects",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "projects",
    component: <Projects />,
  },
  {
    type: "collapse",
    name: "Experiences",
    key: "experiences",
    icon: <Icon fontSize="small">storage</Icon>,
    route: "experiences",
    component: <Experiences />,
  },
];

export default routes;
