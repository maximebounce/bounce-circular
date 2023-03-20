import { Dialog, Menu, Transition } from '@headlessui/react';
import { BuildingOfficeIcon } from '@heroicons/react/20/solid';
import {
  ArchiveBoxIcon,
  Bars3CenterLeftIcon,
  CalendarDaysIcon,
  DocumentChartBarIcon,
  HomeIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { orderBy } from 'lodash';
import moment from 'moment';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { signOut } from 'supertokens-auth-react/recipe/emailpassword';

import type { IClub } from '@/interfaces/club';
import type { ICollect } from '@/interfaces/collect';

import Invoices from './components/dashboard/Invoices';
import NewCollect from './components/dashboard/NewCollect';
import Profile from './components/dashboard/Profile';
import FaqComponent from './Faq';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Dashboard({ club }: { club: IClub }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('Dashboard');

  async function logoutClicked() {
    await signOut();
    window.location.href = '/';
    // redirectToAuth();
  }

  const navigation = [
    { name: 'Dashboard', icon: HomeIcon },
    {
      name: 'Factures',
      icon: DocumentChartBarIcon,
    },
  ];

  const secondaryNavigation = [
    { name: 'Profile', icon: UserCircleIcon },
    { name: 'FAQ', icon: QuestionMarkCircleIcon },
  ];

  const menuItems = [
    { name: 'Profile' },
    // { name: 'Settings' }
  ];

  function getBackgroundColor(status: string | undefined) {
    if (status === 'Balles collectées') {
      return 'inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800';
    }
    if (status === 'Collecte enregistrée') {
      return 'inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800';
    }
    if (status === 'Balles recyclées') {
      return 'inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800';
    }
    return 'inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800';
  }

  const collectsSorted: ICollect[] = orderBy(
    club.collects,
    ['dateRequest'],
    ['desc']
  );
  const collectsClub: ICollect[] = collectsSorted.map((collect) => {
    return {
      ...collect,
      dateRequest: moment(collect.dateRequest).utc().format('DD/MM/YYYY HH:mm'),
      dateCollect: moment(collect.dateCollect).utc().format('DD/MM/YYYY'),
    };
  });

  const overviews = [
    {
      name: 'Nombre de collectes effectués',
      href: '#',
      icon: ArchiveBoxIcon,
      amount: club.numberCollects,
    },
    {
      name: 'Nombre de collectes disponible',
      href: '#',
      icon: ArchiveBoxIcon,
      amount: club.numberCollectsAvailable,
    },
    {
      name: 'Date de début du contrat',
      href: '#',
      icon: CalendarDaysIcon,
      amount: moment(club.startingDate).utc().format('DD/MM/YYYY'),
    },
  ];

  return (
    <>
      <div className="min-h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-bounce-200 pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex shrink-0 items-center px-4">
                    <Link href="/">
                      <img
                        className="h-6 w-auto"
                        src="/assets/images/bounce_logo_white.png"
                        alt="Bounce logo"
                      />
                    </Link>
                  </div>
                  <nav
                    className="mt-5 h-full shrink-0 divide-y divide-white overflow-y-auto"
                    aria-label="Sidebar"
                  >
                    <div className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          onClick={() => setCurrentTab(item.name)}
                          className={classNames(
                            item.name === currentTab
                              ? 'bg-bounce-300 text-white'
                              : 'text-white hover:bg-bounce-300 hover:text-white',
                            'group flex items-center rounded-md px-2 py-2 text-base font-medium'
                          )}
                          aria-current={
                            item.name === currentTab ? 'page' : undefined
                          }
                        >
                          <item.icon
                            className="mr-4 h-6 w-6 shrink-0 text-white"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="mt-6 pt-6">
                      <div className="space-y-1 px-2">
                        {secondaryNavigation.map((item) => (
                          <a
                            key={item.name}
                            onClick={() => setCurrentTab(item.name)}
                            className="group flex items-center rounded-md p-2 text-base font-medium text-white hover:bg-bounce-300 hover:text-white"
                          >
                            <item.icon
                              className="mr-4 h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col overflow-y-auto bg-bounce-200 pt-5 pb-4">
            <div className="flex shrink-0 items-center px-4">
              <Link href="/">
                <img
                  className="h-6 w-auto"
                  src="/assets/images/bounce_logo_white.png"
                  alt="Bounce logo"
                />
              </Link>
            </div>
            <nav
              className="mt-12 flex flex-1 flex-col divide-y divide-white overflow-y-auto"
              aria-label="Sidebar"
            >
              <div className="space-y-1 px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    onClick={() => setCurrentTab(item.name)}
                    className={classNames(
                      item.name === currentTab
                        ? 'bg-bounce-200 text-white'
                        : 'text-white hover:bg-bounce-300 hover:text-white',
                      'group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6'
                    )}
                    aria-current={item.name === currentTab ? 'page' : undefined}
                  >
                    <item.icon
                      className="mr-4 h-6 w-6 shrink-0 text-white"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-6">
                <div className="space-y-1 px-2">
                  {secondaryNavigation.map((item) => (
                    <a
                      key={item.name}
                      onClick={() => setCurrentTab(item.name)}
                      className="group flex items-center rounded-md p-2 text-sm font-medium leading-6 text-white hover:bg-bounce-300 hover:text-white"
                    >
                      <item.icon
                        className="mr-4 h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="flex flex-1 flex-col lg:pl-64">
          <div className="flex h-16 shrink-0 border-b border-gray-200 bg-white lg:border-none">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            {/* Search bar */}
            <div className="flex flex-1 justify-between px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
              <div className="flex flex-1">
                {/* <form className="flex w-full md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div
                      className="pointer-events-none absolute inset-y-0 left-0 flex items-center"
                      aria-hidden="true"
                    >
                      <MagnifyingGlassIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search-field"
                      name="search-field"
                      className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      placeholder="Chercher une collecte"
                      type="search"
                    />
                  </div>
                </form> */}
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                {/* <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm lg:rounded-md lg:p-2 lg:hover:bg-gray-50">
                      {/* <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className="ml-3 hidden text-sm font-medium text-gray-700 lg:block">
                        <span className="sr-only">Open user menu for </span>
                        Emilia Birch
                      </span> */}
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-bounce-200">
                        <span className="text-lg font-medium leading-none text-white">
                          {club.initial}
                        </span>
                      </span>
                      {/* <ChevronDownIcon
                        className="ml-1 hidden h-5 w-5 shrink-0 text-gray-400 lg:block"
                        aria-hidden="true"
                      /> */}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {menuItems.map((menuItem, key) => {
                        return (
                          <Menu.Item key={key}>
                            {({ active }) => (
                              <a
                                onClick={() => setCurrentTab(menuItem.name)}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {menuItem.name}
                              </a>
                            )}
                          </Menu.Item>
                        );
                      })}
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => logoutClicked()}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Se déconnecter
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          {currentTab === 'Dashboard' && (
            <main className="flex-1 pb-8">
              {/* Page header */}
              <div className="bg-white shadow">
                <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
                  <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                    <div className="min-w-0 flex-1">
                      {/* Profile */}
                      <div className="flex items-center">
                        {/* <img
                        className="hidden h-16 w-16 rounded-full sm:block"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                        alt=""
                      /> */}
                        {/* <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-bounce-200">
                          <span className="text-lg font-medium leading-none text-white">
                            {club.initial}
                          </span>
                        </span> */}
                        <div>
                          <div className="flex items-center">
                            {/* <img
                              className="h-16 w-16 rounded-full sm:hidden"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                              alt=""
                            /> */}
                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-bounce-200">
                              <span className="text-lg font-medium leading-none text-white">
                                {club.initial}
                              </span>
                            </span>
                            <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                              Bonjour,
                            </h1>
                          </div>
                          <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap sm:pt-4">
                            <dt className="sr-only">Club</dt>
                            <dd className="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                              <BuildingOfficeIcon
                                className="mr-1.5 h-5 w-5 shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              {club.title}
                            </dd>
                            <dt className="sr-only">Club localisation</dt>
                            <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                              <MapPinIcon
                                className="mr-1.5 h-5 w-5 shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              {club.localisation}
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                      {/* <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Add money
                    </button> */}
                      <button
                        type="button"
                        onClick={() => setCurrentTab('newCollect')}
                        className="inline-flex items-center rounded-md bg-bounce-300 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-bounce-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        Programmer une collecte
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                  {/* <h2 className="text-lg font-medium leading-6 text-gray-900">
                  Overview
                </h2> */}
                  <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card */}
                    {overviews.map((card) => (
                      <div
                        key={card.name}
                        className="overflow-hidden rounded-lg bg-white shadow"
                      >
                        <div className="p-5">
                          <div className="flex items-center">
                            <div className="shrink-0">
                              <card.icon
                                className="h-6 w-6 text-gray-400"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                              <dl>
                                <dt className="truncate text-sm font-medium text-gray-500">
                                  {card.name}
                                </dt>
                                <dd>
                                  <div className="text-lg font-medium text-gray-900">
                                    {card.amount}
                                  </div>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 px-5 py-3">
                          {/* <div className="text-sm">
                          <a
                            href={card.href}
                            className="font-medium text-cyan-700 hover:text-cyan-900"
                          >
                            View all
                          </a>
                        </div> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
                  Historique des collectes
                </h2>

                {/* Activity list (smallest breakpoint only) */}
                <div className="shadow sm:hidden">
                  <ul
                    role="list"
                    className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
                  >
                    {collectsClub.map((collect) => (
                      <li key={collect.id}>
                        {/* <a
                          href={collect.href}
                          className="block bg-white p-4 hover:bg-gray-50"
                        >
                          <span className="flex items-center space-x-4">
                            <span className="flex flex-1 space-x-2 truncate">
                              <CalendarDaysIcon
                                className="h-5 w-5 shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="flex flex-col truncate text-sm text-gray-500">
                                <span className="truncate">{collect.name}</span>
                                <span>
                                  <span className="font-medium text-gray-900">
                                    {collect.amount}
                                  </span>{' '}
                                  {collect.currency}
                                </span>
                                <time dateTime={collect.datetime}>
                                  {collect.date}
                                </time>
                              </span>
                            </span>
                            <ChevronRightIcon
                              className="h-5 w-5 shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </a> */}
                        <span className="flex flex-1 space-x-2 truncate">
                          <CalendarDaysIcon
                            className="h-5 w-5 shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="flex flex-col truncate text-sm text-gray-500">
                            <time dateTime={collect.dateRequest}>
                              {collect.dateRequest}
                            </time>
                            <span>
                              <time dateTime={collect.dateCollect}>
                                {collect.dateCollect}
                              </time>
                            </span>
                            <span
                              className={getBackgroundColor(collect.status)}
                            >
                              {collect.status}
                            </span>
                            <span className="truncate">
                              {collect.numberOfBox}
                            </span>
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>

                  <nav
                    className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3"
                    aria-label="Pagination"
                  >
                    <div className="flex flex-1 justify-between">
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Précédent
                      </a>
                      <a
                        href="#"
                        className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Suivant
                      </a>
                    </div>
                  </nav>
                </div>

                {/* Activity table (small breakpoint and up) */}
                <div className="hidden sm:block">
                  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="mt-2 flex flex-col">
                      <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th
                                className="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                scope="col"
                              >
                                Date de la demande
                              </th>
                              <th
                                className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                                scope="col"
                              >
                                Date de la collecte
                              </th>
                              <th
                                className="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                scope="col"
                              >
                                Statut
                              </th>
                              <th
                                className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                                scope="col"
                              >
                                Nombre de carton
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {collectsClub.map((collect) => (
                              <tr key={collect.id} className="bg-white">
                                <td className="w-full max-w-0 whitespace-nowrap px-6 text-sm text-gray-900">
                                  <div className="flex">
                                    {/* <a
                                    href="/"
                                    className="group inline-flex space-x-2 truncate text-sm"
                                  >
                                    
                                  </a> */}
                                    {/* <BanknotesIcon
                                    className="h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  /> */}
                                    <p className="truncate text-gray-500 group-hover:text-gray-900">
                                      {collect.dateRequest}
                                    </p>
                                  </div>
                                </td>
                                <td className="whitespace-nowrap px-6 text-right text-sm text-gray-500">
                                  <time dateTime={collect.dateCollect}>
                                    {collect.dateCollect}
                                  </time>

                                  {/* {collect.currency} */}
                                </td>
                                <td className="whitespace-nowrap px-6 text-sm text-gray-500">
                                  <span
                                    className={getBackgroundColor(
                                      collect.status
                                    )}
                                  >
                                    {collect.status}
                                  </span>
                                </td>
                                <td className="whitespace-nowrap px-6 text-right text-sm text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {collect.numberOfBox}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {/* Pagination */}
                        {/* <nav
                          className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                          aria-label="Pagination"
                        >
                          <div className="hidden sm:block">
                            <p className="text-sm text-gray-700">
                              Showing <span className="font-medium">1</span> to{' '}
                              <span className="font-medium">10</span> of{' '}
                              <span className="font-medium">20</span> results
                            </p>
                          </div>
                          <div className="flex flex-1 justify-between gap-x-3 sm:justify-end">
                            <a
                              href="#"
                              className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                            >
                              Précédent
                            </a>
                            <a
                              href="#"
                              className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                            >
                              Suivant
                            </a>
                          </div>
                        </nav> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          )}
          {currentTab === 'Profile' && <Profile club={club}></Profile>}
          {currentTab === 'FAQ' && <FaqComponent></FaqComponent>}
          {currentTab === 'Factures' && <Invoices></Invoices>}
          {currentTab === 'newCollect' && (
            <NewCollect
              clubName={club.clubName}
              clubId={club.clubId}
            ></NewCollect>
          )}
        </div>
      </div>
    </>
  );
}
