import type { GetServerSideProps } from 'next';

import type { IClub } from '@/interfaces/club';
import Dashboard from '@/layouts/Dashboard';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { getClubFromNotion } from '@/utils/api';

import NotFound from '../notFound';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { clubId } = context.query;
  const club: IClub | undefined = await getClubFromNotion(clubId);
  if (!club) {
    return {
      props: {},
    };
  }
  return { props: { club } };
};

const Club = ({ club }: { club: IClub }) => {
  if (!club) return <NotFound></NotFound>;
  return (
    <Main meta={<Meta title={club.clubName} description={club.title!} />}>
      <Dashboard club={club}></Dashboard>
    </Main>
  );
};

export default Club;
