"use client";
import React from "react";
import { cn } from "@/src/lib/utils";
import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Transition } from "@headlessui/react";

export function TestimonialsGridWithCenteredCarousel() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 overflow-hidden h-full bg-white">
      <div className="pb-20">
        <h1 className="pt-4 font-bold text-emerald-700 text-lg md:text-2xl dark:text-emerald-400">
          Trusted by Smart Commuters Across India
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-400">
          Real savings, real convenience - join thousands of commuters saving money daily.
        </p>
      </div>

      <div className="relative">
        <TestimonialsSlider />
        <div className="h-full max-h-screen md:max-h-none overflow-hidden w-full bg-white opacity-30 [mask-image:radial-gradient(circle_at_center,transparent_10%,white_99%)]">
          <TestimonialsGrid />
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-40 w-full bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}

export const TestimonialsGrid = () => {
  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3, 6);
  const third = testimonials.slice(6, 9);
  const fourth = testimonials.slice(9, 12);

  const grid = [first, second, third, fourth];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
      {grid.map((testimonialsCol, index) => (
        <div key={`testimonials-col-${index}`} className="grid gap-4">
          {testimonialsCol.map((testimonial) => (
            <Card key={`testimonial-${testimonial.src}-${index}`}>
              <Quote className="text-emerald-600 dark:text-emerald-400">
                {testimonial.quote}
              </Quote>
              <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400 mt-4">
                {testimonial.savings}
              </div>
              <div className="flex gap-2 items-center mt-8">
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <QuoteDescription className="font-medium">
                    {testimonial.name}
                  </QuoteDescription>
                  <QuoteDescription className="text-[10px]">
                    {testimonial.city}
                  </QuoteDescription>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-8 rounded-xl border border-emerald-100 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/20 shadow-[2px_4px_16px_0px_rgba(16,185,129,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-xs font-semibold text-black dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-xs font-normal dark:text-neutral-400 text-neutral-600 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

interface Testimonial {
  src: string;
  quote: string;
  name: string;
  city: string;
  savings: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Priya",
    quote:
      "Saved ₹200 on my daily commute to office. RideFarely shows the real prices instantly!",
    savings: "₹4,800/month saved",
    city: "Delhi",
    src: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Amit",
    quote:
      "Finally, no more switching between 5 different apps. I compare and book in seconds.",
    savings: "45 minutes daily saved",
    city: "Bangalore",
    src: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Sneha",
    quote:
      "Perfect for my business trips. Never overpay for rides again.",
    savings: "₹2,500/trip saved",
    city: "Mumbai",
    src: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Priya",
    quote:
      "Saved ₹200 on my daily commute to office. RideFarely shows the real prices instantly!",
    savings: "₹4,800/month saved",
    city: "Delhi",
    src: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Amit",
    quote:
      "Finally, no more switching between 5 different apps. I compare and book in seconds.",
    savings: "45 minutes daily saved",
    city: "Bangalore",
    src: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Sneha",
    quote:
      "Perfect for my business trips. Never overpay for rides again.",
    savings: "₹2,500/trip saved",
    city: "Mumbai",
    src: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "Priya",
    quote:
      "Saved ₹200 on my daily commute to office. RideFarely shows the real prices instantly!",
    savings: "₹4,800/month saved",
    city: "Delhi",
    src: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Amit",
    quote:
      "Finally, no more switching between 5 different apps. I compare and book in seconds.",
    savings: "45 minutes daily saved",
    city: "Bangalore",
    src: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Sneha",
    quote:
      "Perfect for my business trips. Never overpay for rides again.",
    savings: "₹2,500/trip saved",
    city: "Mumbai",
    src: "https://i.pravatar.cc/150?img=9",
  },
  {
    name: "Priya",
    quote:
      "Saved ₹200 on my daily commute to office. RideFarely shows the real prices instantly!",
    savings: "₹4,800/month saved",
    city: "Delhi",
    src: "https://i.pravatar.cc/150?img=10",
  },
  {
    name: "Amit",
    quote:
      "Finally, no more switching between 5 different apps. I compare and book in seconds.",
    savings: "45 minutes daily saved",
    city: "Bangalore",
    src: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Sneha",
    quote:
      "Perfect for my business trips. Never overpay for rides again.",
    savings: "₹2,500/trip saved",
    city: "Mumbai",
    src: "https://i.pravatar.cc/150?img=12",
  },
];

export const TestimonialsSlider = () => {
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const slicedTestimonials = testimonials.slice(0, 3);

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === slicedTestimonials.length ? 0 : (active) => active + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [active, autorotate, slicedTestimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        heightFix();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="absolute inset-0 mt-20 md:mt-60">
      <div className="max-w-3xl mx-auto relative z-40 h-80">
        <div className="relative pb-12 md:pb-20">
          {/* Particles animation */}

          {/* Carousel */}
          <div className="text-center">
            {/* Testimonial image */}
            <div className="relative h-40 [mask-image:_linear-gradient(0deg,transparent,#FFFFFF_30%,#FFFFFF)] md:[mask-image:_linear-gradient(0deg,transparent,#FFFFFF_40%,#FFFFFF)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none before:rounded-full rounded-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-emerald-400/20 before:to-transparent before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-emerald-50 after:dark:bg-emerald-950/20 after:m-px before:-z-20 after:-z-20">
                {slicedTestimonials.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    as="div"
                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                    enterFrom="opacity-0 -translate-x-10"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-10"
                    beforeEnter={() => heightFix()}
                  >
                    <div className="absolute inset-0 h-full -z-10">
                      <Image
                        className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                        src={item.src}
                        width={56}
                        height={56}
                        alt={item.name}
                      />
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Text */}
            <div className="mb-10 transition-all duration-150 delay-300 ease-in-out px-8 sm:px-6">
              <div className="relative flex flex-col" ref={testimonialsRef}>
                {slicedTestimonials.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    as="div"
                    enter="transition ease-in-out duration-500 delay-200 order-first"
                    enterFrom="opacity-0 -translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-out duration-300 delay-300 absolute"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-4"
                    beforeEnter={() => heightFix()}
                  >
                    <div className="text-base text-emerald-600 font-bold md:text-xl">
                      {item.quote}
                    </div>
                    <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400 mt-2">
                      {item.savings}
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center -m-1.5 px-8 sm:px-6">
              {slicedTestimonials.map((item, index) => (
                <button
                  className={cn(
                    `px-2 py-1 rounded-full m-1.5 text-xs border border-transparent text-neutral-300 transition duration-150 ease-in-out [background:linear-gradient(theme(colors.emerald.700),_theme(colors.emerald.700))_padding-box,_conic-gradient(theme(colors.emerald.400),_theme(colors.emerald.600)_25%,_theme(colors.emerald.600)_75%,_theme(colors.emerald.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-emerald-800/30 before:rounded-full before:pointer-events-none ${active === index ? "border-emerald-400/50" : "border-transparent opacity-70"}`
                  )}
                  key={index}
                  onClick={() => {
                    setActive(index);
                    setAutorotate(false);
                  }}
                >
                  <span className="relative">
                    <span className="text-emerald-50 font-bold">
                      {item.name}
                    </span>{" "}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};