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
