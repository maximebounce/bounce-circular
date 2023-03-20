import useSWR from 'swr';

import { websiteDomain } from '@/config/appInfo';
import type { IClub } from '@/interfaces/club';

export const fetcherClub = (url: string, clubId: string) => {
  const headers = new Headers();
  headers.set(
    'Authorization',
    `Basic ${btoa(
      `${process.env.NEXT_PUBLIC_USERNAME_N8N}:${process.env.NEXT_PUBLIC_PASSWORD_N8N}`
    )}`
  );

  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      clubId,
    }),
  }).then((res) => res.json());
};

export const getUserWithMetaData = async () => {
  const urlApi = `${websiteDomain}/api/user/`;
  const headers = new Headers();
  headers.set('method', 'GET');
  headers.set('mode', 'GcorsET');
  headers.set('credentials', 'include');
  const options = {
    method: 'GET',
    headers,
  };
  const res = await fetch(urlApi, options);
  const data = await res.json();
  return data;
};

export const useClub = (clubId: string) => {
  const urlApi =
    process.env.NEXT_PUBLIC_ENV === 'DEV'
      ? '/api/club/n8n/test'
      : '/api/club/n8n';
  const {
    data: club,
    error,
    isLoading,
  } = useSWR([urlApi, clubId], ([url, id]) => fetcherClub(url, id));
  return {
    club,
    isLoading,
    error,
  };
};

export const getClubFromNotion = async (clubId: string) => {
  const urlApi =
    process.env.NEXT_PUBLIC_ENV === 'DEV'
      ? 'https://bouncesports.app.n8n.cloud/webhook/877ad989-7f7c-49bb-b8b7-500f3ea578f0' // 'https://bouncesports.app.n8n.cloud/webhook-test/877ad989-7f7c-49bb-b8b7-500f3ea578f0'
      : 'https://bouncesports.app.n8n.cloud/webhook/877ad989-7f7c-49bb-b8b7-500f3ea578f0';
  const headers = new Headers();
  headers.set(
    'Authorization',
    `Basic ${btoa(
      `${process.env.NEXT_PUBLIC_USERNAME_N8N}:${process.env.NEXT_PUBLIC_PASSWORD_N8N}`
    )}`
  );
  console.log(urlApi, headers);
  try {
    const res = await fetch(urlApi, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        clubId,
      }),
    });
    const data: IClub = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
  return undefined;
};

export const postAuthOnN8N = async (emailString: string) => {
  const urlApi =
    process.env.NEXT_PUBLIC_ENV === 'DEV'
      ? 'https://bouncesports.app.n8n.cloud/webhook-test/10022ab0-8651-409d-bb55-a1739efd1cfa'
      : 'https://bouncesports.app.n8n.cloud/webhook/10022ab0-8651-409d-bb55-a1739efd1cfa';
  const headers = new Headers();
  headers.set(
    'Authorization',
    `Basic ${btoa(`${process.env.USERNAME_N8N}:${process.env.PASSWORD_N8N}`)}`
  );

  try {
    const res = await fetch(urlApi, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email: emailString,
      }),
    });
    const data: IClub = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
  return undefined;
};

export const postCollect = async (data: any) => {
  const urlApi =
    process.env.NEXT_PUBLIC_ENV === 'DEV'
      ? '/api/collectRequest/n8n' // '/api/collectRequest/n8n/test'
      : '/api/collectRequest/n8n';
  const headers = new Headers();
  headers.set(
    'Authorization',
    `Basic ${btoa(
      `${process.env.NEXT_PUBLIC_PASSWORD_N8N}:${process.env.NEXT_PUBLIC_PASSWORD_N8N}`
    )}`
  );

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
