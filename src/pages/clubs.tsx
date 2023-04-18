import Link from 'next/link';

import type { IClub } from '@/interfaces/club';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const clubs: IClub[] = [
  {
    clubId: '87b5a0d5-5306-4b1b-9b55-dbbd649d16ca',
    clubName: 'La Hulpe',
  },
  {
    clubId: 'b6f3f9a2-952d-4c71-8b45-4153c1513af3',
    clubName: 'Geronsart',
  },
];

// export async function getServerSideProps(context: any) {
// this runs on the backend, so we must call init on supertokens-node SDK
// supertokensNode.init(backendConfig());
// let session;
// try {
//   session = await Session.getSession(context.req, context.res, {
//     async overrideGlobalClaimValidators() {
//       return [];
//     },
//   });
// } catch (err: any) {
//   if (err.type === Session.Error.TRY_REFRESH_TOKEN) {
//     return { props: { fromSupertokens: 'needs-refresh' } };
//   }
//   if (err.type === Session.Error.UNAUTHORISED) {
//     // this will force the frontend to try and refresh which will fail
//     // clearing all cookies and redirecting the user to the login screen.
//     return { props: { fromSupertokens: 'needs-refresh' } };
//   }
//   throw err;
// }
//   return {
//     props: { club: { clubId: 'v', clubName: 'TEST' } },
//   };
// }

const Clubs = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    {clubs.map((club, index) => (
      <div className="my-4 w-full rounded-md px-2 py-1" key={index}>
        <Link href={`/club/${club.clubId}`}>{`${club.clubName}`}</Link>
      </div>
    ))}
  </Main>
);

export default Clubs;
