// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ');
// }

import { useState } from 'react';

import type { INewMesagge } from '@/interfaces/message';
import { postMessageContact } from '@/utils/api/contact';

import ContactSuccess from './components/landing-page/ContactSuccess';

export default function Contact() {
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [club, setClubname] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [sending, setSending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [messageSent, setMessgage] = useState<boolean>(false);
  // const [agreed, setAgreed] = useState(false);

  const handleBlur = () => {
    setError(false);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setSending(true);
    const newMessage: INewMesagge = {
      firstname,
      lastname,
      email,
      club,
      phone,
      message,
    };
    try {
      await postMessageContact(newMessage);
      setMessgage(true);
    } catch (e: any) {
      console.log('error', e);
      setError(true);
    }
    setSending(false);
  };

  if (messageSent) {
    return <ContactSuccess></ContactSuccess>;
  }

  return (
    <div className="isolate px-4 pb-12 pt-6 sm:pb-12 sm:pt-6 lg:mb-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact
        </h2>
        <p className="mt-2 text-sm leading-8 text-gray-800">
          Une question, une demande? L&apos;équipe y mettra toute son attention
          et se fera un plaisir de vous répondre.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-6 max-w-2xl sm:mt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Prénom *
            </label>
            <div className="mt-2.5">
              <input
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                onBlur={handleBlur}
                type="text"
                name="first-name"
                id="first-name"
                required
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nom *
            </label>
            <div className="mt-2.5">
              <input
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                onBlur={handleBlur}
                type="text"
                name="last-name"
                id="last-name"
                required
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nom du club *
            </label>
            <div className="mt-2.5">
              <input
                value={club}
                onChange={(e) => setClubname(e.target.value)}
                onBlur={handleBlur}
                type="text"
                name="company"
                id="company"
                required
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email *
            </label>
            <div className="mt-2.5">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleBlur}
                type="email"
                name="email"
                id="email"
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Numéro de GSM *
            </label>
            <div className="relative mt-2.5">
              {/* <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div> */}
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={handleBlur}
                type="tel"
                name="phone-number"
                id="phone-number"
                required
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message *
            </label>
            <div className="mt-2.5">
              <textarea
                value={message}
                onBlur={handleBlur}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                id="message"
                rows={4}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group> */}
        </div>
        <div className="flex items-center justify-center">
          <div className="mt-10">
            <button
              disabled={sending}
              type="submit"
              className="w-full rounded-3xl bg-bounce-300 px-16 py-2.5 text-center text-sm font-semibold text-white shadow-sm md:w-auto"
            >
              {sending === false ? 'Restons en contact' : '...'}
            </button>
          </div>
        </div>
        {error && (
          <div className="flex items-center justify-center">
            <p
              role="alert"
              className="py-2"
              style={{ color: 'rgb(255, 0, 0)' }}
            >
              Une erreur est parvenue.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
