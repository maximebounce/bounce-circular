import Image from 'next/image';

export default function ClientSection() {
  const clubs = [
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
  return (
    <div>
      {/* <p className="mx-auto max-w-screen-xl pb-4 text-lg lg:pb-8">
        De nombreux clubs nous font confiance
      </p> */}
      <div className="mx-auto max-w-screen-xl py-8 lg:pb-16">
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
