// components
import HorizontalScroll from "@/components/templates/HorizontalScroll";
import Sidebar from "@/components/organisms/Sidebar";
import Hero from "@/components/organisms/Hero";
import MobileHeader from "@/components/organisms/MobileHeader";
import About from "@/components/organisms/About";

export default function Home() {
  return (
    <HorizontalScroll>
      <Sidebar />
      <MobileHeader />
      <Hero />
      <About />
      <section className="w-screen h-screen bg-red-500 flex items-center justify-center text-white text-4xl">
        Service
      </section>
      <section className="w-screen h-screen bg-yellow-500 flex items-center justify-center text-white text-4xl">
        Contact
      </section>
    </HorizontalScroll>
  );
}
