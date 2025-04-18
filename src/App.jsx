import HomePage from "./components/Homepage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/ServicesP/Services";
import Projects from "./components/ProjectsP/Projects";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Pricing from "./components/Pricing/Pricing";
import ContactUs from "./components/ContactUs/ContactUs";
import HelpCenter from "./components/HelpCenter/HelpCenter";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <HomePage />
      <AboutUs />
      <Services />
      <Projects />
      <ProjectDetails />
      <Pricing />
      <ContactUs />
      <HelpCenter />
      <NotFound />
    </>
  );
}

export default App;
