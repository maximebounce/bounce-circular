const incentives = [
  {
    name: 'Installation dans les 10 jours',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
    description:
      'Installation des poubelles sur vos terrains dans les 10 jours.',
  },
  {
    name: 'Matériaux recyclables',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description:
      'Les matériaux utilisées pour la fabriaction des poubelles sont recyclabes.',
  },
  {
    name: 'Solide',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      'Les poubelles ont été concue pour pouvoir résister aux intenpéries.',
  },
];

export default function Bin() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-8 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-lg bg-bounce-100">
              <img
                src="/assets/images/bin.jpg"
                alt=""
                className="bg-bounce-100 object-cover object-center"
                width={600}
                height={400}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Des poubelles spécifiques pour les balles
              </h2>
              {/* Vous n&apos;avez rien à faire. */}
              <p className="mt-4 text-gray-600">
                Nous venons installer les poubelles sur vos terrains selon vos
                recommandations. Les poubelles peuvent être accrochées au
                grillage et peuvent également être attachées les unes aux
                autres.
              </p>
              <div className="grid  items-center gap-x-8 gap-y-10 lg:grid-cols-3">
                {incentives.map((incentive) => (
                  <div key={incentive.name} className="sm:flex lg:block">
                    <div className="sm:shrink-0">
                      <img
                        className="h-16 w-16"
                        src={incentive.imageSrc}
                        alt=""
                      />
                    </div>
                    <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                      <h3 className="text-sm font-medium text-gray-900">
                        {incentive.name}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">
                        {incentive.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
