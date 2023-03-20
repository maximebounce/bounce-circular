import { useEffect, useState } from 'react';
import {
  SessionAuth,
  useSessionContext,
} from 'supertokens-auth-react/recipe/session';

import type { IClub } from '@/interfaces/club';
import Dashboard from '@/layouts/Dashboard';
import Loader from '@/layouts/Loader';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { getUserWithMetaData } from '@/utils/api';

import NotFound from '../notFound';

// export const getServerSideProps: GetServerSideProps = async (context: any) => {
//   const { clubId } = context.query;
//   const club: IClub | undefined = await getClubFromNotion(clubId);
//   if (!club) {
//     return {
//       props: {},
//     };
//   }
//   return { props: { club } };
// };

const Club = () => {
  const [club, setClub] = useState<IClub>();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUser = async () => {
      const data = await getUserWithMetaData();
      if (data) {
        setClub(data.club as IClub);
      }
      setLoading(false);
    };

    getUser();

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);
  const session = useSessionContext();

  if (session.loading === true || isLoading) {
    return <Loader></Loader>;
  }
  if (!club) return <NotFound></NotFound>;

  return (
    <Main meta={<Meta title={club.clubName} description={club.title!} />}>
      <SessionAuth>
        <Dashboard club={club}></Dashboard>
      </SessionAuth>
    </Main>
  );
};

export default Club;
