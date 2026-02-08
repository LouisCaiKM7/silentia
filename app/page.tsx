import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import Technology from "./components/Technology";
import Scenarios from "./components/Scenarios";
import Personas from "./components/Personas";
import Financials from "./components/Financials";
import SocialImpact from "./components/SocialImpact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductViewer />
      <Technology />
      <Scenarios />
      <Personas />
      <Financials />
      <SocialImpact />
      <Footer />
    </main>
  );
}
