// import { useRouter } from 'next/router';

import LandingPage from '@/layouts/LandingPage';
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
      <LandingPage></LandingPage>
    </Main>
  );
};

export default Index;
