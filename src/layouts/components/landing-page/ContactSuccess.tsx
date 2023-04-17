import Link from 'next/link';

export default function ContactSuccess() {
  return (
    <div className="">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Votre message a bien été envoyé.
            <br />
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-bounceGray-200">
            Merci pour votre demande concernant le progamme Bounce Circular. ♻️
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-bounceGray-200">
            Nous reviendrons prochainement vers vous.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-bounce-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              Page principal <span aria-hidden="true">→</span>
            </Link>
            {/* <a
              href="/dashboard"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Menu principal <span aria-hidden="true">→</span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
