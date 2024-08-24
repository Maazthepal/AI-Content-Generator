import Image from "next/image";
import Dashboard from "./dashboard/page";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
       <NavBar /> 
       <Hero />
       <Cards />
       <Footer />
    </div>
  );
}
