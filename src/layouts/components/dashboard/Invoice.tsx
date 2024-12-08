import type { IInvoice } from '@/interfaces/invoice';

const statuses: Record<'paid' | 'not_paid' | 'in_payment', string> = {
  paid: 'text-green-700 bg-green-50 ring-green-600/20',
  not_paid: 'text-red-600 bg-red-50 ring-red-500/10',
  in_payment: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
};

function convertStatusPayment(paymentState: string) {
  if (paymentState === 'paid') {
    return 'Payé';
  }
  if (paymentState === 'in_payment') {
    return 'En attente';
  }
  return 'Non payé';
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Invoice({ invoice }: { invoice: IInvoice }) {
  return (
    <li
      key={invoice.id}
      className="flex flex-col items-start justify-between gap-y-1 py-2 sm:flex-row sm:items-center sm:gap-x-4 sm:py-3" // Compact vertical spacing, responsive layout
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-start gap-x-2">
          <p className="truncate text-sm font-semibold text-gray-900">
            {invoice.name}
          </p>
          <p
            className={classNames(
              statuses[invoice.payment_state as keyof typeof statuses],
              'whitespace-nowrap rounded-md px-1 py-0.5 text-xs font-medium ring-1 ring-inset'
            )}
          >
            {convertStatusPayment(invoice.payment_state)}
          </p>
        </div>
        <div className="flex items-center gap-x-2 text-xs text-gray-500">
          <p className="whitespace-nowrap">
            Date de la facture{' '}
            <time dateTime={invoice.invoice_date}>{invoice.invoice_date}</time>
          </p>
          <p className="truncate">Créé par Gregory M.</p>
        </div>
      </div>
      <div className="flex-none">
        <a
          href={invoice.url}
          target="_blank"
          className="w-full rounded-md bg-white px-2 py-1 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block sm:w-auto"
        >
          Voir la facture
          <span className="sr-only">, {invoice.name}</span>
        </a>
      </div>
    </li>
  );
}
