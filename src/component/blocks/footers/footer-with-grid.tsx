"use client"

import { cn } from "@/src/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Smartphone, Download } from "lucide-react";

export function FooterWithGrid() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="border-b border-neutral-200 pb-2 dark:border-neutral-700">
          <div className="mb-10 max-w-xl">
            <Logo className="justify-start" />
            <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              Smart Rides, Fair Prices. Compare rides across all major platforms in India and get the best fare every time you travel.
            </p>
            <div className="text-sm text-neutral-700 dark:text-neutral-300">
              A product by{" "}
              <Link
                href="https://aceternity.com"
                target="__blank"
                className="font-medium text-neutral-800 underline dark:text-neutral-400"
              >
                Aceternity
              </Link>
            </div>
            <div className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              Building in public at{" "}
              <Link
                href="https://twitter.com/mannupaaji"
                className="font-medium text-neutral-800 underline dark:text-neutral-400"
                target="__blank"
              >
                @mannupaaji
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 border-b border-neutral-200 pb-10 pt-10 md:grid-cols-4 dark:border-neutral-700">
          <ul className="text-base font-medium text-neutral-800 dark:text-neutral-200">
            <li className="mb-4 text-sm font-bold text-black dark:text-white">
              Platform
            </li>
            {PLATFORM_LINKS.map((item, idx) => (
              <li key={"first" + idx} className="mb-4 text-sm font-normal">
                <Link
                  href={item.href}
                  className="text-neutral-500 hover:text-emerald-500 dark:text-neutral-400 dark:hover:text-emerald-400"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="text-base font-medium text-neutral-800 dark:text-neutral-200">
            <li className="mb-4 text-sm font-bold text-black dark:text-white">
              Support
            </li>
            {SUPPORT_LINKS.map((item, idx) => (
              <li key={"first" + idx} className="mb-4 text-sm font-normal">
                <Link
                  href={item.href}
                  className="text-neutral-500 hover:text-emerald-500 dark:text-neutral-400 dark:hover:text-emerald-400"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="text-base font-medium text-neutral-800 dark:text-neutral-200">
            <li className="mb-4 text-sm font-bold text-black dark:text-white">
              Company
            </li>
            {COMPANY_LINKS.map((item, idx) => (
              <li key={"first" + idx} className="mb-4 text-sm font-normal">
                <Link
                  href={item.href}
                  className="text-neutral-500 hover:text-emerald-500 dark:text-neutral-400 dark:hover:text-emerald-400"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="text-base font-medium text-neutral-800 dark:text-neutral-200">
            <li className="mb-4 text-sm font-bold text-black dark:text-white">
              Legal
            </li>
            {LEGAL_LINKS.map((item, idx) => (
              <li key={"first" + idx} className="mb-4 text-sm font-normal">
                <Link
                  href={item.href}
                  className="text-neutral-500 hover:text-emerald-500 dark:text-neutral-400 dark:hover:text-emerald-400"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              &copy; {new Date().getFullYear()} RideFarely Technologies Pvt. Ltd. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                <Link href="https://facebook.com" className="text-neutral-500 hover:text-emerald-500 dark:text-neutral-400 dark:hover:text-emerald-400">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com" className="text-neutral-500 hover:text-emerald-500 dark:text-neutral-400 dark:hover:text-emerald-400">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="https://instagram.com" className="text-neutral-500 hover:text-emerald-500 dark:text-neutral-400 dark:hover:text-emerald-400">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="https://linkedin.com" className="text-neutral-500 hover:text-emerald-500 dark:text-neutral-400 dark:hover:text-emerald-400">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
              <div className="ml-4 flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                Made in India 🇮🇳
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PLATFORM_LINKS = [
  { title: "Compare Rides", href: "/compare" },
  { title: "Download App", href: "/download" },
  { title: "Partner Apps", href: "/partners" },
  { title: "Coverage Areas", href: "/coverage" },
];

const SUPPORT_LINKS = [
  { title: "Help Center", href: "/help" },
  { title: "Contact Us", href: "/contact" },
  { title: "Report Issue", href: "/report" },
  { title: "Safety Guidelines", href: "/safety" },
];

const COMPANY_LINKS = [
  { title: "About Us", href: "/about" },
  { title: "Careers", href: "/careers" },
  { title: "Press Kit", href: "/press" },
  { title: "Partner With Us", href: "/partner" },
];

const LEGAL_LINKS = [
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
  { title: "Refund Policy", href: "/refund" },
];

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex flex-shrink-0 items-center justify-center space-x-2 py-6 text-center text-2xl font-bold text-neutral-600 selection:bg-emerald-500 dark:text-gray-100",
        className
      )}
    >
      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
        <Smartphone className="h-4 w-4" />
      </div>
      <div
        className={cn(
          "flex items-center gap-2 font-sans text-xl text-black dark:text-white"
        )}
      >
        RideFarely{" "}
        <div className="shadow-input relative rounded-sm border border-transparent bg-white px-2 py-0.5 text-xs font-bold text-emerald-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-emerald-400">
          Smart
        </div>
      </div>
    </Link>
  );
};