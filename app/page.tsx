import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Map from "./components/Map";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-fit">
      <Hero />
      <Gallery />
      <Map />
      <Footer />
    </div>
  );
}
