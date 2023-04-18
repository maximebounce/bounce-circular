// import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { useSearchParams } from 'next/navigation';
import Router from 'next/router';
import { useState } from 'react';

import type { IInvite } from '@/interfaces/invite';
import { postInvite } from '@/utils/api/contact';

export default function Invite() {
  const params = useSearchParams();
  const clubId = params.get('clubId');

  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [sending, setSending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>(['']);

  const handleBlur = () => {
    setError(false);
    setErrors([]);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!clubId) {
      return;
    }
    setSending(true);
    const newInvite: IInvite = {
      firstName: firstname,
      lastName: lastname,
      email,
      clubId,
    };
    try {
      const response = await postInvite(newInvite);
      if (response && response.redirectUrl) {
        Router.push(response.redirectUrl);
      } else {
        setErrors([response.message]);
        setError(true);
      }
    } catch (e: any) {
      setError(true); // 'Une erreur est parvenue.'
      console.log('error', e);
    }
    setSending(false);
  };

  if (!clubId) {
    return (
      <>
        <div className="flex flex-col justify-center py-2 pb-8 sm:px-6 lg:px-8">
          <div className="mx-2 sm:mx-auto sm:w-full sm:max-w-md">
            <p className=" mt-2 text-center text-sm text-gray-700">
              Le lien n&apos;est pas valide. Veuillez vérifier le lien
              d&apos;accès.
            </p>
            <p className="text-center text-sm text-gray-700">
              Si vous avez le moindre problème, prenez contact avec nous à{' '}
              <a
                href="mailto:hello@bouncesports.co"
                className="font-medium text-bounce-300"
              >
                hello@bouncesports.co
              </a>
            </p>
          </div>
        </div>
        <div></div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center py-2 pb-8 sm:px-6 lg:mb-24 lg:px-8">
        <div className="px-2 sm:mx-auto sm:w-full sm:max-w-md">
          {/* <img
            className="mx-auto h-12 w-auto"
            src="/assets/images/bounce-logo.png"
            alt="Your Company"
          /> */}
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900 ">
            Formulaire d&apos;inscription
          </h2>
          <p className="mt-2 text-center text-sm text-gray-700">
            Créez votre compte et rejoignez votre espace club
          </p>
          <p className="text-center text-sm text-gray-700">
            Si vous avez le moindre problème, prenez contact avec nous à{' '}
            <a
              href="mailto:hello@bouncesports.co"
              className="font-medium text-bounce-300"
            >
              hello@bouncesports.co
            </a>
          </p>
        </div>

        <div className="mt-2 bg-bounce-100 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="py-8 px-4 sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Adresse Email *
                </label>
                <div className="mt-2">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleBlur}
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
                    Prénom *
                  </label>
                  {/* <button
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
                  </button> */}
                </div>
                <div className="mt-2">
                  <input
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    onBlur={handleBlur}
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
                    Nom *
                  </label>
                  {/* <button
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
                  </button> */}
                </div>
                <div className="mt-2">
                  <input
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    onBlur={handleBlur}
                    id="lastName"
                    name="lastName"
                    autoComplete="lastName"
                    required
                    className="block w-full rounded-md py-1.5 pl-1 text-gray-900 shadow-sm outline-inherit ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button
                  disabled={sending}
                  type="submit"
                  className="flex w-full justify-center rounded-3xl bg-bounce-200 py-2 px-20 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:w-auto"
                >
                  {sending === false ? "S'inscrire" : '...'}
                </button>
              </div>
              {error && !errors && (
                <div className="flex items-center justify-center">
                  <p role="alert" className="py-2 text-red-500">
                    Une erreur est parvenue.
                  </p>
                </div>
              )}
              {errors && (
                <div className="flex items-center justify-center">
                  {errors.map((err, index) => {
                    if (err === 'Un compte existe déjà avec cette adresse') {
                      return (
                        <div
                          key={index}
                          className="flex-row items-center justify-center"
                        >
                          <p role="alert" className="text-red-500">
                            {err}
                          </p>
                          <a
                            href="/auth"
                            className="cursor-pointer text-center text-gray-800"
                          >
                            <p role="alert">Se connecter</p>
                          </a>
                        </div>
                      );
                    }
                    return (
                      <p key={index} role="alert" className="py-2 text-red-500">
                        {err}
                      </p>
                    );
                  })}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
