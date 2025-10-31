 
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import Performance from "./components/Performance";
import Showcase from "./components/Showcase";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
 

export default function Home() {
    return (
      <main className="">
        <NavBar></NavBar>
        <Hero/>
        <ProductViewer/>
        <Showcase/>
        <Performance/>
        <Features/>
        <Highlights/>
        <Footer/>
      </main>
    );
}
