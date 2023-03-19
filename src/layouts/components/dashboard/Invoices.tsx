import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export default function Invoices() {
  return (
    <Main meta={<Meta title="Factures" description="Factures" />}>
      <div className="bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            En cours de développement
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Si vous souhaitez accéder à vos factures, veuillez prendre contact
            avec Gregory à l&apos;adresse:{' '}
            <strong>hello@bouncesports.co</strong>
          </p>
        </div>
      </div>
    </Main>
  );
}
