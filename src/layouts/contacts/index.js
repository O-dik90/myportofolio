// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Contacts() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <p>Content Contact</p>
      <Footer />
    </DashboardLayout>
  );
}

export default Contacts;
