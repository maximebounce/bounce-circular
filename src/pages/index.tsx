// import { useRouter } from 'next/router';

import HeroSection from '@/layouts/HeroSection';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Bounce circular"
          description="Bounce circular is a programm to help tennis and padel clubs/players to recycle their balls."
        />
      }
    >
      <HeroSection></HeroSection>
    </Main>
  );
};

export default Index;
