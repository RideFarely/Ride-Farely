"use client"

import { MapPin, Clock, Smartphone, CreditCard } from 'lucide-react'

const features = [
  {
    name: 'Smart location detection',
    description:
      'Auto-detect your location or enter custom pickup/drop locations for instant fare comparison across multiple ride platforms.',
    icon: MapPin,
  },
  {
    name: 'Real-time fare updates',
    description: 'Get live fare updates with surge pricing alerts and estimated wait times from Uber, Ola, and other major platforms.',
    icon: Clock,
  },
  {
    name: 'Instant app redirection',
    description: 'Tap to book your preferred ride option - instantly redirected to the app with pre-filled journey details. No manual entry needed.',
    icon: Smartphone,
  },
  {
    name: 'No booking fees',
    description: 'Compare and book with zero additional fees or commissions. Pay exactly what the ride platform charges - nothing extra.',
    icon: CreditCard,
  },
]

export default function WithProductScreenshot() {
  return (
    <div className="overflow-hidden bg-[var(--background)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-[var(--primary)]">Get Started Fast</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-[var(--foreground)] sm:text-5xl">
                Compare & Book in 3 Simple Steps
              </p>
              <p className="mt-6 text-lg/8 text-[var(--muted-foreground)]">
                From search to seat in your ride - discover the best fares across all major platforms in seconds, not minutes.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-[var(--muted-foreground)] lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-[var(--foreground)]">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-[var(--primary)]" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="relative">
            <div className="relative -ml-px w-3xl max-w-none rounded-xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 p-8 shadow-xl ring-1 ring-gray-900/5 sm:w-228 md:-ml-4 lg:-ml-0">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">1</div>
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">Enter Your Trip</h3>
                  </div>
                  <div className="mt-3 space-y-2 rounded-lg bg-white/80 p-4">
                    <input type="text" placeholder="From: Kormangala, Bangalore" className="w-full rounded-md border-gray-300 px-3 py-2 text-sm" />
                    <input type="text" placeholder="To: Indiranagar, Bangalore" className="w-full rounded-md border-gray-300 px-3 py-2 text-sm" />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">2</div>
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">Compare Live Fares</h3>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between rounded-lg bg-white/80 p-3">
                      <span className="flex items-center space-x-2">
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                        <span className="text-sm font-medium">Uber Mini</span>
                      </span>
                      <span className="font-semibold text-[var(--primary)]">₹127</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/80 p-3">
                      <span className="flex items-center space-x-2">
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                        <span className="text-sm font-medium">Ola Mini</span>
                      </span>
                      <span className="font-semibold text-[var(--primary)]">₹135</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/80 p-3">
                      <span className="flex items-center space-x-2">
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                        <span className="text-sm font-medium">Uber Go</span>
                      </span>
                      <span className="font-semibold text-[var(--primary)]">₹149</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">3</div>
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">Choose & Book</h3>
                  </div>
                  <button className="mt-3 w-full rounded-lg bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-white hover:bg-[var(--primary)]/90 transition-colors">
                    Open Uber and Book Mini - ₹127
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}