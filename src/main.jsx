import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./i18n";
import Home from "./components/Homepage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/ServicesP/Services";
import Projects from "./components/ProjectsP/Projects";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Pricing from "./components/Pricing/Pricing";
import ContactUs from "./components/ContactUs/ContactUs";
import HelpCenter from "./components/HelpCenter/HelpCenter";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
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
