import Image from 'next/image';
import Link from 'next/link';

import Faq from '@/layouts/Faq';

import ClientSection from './ClientSection';
import Features from './FeatureSection';
import Mission from './Mission';
import PlatformSection from './PlatformSection';

export default function Landing() {
  return (
    <div className=" dark:bg-gray-900">
      <div className="bg-bounce-100 pb-20">
        <div className="mx-auto grid max-w-screen-xl px-4 pt-10 pb-8 lg:grid-cols-12 lg:gap-8 lg:pt-24 lg:pb-12 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-16 max-w-2xl text-4xl font-bold leading-none tracking-tight md:text-4xl xl:text-5xl">
              Bounce Circular
            </h1>
            <h4 className="mb-8 max-w-2xl text-3xl leading-none tracking-tight md:text-2xl xl:text-2xl">
              Service de recyclage des balles dans votre club
            </h4>
            <p className="mb-1 max-w-xl font-light md:text-lg lg:mb-10">
              Le padel et le tennis font partie des sports les plus polluants au
              monde. Bounce Circular permet l&apos;organisation facile de la
              récolte et du recyclage des balles de votre club afin de donner
              une seconde vie à celles-ci.
            </p>
            <div className="space-y-4 pt-6 sm:flex sm:space-y-0 sm:space-x-4">
              <Link
                href="/auth"
                className="inline-flex w-full items-center justify-center rounded-3xl border-2 bg-bounce-300 px-5 py-2.5 text-center  font-medium text-white sm:w-auto"
              >
                Me connecter
              </Link>
            </div>
          </div>
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
            <Image
              src="/assets/images/recycle-illustration.png" // gregant.jpg
              alt="Recycle tennis balls"
              className="rounded-3xl"
              width={600}
              height={350}
            />
          </div>
        </div>
        <ClientSection></ClientSection>
      </div>
      {/* <Test></Test> */}
      <Features></Features>
      <PlatformSection></PlatformSection>
      {/* <Bin></Bin> */}
      <Mission></Mission>
      <Faq></Faq>
    </div>
  );
}
