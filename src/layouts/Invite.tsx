import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { useSearchParams } from 'next/navigation';

export default function Invite() {
  const params = useSearchParams();
  const clubId = params.get('clubId');
  let urlApi: string = '/api/invite';
  if (clubId) {
    urlApi = `/api/invite?clubId=${clubId}`;
  }

  return (
    <>
      <div className="flex h-full flex-col justify-center py-2 pb-8 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* <img
            className="mx-auto h-12 w-auto"
            src="/assets/images/bounce-logo.png"
            alt="Your Company"
          /> */}
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900 ">
            Formulaire d&apos;inscription
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Créez votre compte et rejoignez votre espace club
          </p>
          <p className="text-center text-sm text-gray-600">
            Si vous avez le moindre problème, prenez contact avec nous à{' '}
            <a
              href="mailto:hello@bouncesports.co"
              className="font-medium text-bounce-300"
            >
              hello@bouncesports.co
            </a>
          </p>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="py-8 px-4 sm:rounded-lg sm:px-10">
            <form className="space-y-6" action={urlApi} method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Adresse Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    autoComplete="email"
                    name="email"
                    required
                    className="block w-full rounded-md py-1.5 pl-1 text-gray-900 shadow-sm outline-inherit ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex flex-row">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Prénom
                  </label>
                  <button
                    data-te-toggle="tooltip"
                    data-te-html="true"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    title="Personne de contact au sein du club"
                  >
                    <QuestionMarkCircleIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    ></QuestionMarkCircleIcon>
                  </button>
                </div>
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="firstName"
                    autoComplete="firstName"
                    required
                    className="block w-full rounded-md py-1.5 pl-1 text-gray-900 shadow-sm outline-inherit ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex flex-row">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nom
                  </label>
                  <button
                    data-te-toggle="tooltip"
                    data-te-html="true"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    title="Nom de la personne de contact au sein du club"
                  >
                    <QuestionMarkCircleIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    ></QuestionMarkCircleIcon>
                  </button>
                </div>
                <div className="mt-2">
                  <input
                    id="lastName"
                    name="lastName"
                    autoComplete="lastName"
                    required
                    className="block w-full rounded-md py-1.5 pl-1 text-gray-900 shadow-sm outline-inherit ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-[12px] bg-bounce-300 py-2 px-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Se connecter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
