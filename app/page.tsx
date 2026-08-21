// import Navbar from "./component/Navbar";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import Aboutme from "./component/Aboutme";
import Project from "./component/Project";
export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <Nav/>
      <Hero/>
      <Aboutme/>
      <Project/>
      <Footer/>

    </div>
  );
}
