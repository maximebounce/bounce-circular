import Dashboard from 'supertokens-node/recipe/dashboard';
import EmailPasswordNode from 'supertokens-node/recipe/emailpassword';
import SessionNode from 'supertokens-node/recipe/session';
import UserMetadata from 'supertokens-node/recipe/usermetadata';
import UserRoles from 'supertokens-node/recipe/userroles';
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

  return {
    framework: 'express',
    supertokens: {
      // https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
      connectionURI,
      apiKey,
    },
    appInfo,
    recipeList: [
      EmailPasswordNode.init({
        override: {
          apis: (originalImplementation: any) => {
            return {
              ...originalImplementation,
              signUpPOST: undefined,
            };
          },
          functions: (originalImplementation: any) => {
            return {
              ...originalImplementation,
              async updateEmailOrPassword(input: any) {
                // This can be called on the backend
                // in your own APIs
                if (input.password === appInfo.FAKE_PASSWORD) {
                  throw new Error('Use a different password');
                }
                return originalImplementation.updateEmailOrPassword(input);
              },
              async resetPasswordUsingToken(input: any) {
                // This is called during the password reset flow
                // when the user enters their new password
                if (input.newPassword === appInfo.FAKE_PASSWORD) {
                  return {
                    status: 'RESET_PASSWORD_INVALID_TOKEN_ERROR',
                  };
                }
                return originalImplementation.resetPasswordUsingToken(input);
              },
              async signIn(input: any) {
                // This is called in the email password sign in API
                if (input.password === appInfo.FAKE_PASSWORD) {
                  return {
                    status: 'WRONG_CREDENTIALS_ERROR',
                  };
                }
                return originalImplementation.signIn(input);
              },
            };
          },
        },
      }),
      SessionNode.init(),
      Dashboard.init(),
      UserMetadata.init(),
      UserRoles.init({
        skipAddingRolesToAccessToken: true,
        skipAddingPermissionsToAccessToken: true,
      }),
    ],
    isInServerlessEnv: true,
  };
};
