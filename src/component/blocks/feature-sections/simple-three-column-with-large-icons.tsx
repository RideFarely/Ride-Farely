import { Shield, Clock, Scale } from 'lucide-react'

const features = [
  {
    name: 'No Login Required',
    description:
      'Compare fares instantly without creating accounts or sharing personal data',
    href: '#',
    icon: Shield,
  },
  {
    name: 'Real-Time Comparison',
    description:
      'Live pricing from multiple apps updated every few seconds for accuracy',
    href: '#',
    icon: Clock,
  },
  {
    name: 'Bias-Free Results',
    description:
      'Transparent comparison with no hidden partnerships or promoted results',
    href: '#',
    icon: Scale,
  },
]

export default function SimpleThreeColumnWithLargeIcons() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Why Choose RideFarely?
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Find the best deals on rides across multiple platforms with transparent comparison and instant results.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-emerald-500">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm/6 font-semibold text-emerald-600 hover:text-emerald-500">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}