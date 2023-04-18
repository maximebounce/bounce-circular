import { websiteDomain } from '@/config/appInfo';

export const getUserWithMetaData = async () => {
  const urlApi = `${websiteDomain}/api/user/`;
  const headers = new Headers();
  headers.set('method', 'GET');
  headers.set('mode', 'cors');
  headers.set('credentials', 'include');
  const options = {
    method: 'GET',
    headers,
  };
  const res = await fetch(urlApi, options);
  const data = await res.json();
  return data;
};

export const getUserMetaDataOnly = async () => {
  const urlApi = `${websiteDomain}/api/userMetaData/`;
  const headers = new Headers();
  headers.set('method', 'GET');
  headers.set('mode', 'cors');
  headers.set('credentials', 'include');
  const options = {
    method: 'GET',
    headers,
  };
  const res = await fetch(urlApi, options);
  const data = await res.json();
  return data;
};

// export const createUserAccount = async (clubId: string, email: string) => {
//   const urlApi = `${websiteDomain}/api/invite/?clubId=${clubId}`;
//   const headers = new Headers();
//   headers.set('method', 'GET');
//   headers.set('mode', 'GcorsET');
//   headers.set('credentials', 'include');
//   const options = {
//     method: 'POST',
//     headers,
//     body: email,
//   };
//   const res = await fetch(urlApi, options);
//   const data = await res.json();
//   return data;
// };

// export const postAuthOnN8N = async (emailString: string) => {
//   const urlApi =
//     process.env.NEXT_PUBLIC_ENV === 'DEV'
//       ? 'https://bouncesports.app.n8n.cloud/webhook-test/10022ab0-8651-409d-bb55-a1739efd1cfa'
//       : 'https://bouncesports.app.n8n.cloud/webhook/10022ab0-8651-409d-bb55-a1739efd1cfa';
//   const headers = new Headers();
//   headers.set(
//     'Authorization',
//     `Basic ${btoa(`${process.env.USERNAME_N8N}:${process.env.PASSWORD_N8N}`)}`
//   );

//   try {
//     const res = await fetch(urlApi, {
//       method: 'POST',
//       headers,
//       body: JSON.stringify({
//         email: emailString,
//       }),
//     });
//     const data: IClub = await res.json();
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
//   return undefined;
// };
