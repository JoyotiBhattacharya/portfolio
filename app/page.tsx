import Header from "@/components/header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/about";
 import Experience from "@/components/Experience";
 import TechStack from "@/components/TechStack";
import Contact from "@/components/contact";
export default function Home() {
  return (
     <main>
      <Header />
      <Hero />
      <About /> 
      <Experience/>
      <TechStack/> 
       <Projects/>    
        <Contact/>  
    </main>
  );
}