import Link from 'next/link';

export default function Test() {
  return (
    <div className="overflow-hidden bg-bounce-100 pt-12 pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="mr-auto place-self-center ">
            <h1 className="mb-16 max-w-2xl pt-6 text-4xl font-bold leading-none tracking-tight dark:text-white md:text-4xl xl:text-5xl">
              Bounce Circular
            </h1>
            <h4 className="mb-8 max-w-2xl text-3xl leading-none tracking-tight dark:text-white md:text-xl xl:text-2xl">
              Service de recyclage des balles dans votre club
            </h4>
            <p className="mb-1 max-w-xl font-light md:text-lg lg:mb-10">
              Le padel et le tennis sont ensemble un des sports les plus
              polluants au monde. Bounce Circular permet l&apos;organisation
              facile de la récolte et du recyclage des balles de votre club afin
              de donner une seconde vie à celles-ci.
            </p>
            <div className="space-y-4 pt-10 sm:flex sm:space-y-0 sm:space-x-4">
              <Link
                href="/auth"
                className="inline-flex w-full items-center justify-center rounded-3xl border-2 bg-bounce-300 px-5 py-2.5 text-center  font-medium text-white sm:w-auto"
              >
                Se connecter
              </Link>
            </div>
          </div>
          <img
            src="/assets/images/gregant.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-3xl shadow-xl ring-1 ring-gray-400/10 md:-ml-3 lg:-ml-0"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
