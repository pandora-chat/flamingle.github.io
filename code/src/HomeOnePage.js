import React from "react";
// DATA Files
import dataNavbar from "./data/Navbar/nav-onepage-data.json";
import dataTeam from "./data/Team/team-one-data.json";
import dataSkills from "./data/Skill/skill-one-data.json";
import dataServices from "./data/Services/services-eight-data.json";
import dataPortfolio from "./data/Portfolio/portfolio-one-data.json";
import dataTestimonials from "./data/Testimonials/testimonials-one-data.json";
import dataProblems from "./data/problems.json";
import dataCounter from "./data/Counter/counter-two-data.json";
import dataPricing from "./data/Pricing/pricing-two-data.json";
import dataClients from "./data/Client/client-one-data.json";

// Components
import NavbarSimpleSocial from "./components/Navbar/NavbarSimpleSocial";
import OnePageSlider from "./components/Slider/OnePageSlider";
import FooterOne from "./components/Footer/FooterOne";
import WhoWeAreSix from "./components/WhoWeAre/WhoWeAreSix";
import ServiceFour from "./components/Service/ServiceFour";
import TestimonialOne from "./components/Testimonial/TestimonialOne";
import TestimonialTwo from "./components/Testimonial/TestimonialTwo";
import CounterTwo from "./components/Counter/CounterTwo";
import PricingTwo from "./components/Pricing/PricingTwo";
import ContactSeven from "./components/Contact/ContactSeven";
import ClientOne from "./components/Client/ClientOne";
import PortfolioOne from "./components/Portfolio/PortfolioOne";
import Loader from "./components/Loader/Loader";
import TeamTwo from "./components/Team/TeamTwo";

const HomeOnePage = () => (
  <div>
    <NavbarSimpleSocial data={dataNavbar} />
    <OnePageSlider />
    
    <TestimonialOne data={dataProblems} title="Problems of Existing Products"></TestimonialOne>
    <TestimonialTwo data={dataTestimonials} title="Why Is Pandora Better"></TestimonialTwo>
    <TeamTwo title="OUR TEAM" data={dataTeam} bg="white" />
    <FooterOne />
  </div>
);

export default HomeOnePage;
