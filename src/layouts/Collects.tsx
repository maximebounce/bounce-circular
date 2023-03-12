import { orderBy } from 'lodash';
import moment from 'moment';

import type { IClub } from '@/interfaces/club';
import type { ICollect } from '@/interfaces/collect';

export default function Collects({ club }: { club: IClub }) {
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
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Collectes
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Historique des collectes de votre club
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-bounce-300 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Programmer une collecte
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full pb-12 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Date de la demande
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Date de la collecte
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Statut
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Nombre de carton
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {collectsClub.map((collect, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {collect.dateRequest}
                          </div>
                          {/* <div className="text-gray-500">{collect.email}</div> */}
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="text-gray-900">{collect.dateCollect}</div>
                      {/* <div className="text-gray-500">{collect.department}</div> */}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <span className={getBackgroundColor(collect.status)}>
                        {collect.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {collect.numberOfBox}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
