import _ from 'lodash';
import Image from 'next/image';

import { useIsMobile } from '@/hooks';

export default function ClientSection() {
  let clubs = [
    // 'Bastogne',
    'Genval',
    // 'Geronsart',
    'Justine',
    'LaRaquette',
    'LaHulpe',
    'Parc',
    'Roseau',
    // 'Waremme',
    'Wellington',
  ];

  if (useIsMobile()) {
    clubs = _.filter(clubs, (club) => club !== 'Wellington');
  }
  return (
    <div>
      <div className="mx-auto text-center">
        <p className="text-xl sm:text-2xl">Ils nous font confiance</p>
      </div>
      <div className="mx-auto max-w-screen-xl py-8 lg:pb-8">
        <div className="grid grid-cols-2 place-items-center gap-8 text-gray-500 dark:text-gray-400 sm:grid-cols-3 sm:gap-12 lg:grid-cols-7">
          {clubs.map((clubName, index) => (
            <div className="flex items-center lg:justify-center" key={index}>
              <Image
                className="hover:text-gray-900 "
                src={`/assets/images/logo-clubs-100/${clubName}.png`}
                alt={clubName}
                width={75}
                height={75}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
