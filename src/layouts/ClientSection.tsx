import Image from 'next/image';

export default function ClientSection() {
  const clubs = [
    'Bastogne',
    'Genval',
    'Geronsart',
    'Justine',
    'LaRaquette',
    'LaHulpe',
    'Parc',
    'Roseau',
    'Waremme',
    'Wellington',
  ];
  return (
    <div>
      <p className="mx-auto max-w-screen-xl px-4 pb-8 lg:pb-16">
        Des clubs qui nous font confiance
      </p>
      <div className="mx-auto max-w-screen-xl px-4 pb-8 lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 dark:text-gray-400 sm:grid-cols-3 sm:gap-12 lg:grid-cols-5">
          {clubs.map((clubName, index) => (
            <div className="flex items-center lg:justify-center" key={index}>
              <Image
                className="hover:text-gray-900 "
                src={`/assets/images/logo-clubs-100/${clubName}.png`}
                alt={clubName}
                width={70}
                height={70}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
