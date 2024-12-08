import type { IInvoice } from '@/interfaces/invoice';

export const getInvoicesFromNotion = async (
  odooId: number
): Promise<IInvoice[] | { error: string }> => {
  const BASE_URL =
    process.env.NEXT_PUBLIC_ENV === 'DEV'
      ? process.env.BOUNCE_API_DEV
      : process.env.BOUNCE_API_PROD;

  if (!BASE_URL) {
    console.error('Missing BASE_URL for API environment');
    return { error: 'API base URL is not configured.' };
  }
  const apiUrl = `${BASE_URL}/odoo/contact-invoices/${odooId}?apiKey=${process.env.ODOO_API_KEY}`;

  try {
    const headers = new Headers();
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      console.error('API Error:', response.statusText);
      return { error: `Failed to fetch invoices. Status: ${response.status}` };
    }
    const data: IInvoice[] = await response.json();
    return data;
  } catch (err: unknown) {
    console.log(err);
    return { error: 'error' };
  }
};
