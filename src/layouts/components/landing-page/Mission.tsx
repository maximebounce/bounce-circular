const stats = [
  {
    id: 1,
    label: 'Nombre de balles produites chaque année dans le monde',
    value: '500M+',
  },
  {
    id: 2,
    label: "Nombre d'année pour qu'une balle se dégrade",
    value: '2500 ans',
  },
  {
    id: 3,
    label: 'Le pourcentage de balles recyclés en Europe',
    value: '0.05%',
  },
];

export default function Mission() {
  return (
    <div className="bg-bounce-100 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Notre mission
          </h2>
          <div className="mt-6 flex flex-col gap-y-20 gap-x-8 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-800">
                Bounce a pour mission de rendre le tennis et le padel plus
                éco-responsable.
              </p>
              {/* <img
                src="/assets/images/bin.jpg"
                alt="bin"
                className="h-60"
              ></img> */}
              <p className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                Le service Bounce Circular s&apos;inscrit dans cette démarche en
                collaborant avec les fédérations, pour aider les clubs et leurs
                membres à adopter des actions à faire de ces sports un exemple.
                En mettant des poubelles de tris sur les terrains, les clubs
                peuvent enfin récolter de nombreuses balles. Le service se
                charge de la collecte et de donner une seconde vie aux balles.
              </p>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
                    <dt className="text-base leading-7 text-gray-700 ">
                      {stat.label}
                    </dt>
                    <dd className="text-3xl font-semibold tracking-tight text-bounce-300">
                      {/* text-gray-900 */}
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
