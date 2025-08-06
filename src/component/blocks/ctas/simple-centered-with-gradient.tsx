"use client"

export default function SimpleCenteredWithGradient() {
    return (
      <div className="relative isolate overflow-hidden bg-[var(--background)]">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-[var(--foreground)] sm:text-5xl">
              Start Saving on Every Ride Today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-[var(--muted-foreground)]">
              Join thousands of smart commuters who never overpay for rides. Compare fares in real-time and book instantly.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <a
                href="#"
                className="rounded-md bg-gradient-to-r from-emerald-500 via-emerald-600 to-orange-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
              >
                Compare Rides Now
              </a>
            </div>
            <p className="mt-4 text-sm text-[var(--muted-foreground)]">
              Available on iOS and Android • No registration required
            </p>
          </div>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
        >
          <circle r={512} cx={512} cy={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
              <stop stopColor="#10b981" />
              <stop offset={1} stopColor="#f97316" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    )
  }