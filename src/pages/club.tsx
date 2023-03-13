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

const Club = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    {clubs.map((club, index) => (
      <div className="my-4 w-full rounded-md px-2 py-1" key={index}>
        <Link href={`/club/${club.clubId}`}>{`${club.clubName}`}</Link>
      </div>
    ))}
  </Main>
);

export default Club;
