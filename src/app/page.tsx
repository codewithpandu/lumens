import AppNavbar from "@/components/AppNavbar";
import { Button } from "@/components/ui/button";
import HeroImage from "../../public/img/hero.jpg";
import Image from "next/image";
import AppSection from "@/components/AppSection";
import { Building2, Compass, MoveRight, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-my-secondary">
      {/* Hero Section */}
      <div className="relative h-screen ">
        <Image
          src={HeroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute top-0 left-0 right-0 bg-sky-900/80 w-full h-full"></div>
        <AppSection id="home">
          <AppNavbar />
          <div className="relative flex items-center h-full translate-y-1/4 md:translate-y-1/4 space-y-2 md:space-y-4">
            <div>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold font-serif text-white ms-4 md:w-170 lg:w-220">
                Membangun visi,{" "}
                <span className="text-amber-500">mendesain</span> masa depan.
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
          </div>
        </AppSection>
      </div>

      {/* About Section */}
      <AppSection id="about" className="bg-my-secondary py-24 lg:py-16 px-4 ">
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

      {/* Service Section */}
      <AppSection id="service" className="bg-my-primary py-16 px-4 ">
        <small className="text-amber-500 tracking-widest">LAYANAN</small>
        <div className="md:flex py-2 space-y-2 text-white">
          <h2 className="font-serif font-bold text-3xl md:w-1/2">
            Inovasi untuk Masa Depan
          </h2>
          <p className="md:w-1/2">
            Kami mendukung individu maupun perusahaan dalam membangun identitas,
            mengembangkan sistem, dan menghadirkan karya berkualitas tinggi.
          </p>
        </div>
        <div className="py-16 flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:max-w-md">
            <Card className="bg-my-secondary">
              <CardHeader>
                <CardTitle>
                  <Building2 className="size-12" />
                </CardTitle>
                <CardDescription className="font-bold text-lg text-black">
                  Arsitektur
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Ruang kerja dan komersial yang menyeimbangkan estetika dengan
                  fungsi.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="flex items-center gap-2 hover:text-amber-500"
                >
                  Pelajari lebih <MoveRight className="w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full lg:max-w-md">
            <Card className="bg-my-secondary">
              <CardHeader>
                <CardTitle>
                  <Compass className="size-12" />
                </CardTitle>
                <CardDescription className="font-bold text-lg text-black">
                  Brand & Identitas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Sistem visual yang membuat perusahaan Anda mudah dikenali dan
                  dipercaya.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="flex items-center gap-2 hover:text-amber-500"
                >
                  Pelajari lebih <MoveRight className="w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full lg:max-w-md">
            <Card className="bg-my-secondary">
              <CardHeader>
                <CardTitle>
                  <Users className="size-12" />
                </CardTitle>
                <CardDescription className="font-bold text-lg text-black">
                  Konsultasi Strategis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Membantu kepemimpinan menavigasi pertumbuhan dengan kejelasan.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="flex items-center gap-2 hover:text-amber-500"
                >
                  Pelajari lebih <MoveRight className="w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </AppSection>

      {/* Filosofi */}
      <AppSection id="contact" className="bg-my-secondary py-16 px-4">
        <small className="text-amber-500 tracking-widest text-center block">
          FILOSOFI
        </small>
        <div className="text-center space-y-8 my-16">
          <p className="text-3xl font-serif">
            &quot;Desain yang baik tidak terlihat.{" "}
            <span className="italic text-amber-500">Ia terasa</span>.&quot;
          </p>
          <p>— Ariadne Lumen, Founder</p>
        </div>
        <div className="bg-my-primary text-white p-12 md:p-20 flex flex-col md:flex-row justify-between gap-4 rounded-xl">
          <p className="text-3xl font-serif lg:w-1/4">
            Mari bangun sesuatu yang berarti.
          </p>
          <div className="lg:w-1/3">
            <p>
              Ceritakan visi Anda. Kami akan merespons dalam 24 jam dengan
              langkah selanjutnya yang jelas.
            </p>
            <Button
              className="mt-4 bg-amber-500 text-black hover:bg-amber-600 cursor-pointer"
              size="lg"
            >
              hello@lumenco.studio <MoveRight />
            </Button>
          </div>
        </div>
      </AppSection>

      <footer className="bg-my-secondary p-8 border-t-2">
        <div className="w-full max-w-7xl text-xs mx-auto flex flex-col md:flex-row justify-between">
          <p>© 2026 Lumen & Co. Studio. All rights reserved.</p>
          <p>JAKARTA · SINGAPORE · LISBOA</p>
        </div>
      </footer>
    </div>
  );
}
