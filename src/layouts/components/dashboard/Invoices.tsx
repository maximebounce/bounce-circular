import type { IInvoice } from '@/interfaces/invoice';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import Invoice from './Invoice';

export default function Invoices({
  invoices,
  error,
  loading,
}: {
  invoices?: IInvoice[];
  error?: string | null;
  loading: boolean;
}) {
  return (
    <Main meta={<Meta title="Factures" description="Factures" />}>
      <div className="overflow-hidden bg-white p-6 sm:rounded-lg">
        <div className="py-5 sm:px-6">
          {loading && (
            <p className="text-gray-900">Chargement des factures...</p>
          )}
          {!loading && error && (
            <div>
              <p className="font-semibold text-red-600">
                Une erreur est survenue : {error}.
              </p>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Si vous rencontrez un problème pour accéder à vos factures,
                veuillez prendre contact avec Gregory à l&apos;adresse:{' '}
                <strong>gregory@bouncesports.co</strong>
              </p>
            </div>
          )}
          {!loading && !error && invoices && invoices.length > 0 && (
            <>
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Vos Factures
              </h3>
              <ul className="sm:divide-y sm:divide-gray-200">
                {invoices.map((invoice: IInvoice, key: number) => (
                  <Invoice key={key} invoice={invoice}></Invoice>
                ))}
              </ul>
            </>
          )}
          {!loading && !error && (!invoices || invoices?.length === 0) && (
            <div>
              <p className="text-gray-600">
                Aucune facture disponible pour le moment.
              </p>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Si vous rencontrez un problème pour accéder à vos factures,
                veuillez prendre contact avec Gregory à l&apos;adresse:{' '}
                <strong>gregory@bouncesports.co</strong>
              </p>
            </div>
          )}
        </div>
      </div>
    </Main>
  );
}
