import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import React, { Fragment, useState } from 'react';

// import Datepicker from 'tailwind-datepicker-react'; // https://github.com/OMikkel/tailwind-datepicker-react;
// https://react-tailwindcss-datepicker.vercel.app/advanced-features#localization
import { websiteDomain } from '@/config/appInfo';
import type { INewOrderCardBox } from '@/interfaces/cardBox';
import { postOrderCardBox } from '@/utils/api/cardBox';
import { getUserMetaDataOnly } from '@/utils/api/user';

import OrderCardBoxSuccess from './OrderCardBoxSuccess';

export default function NewCollect({
  clubName,
  clubId,
}: {
  clubName: string;
  clubId: string;
}) {
  const orderOptions: { value: string; label: string }[] = [
    { value: '3 cartons', label: '3 cartons' },
    { value: '5 cartons', label: '5 cartons' },
  ];

  const reviewCollect = {
    testimonial:
      '"Le programme Bounce Circular est une évidence pour notre club. Tous les clubs devraient y participer."',
    author: 'Antoine',
    role: 'Administrateur du RTC 1310',
    logo: '/assets/images/logo-clubs-100/LaHulpe.png',
  };

  function setTextButton(value: string) {
    if (value === 'NOT_SEND') {
      return 'Je confirme la commande';
    }
    if (value === 'IN_PROGRESS') {
      return 'En cours ...';
    }
    if (value === 'SUCCESS') {
      return 'La demande de cartons est enregistrée ✔️';
    }
    if (value === 'FAILURE') {
      return "Erreur lors de l'enregistrement de la commande";
    }
    return 'Je confirme la demande';
  }

  const [box, setBox] = useState<string>(
    orderOptions[0] ? orderOptions[0].value : '3 cartons'
  );
  const [description, setText] = useState<string>('');
  const [orderRequestStatus, setOrderRequestStatus] =
    useState<string>('NOT_SEND');

  const handleChangeText = (textInput: string) => {
    setText(textInput);
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!box) {
      alert('Veuillez sélectionner le nombre de cartons à envoyer.');
      return;
    }
    const userMetadata = await getUserMetaDataOnly();
    const member = {
      email: userMetadata.email,
      name: userMetadata.first_name || null,
      memberId: userMetadata.id,
    };
    const orderRequest: INewOrderCardBox = {
      clubId,
      clubName,
      numberOfBox: box,
      description,
      member,
      urlRedirect: `${websiteDomain}/auth`,
    };
    try {
      setOrderRequestStatus('IN_PROGRESS');
      const newOrder: any = await postOrderCardBox(orderRequest);
      if (newOrder && newOrder[0] && newOrder[0].clubId) {
        setOrderRequestStatus('SUCCESS');
      } else {
        setOrderRequestStatus('FAILURE');
      }
    } catch (e: any) {
      setOrderRequestStatus('FAILURE');
    }
  };

  if (orderRequestStatus === 'SUCCESS') {
    return <OrderCardBoxSuccess></OrderCardBoxSuccess>;
  }

  return (
    <>
      <div className="relative isolate bg-white py-16 px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-xl lg:max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            {/* Vous n&apos;avez plus de boites en cartons?  */}
            Commander des nouvelles caisses en carton pour la collecte des
            balles
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            <i>
              Rendons ensemble le tennis & le padel éco-responsable, une balle à
              la fois.
            </i>
          </p>
          <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <form onSubmit={handleSubmit} className="lg:flex-auto">
              <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Nombre de caisses en carton à livrer
                  </label>
                  <div className="mt-2.5">
                    <Listbox value={box} onChange={setBox}>
                      {({ open }) => (
                        <div className="relative mt-2">
                          <Listbox.Button className="relative w-full cursor-default rounded-md py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 sm:text-sm sm:leading-6">
                            <span className="block truncate">{box}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {orderOptions.map((value, key) => (
                                <Listbox.Option
                                  key={key}
                                  className={({ active }) =>
                                    classNames(
                                      active ? 'font-semibol' : 'text-gray-900',
                                      'relative cursor-default select-none py-2 pl-3 pr-9'
                                    )
                                  }
                                  value={value.value}
                                >
                                  {({ selected }) => (
                                    <span
                                      className={classNames(
                                        selected
                                          ? 'font-semibold'
                                          : 'font-normal',
                                        'block truncate'
                                      )}
                                    >
                                      {value.label}
                                    </span>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      )}
                    </Listbox>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Informations complémentaires pour le livreur (ex: où déposer
                    les cartons si personne n&apos;est présent)
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      value={description}
                      onChange={(e) => handleChangeText(e.target.value)}
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border border-gray-300 py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={
                    orderRequestStatus === 'SUCCESS' ||
                    orderRequestStatus === 'IN_PROGRESS'
                  }
                  className="block w-full rounded-xl bg-bounce-300 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {setTextButton(orderRequestStatus)}
                </button>
              </div>
            </form>
            <div className="lg:mt-6 lg:w-80 lg:flex-none">
              <img
                className="hidden h-20 w-auto md:block"
                src={reviewCollect.logo}
                alt=""
              />
              <figure className="mt-8">
                <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                  <p>{reviewCollect.testimonial}</p>
                </blockquote>
                <figcaption className="mt-10 flex gap-x-6">
                  {/* <img
                    src="/assets/images/avatar/seb_lecloux.png"
                    alt=""
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  /> */}
                  <div>
                    <div className="text-base font-semibold text-gray-900">
                      {reviewCollect.author}
                    </div>
                    <div className="text-sm leading-6 text-gray-600">
                      {reviewCollect.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
