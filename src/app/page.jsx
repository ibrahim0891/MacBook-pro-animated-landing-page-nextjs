 
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    return (
      <main className="container mx-auto">
        <NavBar></NavBar>
        <Hero/>
        <ProductViewer/>
      </main>
    );
}
