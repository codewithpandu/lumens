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
        <div className="absolute top-0 left-0 right-0 bg-sky-900/70 w-full h-full"></div>
        {/* <div className="absolute top-1/2 translate-x-10 md:translate-x-1/3">
          <h1 className="text-7xl font-bold font-serif w-1/2 text-white">
            Membangun visi, <span className="text-amber-500">mendesain</span>{" "}
            masa depan.
          </h1>
          <p className="w-1/2">
            Studio konsultan multidisiplin yang membantu perusahaan tumbuh
            melalui arsitektur, brand, dan strategi yang dirancang dengan
            presisi.
          </p>
          <div className="w-fit">
            <Button>Jelajahi Layanan</Button>
            <Button>Portfolio</Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
