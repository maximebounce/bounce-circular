import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import SuperTokens, { redirectToAuth } from 'supertokens-auth-react';

import { Meta } from '@/layouts/Meta';
import SimpleNavBar from '@/layouts/SimpleNavbar';
import { Main } from '@/templates/Main';

const SuperTokensComponentNoSSR = dynamic<
  React.ComponentProps<typeof SuperTokens.getRoutingComponent>
>(new Promise((res) => res(SuperTokens.getRoutingComponent)), { ssr: false });

export default function Auth() {
  // if the user visits a page that is not handled by us (like /auth/random), then we redirect them back to the auth page.
  useEffect(() => {
    if (SuperTokens.canHandleRoute() === false) {
      redirectToAuth();
    }
  }, []);

  return (
    <Main
      meta={<Meta title="Bounce" description="Connexion à votre espace club" />}
    >
      <div className="mx-auto flex h-screen flex-col justify-between bg-bounce-100">
        <SimpleNavBar></SimpleNavBar>
        <SuperTokensComponentNoSSR />
        <div></div>
      </div>
    </Main>
  );
}
