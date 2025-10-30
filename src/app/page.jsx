 
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    return (
      <main className="">
        <NavBar></NavBar>
        <Hero/>
        <ProductViewer/>
        <Showcase/>
      </main>
    );
}
