import Link from 'next/link';

import Foot from '@/layouts/Foot';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export default function NotFound() {
  return (
    <Main meta={<Meta title="Not Found" description="Not Found" />}>
      <div className="mx-auto flex h-screen flex-col justify-between">
        <main className="grid min-h-full place-items-center bg-bounce-100 py-24 px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-bounce-300">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Page introuvable
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Désolé, nous ne parvenons pas à trouver votre page.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-bounce-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bounce-300"
              >
                Retour à la page d&apos;acceuil
              </Link>
              {/* <a href="#" className="text-sm font-semibold text-gray-900">
                Contacter le support <span aria-hidden="true">&rarr;</span>
              </a> */}
            </div>
          </div>
        </main>
        <Foot></Foot>
      </div>
    </Main>
  );
}
