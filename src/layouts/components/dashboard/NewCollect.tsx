import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import moment from 'moment';
import React, { Fragment, useState } from 'react';
import Datepicker from 'tailwind-datepicker-react'; // https://github.com/OMikkel/tailwind-datepicker-react;

import type { INewCollect } from '@/interfaces/collect';
import { postCollect } from '@/utils/api/collect';

export default function NewCollect({
  clubName,
  clubId,
}: {
  clubName: string;
  clubId: string;
}) {
  const collectOptions: { value: string; label: string }[] = [
    { value: '1 Box', label: '1 Box en carton' },
    { value: '2 Box', label: '2 Box en carton' },
    { value: '3 Box', label: '3 Box en carton' },
  ];

  function addWorkdays(startDate: Date, n: number): Date {
    let workdays: number | null = n;
    const date = new Date(startDate);

    while (workdays && workdays > 0) {
      date.setDate(date.getDate() + 1);

      if (date.getDay() !== 0 && date.getDay() !== 6) {
        workdays -= 1;
      }
    }
    return date;
  }
  function setTextButton(value: string) {
    if (value === 'NOT_SEND') {
      return 'Enregistrer';
    }
    if (value === 'IN_PROGRESS') {
      return 'En cours ...';
    }
    if (value === 'SUCCESS') {
      return 'Collecte enregistrée ✔️';
    }
    if (value === 'FAILURE') {
      return "Erreur lors de l'enregistrement de la collecte";
    }
    return 'Enregistrer';
  }

  const minDate = addWorkdays(new Date(), 2);
  const defaultDate = addWorkdays(new Date(), 2);
  const maxDate = addWorkdays(new Date(), 10);

  const [box, setBox] = useState<string>(
    collectOptions[0] ? collectOptions[0].value : '1 Box'
  );
  const [description, setText] = useState<string>('');
  const [date, setDate] = useState<Date | undefined>(defaultDate);
  const [show, setShow] = useState<boolean>(false);
  const [collectRequestStatus, setCollectRequestStatus] =
    useState<string>('NOT_SEND');
  const handleClose = (state: boolean) => {
    setShow(state);
  };
  const handleValueChange = (selectedDate: Date) => {
    setDate(selectedDate);
  };
  const handleChangeText = (textInput: string) => {
    setText(textInput);
  };

  const options: any = {
    todayBtn: false,
    clearBtn: false,
    maxDate,
    minDate,
    theme: {
      background: 'bg-white',
      selected: 'bg-bounce-300 hover:bg-bounce-300',
      disabledText: 'bg-gray-300',
    },
    language: 'fr',
    defaultDate,
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const collectRequest: INewCollect = {
      clubId,
      dateCollect: moment(date).format('yyyy-MM-DD'),
      clubName,
      numberOfBox: box,
      description,
    };
    try {
      setCollectRequestStatus('IN_PROGRESS');
      const newCollect: any = await postCollect(collectRequest);
      if (newCollect && newCollect[0] && newCollect[0].clubId) {
        setCollectRequestStatus('SUCCESS');
      } else {
        setCollectRequestStatus('FAILURE');
      }
    } catch (e: any) {
      setCollectRequestStatus('FAILURE');
    }
  };

  return (
    <>
      <div className="relative isolate bg-white py-16 px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-xl lg:max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Demande de collecte de balles dans votre club
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            <i>
              Rendons ensemble le tennis & le padel plus éco-responsable balle
              après balle.
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
                    Nombre de cartons à collecter
                  </label>
                  <div className="mt-2.5">
                    {/* <select
                      onChange={(e) => setBox(e.target.value)}
                      id="location"
                      name="location"
                      className="block w-full rounded-md border-0 bg-gray-50 py-3 px-3.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:leading-6"
                    >
                      {collectOptions.map((value, key) => (
                        <option key={key}>{value.label}</option>
                      ))}
                    </select> */}
                    <Listbox value={box} onChange={setBox}>
                      {({ open }) => (
                        <div className="relative mt-2">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-gray-50 py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 sm:text-sm sm:leading-6">
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
                              {collectOptions.map((value, key) => (
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
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Date de la collecte
                  </label>
                  <div className="mt-2.5 bg-white">
                    {/* <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    /> */}
                    <Datepicker
                      options={options}
                      show={show}
                      setShow={handleClose}
                      onChange={handleValueChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Informations complémentaires (pour le transporteur)
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      value={description}
                      onChange={(e) => handleChangeText(e.target.value)}
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={
                    collectRequestStatus === 'SUCCESS' ||
                    collectRequestStatus === 'IN_PROGRESS'
                  }
                  className="block w-full rounded-md bg-bounce-300 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {setTextButton(collectRequestStatus)}
                </button>
              </div>
            </form>
            <div className="lg:mt-6 lg:w-80 lg:flex-none">
              <img
                className="hidden h-20 w-auto md:block"
                src="/assets/images/logo-clubs-100/LaRaquette.png"
                alt=""
              />
              <figure className="mt-8">
                <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                  <p>
                    “Le programme Bounce Circular est une évidence pour notre
                    club. Tous les clubs devraient y songer.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex gap-x-6">
                  <img
                    src="/assets/images/avatar/seb_lecloux.png"
                    alt=""
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  />
                  <div>
                    <div className="text-base font-semibold text-gray-900">
                      Sebastion Lecloux
                    </div>
                    <div className="text-sm leading-6 text-gray-600">
                      Coach & Gérant TC La Raquette de Wavre
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
