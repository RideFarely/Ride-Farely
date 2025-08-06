"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export function LogoCloudMarquee() {
  const logos = [
    {
      name: "Uber",
      src: "/companylogo/uber.png",
    },
    {
      name: "Ola",
      src: "/companylogo/ola.png",
    },
    {
      name: "Rapido",
      src: "/companylogo/rapido.png",
    },
    {
      name: "BluSmart",
      src: "/companylogo/blusmart.png",
    },
    {
      name: "Namma Yatri",
      src: "/companylogo/namayatri.jpg",
    },
   
  ];

  return (
    <div className="relative z-20 px-4 py-10 md:px-8 md:py-40">
      <h2 className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-600 bg-clip-text text-center font-sans text-2xl font-bold text-transparent md:text-5xl dark:from-emerald-400 dark:to-emerald-600">
        Compare Across India's Top Ride Apps
      </h2>
      <p className="mt-4 text-center font-sans text-base text-slate-700 dark:text-slate-300">
        We partner with leading ride-sharing platforms to bring you the best fares
      </p>

      <div className="relative mx-auto mt-20 flex h-full w-full max-w-7xl flex-wrap justify-center gap-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <Marquee pauseOnHover direction="right">
          {logos.map((logo, idx) => (
            <Image
              key={logo.name + "logo-marquee" + idx}
              src={logo.src}
              alt={logo.name}
              width="120"
              height="60"
              className="mx-0 h-12 w-auto object-contain md:mx-10 md:h-16"
            />
          ))}
        </Marquee>
      </div>
      <div className="relative mx-auto mt-4 flex h-full w-full max-w-7xl flex-wrap justify-center gap-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] md:mt-20 md:gap-40">
        <Marquee pauseOnHover direction="left" speed={30}>
          {logos.map((logo, idx) => (
            <Image
              key={logo.name + "logo-marquee-second" + idx}
              src={logo.src}
              alt={logo.name}
              width="120"
              height="60"
              className="mx-0 h-12 w-auto object-contain md:mx-10 md:h-16"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}