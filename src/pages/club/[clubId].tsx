import type { GetServerSideProps } from 'next';

import type { IClub } from '@/interfaces/club';
import Dashboard from '@/layouts/Dashboard';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { clubId } = context.query;
  const url =
    'https://bouncesports.app.n8n.cloud/webhook/877ad989-7f7c-49bb-b8b7-500f3ea578f0';
  const username = 'bounce';
  const password = 'bounce';
  const headers = new Headers();
  headers.set('Authorization', `Basic ${btoa(`${username}:${password}`)}`);
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      clubId,
    }),
  });
  const club: IClub = (await res.json()) || { collects: [] };
  return { props: { club } };
};

const Club = ({ club }: { club: IClub }) => {
  return (
    <Main meta={<Meta title={club.clubName} description={club.title!} />}>
      {/* <Head club={club}></Head>
      <Collects club={club}></Collects> */}
      <Dashboard club={club}></Dashboard>
    </Main>
  );
};

export default Club;
