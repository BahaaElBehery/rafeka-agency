import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import { BrowserRouter, Routes, Route } from "react-router";
import HelpCenter from "./components/HelpCenter/HelpCenter";
import ContactUs from "./components/ContactUs/ContactUs";
import Services from "./components/ServicesP/Services";
import Projects from "./components/ProjectsP/Projects";
import NotFound from "./components/NotFound/NotFound";
import AboutUs from "./components/AboutUs/AboutUs";
import Pricing from "./components/Pricing/Pricing";
import Home from "./components/Homepage/HomePage";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const {
    i18n: { language },
  } = useTranslation("");
  useEffect(() => {
    document.body.style.direction = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/project-details" element={<ProjectDetails />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
