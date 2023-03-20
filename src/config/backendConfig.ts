import Dashboard from 'supertokens-node/recipe/dashboard';
import EmailPasswordNode from 'supertokens-node/recipe/emailpassword';
import SessionNode from 'supertokens-node/recipe/session';
import UserMetadata from 'supertokens-node/recipe/usermetadata';
import type { TypeInput } from 'supertokens-node/types';

import { appInfo } from './appInfo';

export const backendConfig = (): TypeInput => {
  const apiKey =
    process.env.NEXT_PUBLIC_ENV === 'PRODUCTION'
      ? process.env.API_KEY_SUPER_TOKENS_PROD!
      : process.env.API_KEY_SUPER_TOKENS_ACC!;

  const connectionURI =
    process.env.NEXT_PUBLIC_ENV === 'PRODUCTION'
      ? process.env.URI_SUPER_TOKENS_PROD!
      : process.env.URI_SUPER_TOKENS_ACC!;

  console.log('connectionURI', connectionURI);
  return {
    framework: 'express',
    supertokens: {
      // https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
      connectionURI,
      apiKey,
    },
    appInfo,
    recipeList: [
      EmailPasswordNode.init(),
      SessionNode.init(),
      Dashboard.init(),
      UserMetadata.init(),
    ],
    isInServerlessEnv: true,
  };
};
