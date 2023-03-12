import Image from 'next/image';
import Link from 'next/link';

import ClientSection from './ClientSection';
import Features from './FeatureSection';

export default function HeroSection() {
  return (
    <div className="bg-bounce-100 dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 pt-20 pb-8 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Bounce Circular
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            Le service de recyclage de balles dans votre club
            <br />
            Pour notre planète
            <br />
            Pour vos membres
            <br />
            Pour votre club
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <Link
              href="/login"
              className="inline-flex w-full items-center justify-center rounded-[12px] bg-bounce-300 px-5 py-3 text-center text-sm font-medium text-white sm:w-auto"
            >
              Se connecter
            </Link>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          <Image
            src="/assets/images/recycle-illustration.png"
            alt="Recycle tennis balls"
            width={500}
            height={250}
          />
        </div>
      </div>
      <ClientSection></ClientSection>
      <Features></Features>
    </div>
  );
}
