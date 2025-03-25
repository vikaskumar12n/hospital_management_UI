
import Award from "@/Components/LandingPage/AwardServer";
import Booking from "@/Components/LandingPage/Booking";
import Carousel from "@/Components/LandingPage/Carousel";
import Cout from "@/Components/LandingPage/Cout";
import Footer from "@/Components/LandingPage/Footer";
import Navbar from "@/Components/LandingPage/Navbar";
import Partners from "@/Components/LandingPage/Partners";
import PatientCare from "@/Components/LandingPage/PatientCare";
import PersonalCare from "@/Components/LandingPage/PersonalCare";
import MedicalServices from "@/Components/LandingPage/Services";

export default function Home() {
  return (
  <>
  <Navbar/>
  <Partners/>
  <PersonalCare/>
  <Cout/>
  <PatientCare/>
  <MedicalServices/>
  <Booking/>
  <Carousel/>
  <Award/>
  <Footer/>
  </>
  );
}
