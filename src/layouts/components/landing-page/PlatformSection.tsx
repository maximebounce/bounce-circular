import {
  CalendarDaysIcon,
  LifebuoyIcon,
  ListBulletIcon,
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Programmez une collecte.',
    description:
      'Connectez-vous à la plateforme et enregistrez une demande de collecte.',
    icon: CalendarDaysIcon,
  },
  {
    name: "Gardez une vue sur l'historque de vos collectes.",
    description:
      "Un accès à l'historique des collectes et le statut pour chacune d'elle.",
    icon: ListBulletIcon,
  },
  {
    name: 'Service client.',
    description: 'Un service client disponible pour répondre à vos questions.',
    icon: LifebuoyIcon,
  },
  // 'Dès que nous collectons suffisament de balles, nous communiquons aux clubs partenaires les projets qui sont entrepris (surface de sols sportifs, ...).',
];

export default function PlatformSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <div className="lg:max-w-lg">
              {/* <h2 className="text-text-300 text-base font-semibold leading-7">
                Un service de qualité
              </h2> */}
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Programmez une collecte en quelques clics
              </p>
              {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p> */}
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute top-1 left-1 h-5 w-5 text-bounce-300"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                    {/* {' '} */}
                    <br></br>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="/assets/images/preview-2.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
