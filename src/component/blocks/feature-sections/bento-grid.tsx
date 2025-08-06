"use client";
import React from "react";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Bell } from "lucide-react";

export function FeaturesSectionBentoGrid() {
  const features = [
    {
      title: "RideFarely Rewards",
      description: "Earn points on every comparison and booking",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
      isPrimary: true,
    },
    {
      title: "Fleet Management", 
      description: "Business solutions for corporate travel",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
      isPrimary: false,
    },
    {
      title: "Loyalty Program",
      description: "Exclusive discounts from partner apps",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
      isPrimary: false,
    },
    {
      title: "Smart Route Planning",
      description: "AI-powered suggestions for optimal routes",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
      isPrimary: false,
    },
  ];
  return (
    <div className="relative z-20 mx-auto max-w-7xl py-10 lg:py-40 bg-white dark:bg-neutral-900">
      <div className="px-8">
        <h4 className="mx-auto max-w-5xl text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-orange-500 tracking-tight">
          The Future of Smart Commuting
        </h4>

        <p className="mx-auto my-6 max-w-3xl text-center text-base md:text-lg font-normal text-neutral-600 dark:text-neutral-400">
          Discover what's coming next in the RideFarely ecosystem. Get early access to revolutionary features that will transform how you commute and save.
        </p>
      </div>

      <div className="relative">
        <div className="mt-16 grid grid-cols-1 rounded-xl lg:grid-cols-6 xl:border dark:border-neutral-800 overflow-hidden">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-orange-500 hover:to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Bell className="w-4 h-4" />
                Notify Me
              </motion.button>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`relative overflow-hidden p-6 sm:p-8 bg-gradient-to-br from-emerald-50/50 to-orange-50/30 dark:from-emerald-950/20 dark:to-orange-950/10 border-neutral-200 dark:border-neutral-800`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="mx-auto max-w-5xl text-left text-xl md:text-2xl font-semibold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent dark:from-emerald-400 dark:to-emerald-500">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "mx-auto max-w-4xl text-left text-sm md:text-base",
        "font-normal text-neutral-600 dark:text-neutral-300",
        "mx-0 my-3 max-w-sm text-left"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex h-48 gap-6">
      <div className="relative w-full h-full bg-gradient-to-br from-emerald-400/20 to-orange-400/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
        <div className="absolute inset-2 bg-white/50 dark:bg-black/30 rounded-lg backdrop-blur-sm" />
        <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-emerald-400 to-orange-400 rounded-full" />
        <div className="absolute bottom-4 right-4 w-28 h-12 bg-gradient-to-r from-emerald-300 to-emerald-400 rounded-lg" />
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="relative flex h-32 w-full">
      <div className="w-3/4 h-8 bg-gradient-to-r from-emerald-400/30 to-orange-400/20 rounded-lg" />
      <div className="absolute bottom-0 w-1/2 h-6 bg-gradient-to-r from-orange-300 to-orange-400 rounded-lg" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="relative flex h-36 items-center justify-center">
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400/40 to-orange-400/20 rounded-full animate-pulse" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full" />
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="relative flex h-32 items-center">
      <div className="grid grid-cols-3 gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-emerald-400/30 to-orange-300/20 rounded-lg" />
        <div className="w-12 h-8 bg-gradient-to-r from-emerald-500 to-orange-400 rounded-lg" />
        <div className="w-6 h-8 bg-gradient-to-br from-orange-400/30 to-emerald-400/20 rounded-lg" />
      </div>
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};