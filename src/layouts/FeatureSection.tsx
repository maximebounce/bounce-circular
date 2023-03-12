import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Des poubelles sur chaque terrain',
    description:
      'Des poubelles de tri sur chaque terrain pour faciliter et encourager les joueurs à recycler. Des containers sont aussi inclus pour rassembler les balles.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Une communication pour vos membres',
    description:
      'Des ressources sont disponibles à la demande: affiches & emails.  Vos membres doivent être informés et sensibilisés si vous souhaitez avoir un impact.',
    icon: LockClosedIcon,
  },
  {
    name: 'Une plateforme simple et intuitive',
    description:
      'Un accès à une plateforme intuitive pour programmer une collecte et suivre le statut de celle-ci. Garder un historique pour mesurer votre impact à travers les années.',
    icon: ArrowPathIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-bounce-100 py-4 sm:py-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pourquoi vous allez adorer Bounce Circular pour votre club
          </p>
        </div>
        <div className="mx-auto my-12 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
