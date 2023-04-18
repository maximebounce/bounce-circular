import { websiteDomain } from '@/config/appInfo';
import type { IInvite } from '@/interfaces/invite';

export const postMessageContact = async (data: any) => {
  const urlApi =
    process.env.NEXT_PUBLIC_ENV === 'DEV'
      ? '/api/contact/n8n'
      : '/api/contact/n8n';
  const headers = new Headers();
  headers.set(
    'Authorization',
    `Basic ${btoa(
      `${process.env.NEXT_PUBLIC_PASSWORD_N8N}:${process.env.NEXT_PUBLIC_PASSWORD_N8N}`
    )}`
  );
  console.log(JSON.stringify(data));
  try {
    const res = await fetch(urlApi, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
  return undefined;
};

export const postInvite = async (data: IInvite) => {
  const urlApi = `${websiteDomain}/api/invite`; // ?clubId=${data.clubId}
  const headers = new Headers();
  headers.set('method', 'POST');
  headers.set('mode', 'GcorsET');
  headers.set('credentials', 'include');
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  };
  const response = await fetch(urlApi, options);
  const res = await response.json();
  return res;
};
