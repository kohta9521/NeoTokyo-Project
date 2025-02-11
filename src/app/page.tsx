// components
import HorizontalScroll from "@/components/templates/HorizontalScroll";

export default function Home() {
  return (
    <HorizontalScroll>
      <section className="w-screen h-screen bg-blue-500 flex items-center justify-center text-white text-4xl">
        Hero
      </section>
      <section className="w-screen h-screen bg-green-500 flex items-center justify-center text-white text-4xl">
        About
      </section>
      <section className="w-screen h-screen bg-red-500 flex items-center justify-center text-white text-4xl">
        Service
      </section>
      <section className="w-screen h-screen bg-yellow-500 flex items-center justify-center text-white text-4xl">
        Contact
      </section>
    </HorizontalScroll>
  );
}
