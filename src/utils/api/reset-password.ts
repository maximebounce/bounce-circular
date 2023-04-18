export const resetPasswordEmail = async (inviteLink: string, email: string) => {
  const urlApi =
    process.env.NEXT_PUBLIC_ENV === 'DEV'
      ? 'https://bouncesports.app.n8n.cloud/webhook/6b1413ce-7399-41a1-8f18-e03f49f83448'
      : 'https://bouncesports.app.n8n.cloud/webhook/6b1413ce-7399-41a1-8f18-e03f49f83448';
  const headers = new Headers();
  headers.set(
    'Authorization',
    `Basic ${btoa(
      `${process.env.NEXT_PUBLIC_USERNAME_N8N}:${process.env.NEXT_PUBLIC_PASSWORD_N8N}`
    )}`
  );
  try {
    const res = await fetch(urlApi, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        inviteLink,
        email,
      }),
    });
    const response = await res.json();
    console.log('response', response);
    return response;
  } catch (err) {
    console.log(err);
  }
  return undefined;
};
