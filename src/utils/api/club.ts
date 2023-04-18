import type { IClub } from '@/interfaces/club';

export const checkIfclubExist = async (clubId: string) => {
  const urlApi = `https://bouncesports.app.n8n.cloud/webhook/a143778b-baff-4a3c-8ad7-a08b6807abf7/?clubId=${clubId}`;
  const headers = new Headers();
  headers.set(
    'Authorization',
    `Basic ${btoa(
      `${process.env.NEXT_PUBLIC_PASSWORD_N8N}:${process.env.NEXT_PUBLIC_PASSWORD_N8N}`
    )}`
  );
  const options = {
    method: 'GET',
    headers,
  };
  const res = await fetch(urlApi, options);
  const data = await res.json();
  return data;
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

// export const fetcherClub = (url: string, clubId: string) => {
//   const headers = new Headers();
//   headers.set(
//     'Authorization',
//     `Basic ${btoa(
//       `${process.env.NEXT_PUBLIC_USERNAME_N8N}:${process.env.NEXT_PUBLIC_PASSWORD_N8N}`
//     )}`
//   );

//   return fetch(url, {
//     method: 'POST',
//     headers,
//     body: JSON.stringify({
//       clubId,
//     }),
//   }).then((res) => res.json());
// };

// export const useClub = (clubId: string) => {
//   const urlApi =
//     process.env.NEXT_PUBLIC_ENV === 'DEV'
//       ? '/api/club/n8n/test'
//       : '/api/club/n8n';
//   const {
//     data: club,
//     error,
//     isLoading,
//   } = useSWR([urlApi, clubId], ([url, id]) => fetcherClub(url, id));
//   return {
//     club,
//     isLoading,
//     error,
//   };
// };
