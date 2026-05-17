import AppNavbar from "@/components/AppNavbar";
import { Button } from "@/components/ui/button";
import HeroImage from "../../public/img/hero.jpg";
import Image from "next/image";
import AppSection from "@/components/AppSection";
import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <AppSection id="home" className="relative h-screen">
        <AppNavbar />
        <div className="absolute -top-20 md:-top-1/2 left-1/2 ml-[-50vw] w-screen object-cover">
          <Image
            src={HeroImage}
            alt="Hero"
            className="w-full h-245 md:h-340 object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bg-sky-900/80 w-full h-full"></div>
        </div>
        <div className="absolute top-60 md:top-1/2 md:-translate-y-70 space-y-2 md:space-y-4">
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold font-serif text-white ms-4 md:w-170 lg:w-220">
            Membangun visi, <span className="text-amber-500">mendesain</span>{" "}
            masa depan.
          </h1>
          <p className="text-white p-4 md:w-140">
            Studio konsultan multidisiplin yang membantu perusahaan tumbuh
            melalui arsitektur, brand, dan strategi yang dirancang dengan
            presisi.
          </p>
          <div className="p-4 space-x-2">
            <Button
              size="lg"
              className="cursor-pointer bg-amber-500 text-black hover:bg-amber-600"
            >
              Jelajahi Layanan
              <MoveRight />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="cursor-pointer bg-transparent text-white"
            >
              Portfolio
            </Button>
          </div>
          <hr className="w-1/2 ms-4 border-white/50" />
          <div className="p-4 flex justify-between md:w-1/2">
            <p className="flex flex-col text-amber-500 text-4xl font-serif">
              120+ <span className="text-lg text-white">Proyek</span>
            </p>
            <p className="flex flex-col text-amber-500 text-4xl font-serif">
              18 <span className="text-lg text-white">Negara</span>
            </p>
            <p className="flex flex-col text-amber-500 text-4xl font-serif">
              30 <span className="text-lg text-white">Penghargaan</span>
            </p>
          </div>
        </div>
      </AppSection>

      <AppSection id="about" className="bg-my-secondary py-16 px-4 ">
        <small className="text-amber-500 tracking-widest">TENTANG KAMI</small>
        <div className="md:flex py-2 space-y-2">
          <h2 className="font-serif font-bold text-3xl md:w-1/2">
            Solusi Modern untuk Pertumbuhan Berkelanjutan
          </h2>
          <p className="md:w-1/2">
            Kami adalah tim arsitek, desainer, dan ahli strategi yang percaya
            bahwa setiap perusahaan layak memiliki ruang dan identitas yang
            menggerakkan orang.
            <br />
            <br />
            Selama satu dekade, kami menggabungkan kerajinan tradisional dengan
            pemikiran modern untuk menciptakan pengalaman yang tahan terhadap
            waktu.
          </p>
        </div>
      </AppSection>

      <AppSection id="about" className="bg-my-secondary py-16 px-4 ">
        <small className="text-amber-500 tracking-widest">TENTANG KAMI</small>
        <div className="md:flex py-2 space-y-2">
          <h2 className="font-serif font-bold text-3xl md:w-1/2">
            Solusi Modern untuk Pertumbuhan Berkelanjutan
          </h2>
          <p className="md:w-1/2">
            Kami adalah tim arsitek, desainer, dan ahli strategi yang percaya
            bahwa setiap perusahaan layak memiliki ruang dan identitas yang
            menggerakkan orang.
            <br />
            <br />
            Selama satu dekade, kami menggabungkan kerajinan tradisional dengan
            pemikiran modern untuk menciptakan pengalaman yang tahan terhadap
            waktu.
          </p>
        </div>
      </AppSection>
    </div>
  );
}
