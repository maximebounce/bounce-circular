import { useRouter } from 'next/router';
import { useState } from 'react';

import type { IClub } from '@/interfaces/club';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const postEmailToN8N = async (emailString: string) => {
    const url = '/api/n8n';
    const username = 'bounce';
    const password = 'bounce';
    const headers = new Headers();
    headers.set('Authorization', `Basic ${btoa(`${username}:${password}`)}`);

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          email: emailString,
        }),
      });
      const data: IClub = await res.json();
      if (data.clubId) {
        const clubUrl = `/club/${data.clubId}`;
        router.push(clubUrl);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await postEmailToN8N(email);
  };

  return (
    <>
      <div className="flex h-full flex-col justify-center py-24 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="/assets/images/bounce-logo.png"
            alt="Your Company"
          />
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900 ">
            Se connecter à votre espace club
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ou{' '}
            <a href="#" className="font-medium text-bounce-300">
              souscrire au programme Bounce Circular
            </a>
          </p>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="py-8 px-4 sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Adresse Email
                </label>
                <div className="mt-2">
                  <input
                    placeholder="john.doe@gmail.com"
                    type="email"
                    autoComplete="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}

              {/* <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a href="#" className="font-medium">
                    Mot de passe oublié?
                  </a>
                </div>
              </div> */}

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
