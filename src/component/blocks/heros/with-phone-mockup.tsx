'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function WithPhoneMockup() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">RideCompare</span>
              <img
                alt="RideCompare"
                src="/assets/logo.jpg"
                className="h-32 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">RideCompare</span>
                <img
                  alt="RideCompare"
                  src="https://tailwindcss.com/"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate pt-14">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-emerald-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full bg-emerald-50 px-4 py-1 text-sm/6 text-emerald-700 ring-1 ring-emerald-900/10">
                <span className="font-semibold">New Features</span>
                <span aria-hidden="true" className="h-4 w-px bg-emerald-900/10" />
                <a href="#" className="flex items-center gap-x-1">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Whats new
                  <ChevronRightIcon aria-hidden="true" className="-mr-2 size-5 text-emerald-600" />
                </a>
              </div>
            </div>
            <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
              Compare Rides. Save Money. Book Instantly.
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Get real-time fare comparison across Uber, Ola, Rapido and more. No login required. Find the best ride in seconds.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-xs hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                Compare Rides Now
              </a>
              <a
                href="#"
                className="rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-xs hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Download App
              </a>
            </div>
            <div className="mt-8 flex items-center gap-x-4">
              <p className="text-sm text-gray-600">No hidden fees • Instant comparison • 1M+ rides compared</p>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
            <svg role="img" viewBox="0 0 366 729" className="mx-auto w-91.5 max-w-full drop-shadow-xl">
              <title>Ride comparison app screenshot</title>
              <defs>
                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                  <rect rx={36} width={316} height={684} />
                </clipPath>
              </defs>
              <path
                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                fill="#4B5563"
              />
              <path
                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                fill="#f8fafc"
              />
              <foreignObject
                width={316}
                height={684}
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                transform="translate(24 24)"
              >
                <div className="h-full w-full bg-slate-50">
                  <div className="bg-white p-4">
                    <div className="mb-4 rounded-lg bg-emerald-50 p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-600">From</p>
                          <p className="font-medium">Knowledge park 2</p>
                        </div>
                        <div className="text-emerald-600">↔</div>
                        <div>
                          <p className="text-xs text-gray-600">To</p>
                          <p className="font-medium">Jagat Farm</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="rounded-lg border border-gray-200 bg-white p-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium text-gray-900">Uber Go</p>
                            <p className="text-xs text-gray-500">2 min away</p>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-emerald-600">₹485</p>
                            <p className="text-xs text-gray-400">~65 min</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium text-gray-900">Ola Micro</p>
                            <p className="text-xs text-emerald-600 font-medium">FASTEST</p>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-emerald-600">₹420</p>
                            <p className="text-xs text-gray-500">~58 min</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg border border-gray-200 bg-white p-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium text-gray-900">Rapido X</p>
                            <p className="text-xs text-gray-500">CHEAPEST</p>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-emerald-600">₹395</p>
                            <p className="text-xs text-gray-500">~62 min</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg border border-gray-200 bg-white p-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium text-gray-900">Ola Prime</p>
                            <p className="text-xs text-gray-500">Luxury ride</p>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900">₹650</p>
                            <p className="text-xs text-gray-500">~60 min</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 rounded-lg bg-emerald-600 p-3 text-center">
                      <p className="font-semibold text-white">Save ₹90 vs Uber</p>
                      <p className="text-xs text-emerald-100">Choose Rapido X</p>
                    </div>
                  </div>
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}