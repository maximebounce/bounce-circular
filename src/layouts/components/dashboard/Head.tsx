import moment from 'moment';

import type { IClub } from '@/interfaces/club';

export default function Head({ club }: { club: IClub }) {
  return (
    <div className="p-8">
      <div className="border-b border-gray-200 pb-4">
        <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
          <h3 className="ml-2 mt-2 text-base font-semibold leading-6 text-gray-900">
            {club.title}
          </h3>
        </div>
      </div>

      <div>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Nombre de collectes effectuées
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {club.numberCollects}
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              # collectes disponibles
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              2
            </dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Date de début du contrat
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {moment(club.startingDate).utc().format('DD/MM/YYYY')}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
