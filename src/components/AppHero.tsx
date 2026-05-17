import Image from "next/image";
import HeroImage from "../../public/img/hero.jpg";
import { Button } from "./ui/button";

export default function AppHero() {
  return (
    <section id="home" className="relative h-screen">
      <div className="absolute -top-20 md:-top-1/2 left-1/2 ml-[-50vw] w-screen object-cover">
        <Image
          src={HeroImage}
          alt="Hero"
          className="w-full h-screen md:h-320 object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bg-sky-900/80 w-full h-full"></div>
      </div>
      <div className="absolute top-60 md:top-1/2 md:-translate-y-70 space-y-2 md:space-y-4">
        <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold font-serif text-white ms-4 md:w-170 lg:w-220">
          Membangun visi, <span className="text-amber-500">mendesain</span> masa
          depan.
        </h1>
        <p className="text-white p-4 md:w-140">
          Studio konsultan multidisiplin yang membantu perusahaan tumbuh melalui
          arsitektur, brand, dan strategi yang dirancang dengan presisi.
        </p>
        <div className="p-4 space-x-2">
          <Button size="lg" className="cursor-pointer">
            Jelajahi Layanan
          </Button>
          <Button variant="outline" className="cursor-pointer">
            Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
