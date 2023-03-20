import Router from 'next/router';
import EmailPasswordReact from 'supertokens-auth-react/recipe/emailpassword';
import SessionReact from 'supertokens-auth-react/recipe/session';

import { appInfo } from './appInfo';
import { defaultTranslationsEmailPassword } from './defaultTranslation';

export const frontendConfig = () => {
  return {
    appInfo,
    recipeList: [
      EmailPasswordReact.init({
        resetPasswordUsingTokenFeature: {
          enterEmailForm: {
            style: `
              [data-supertokens~="container"] {
                background-color: #F9F5F3;
                box-shadow: none;
                width: 35%;
              }

              [data-supertokens~=button] {
                    background-color: #0a121b;
                    border: 0px;
                    margin: 0 auto;
                    font-weight: 500;
                    padding-top: 0.625rem;
                    padding-bottom: 0.625rem;
                    padding-left: 1.25rem;
                    padding-right: 1.25rem;
                    border-radius: 1.5rem;
                }
            `,
          },
        },
        signInAndUpFeature: {
          signUpForm: {
            formFields: [
              {
                id: 'firstName',
                label: 'first_name',
                placeholder: 'John',
              },
              {
                id: 'lastName',
                label: 'last_name',
                placeholder: 'Doe',
              },
            ],
            style: `
                [data-supertokens~=button] {
                    background-color: #0a121b;
                    border: 0px;
                    width: 50%;
                    margin: 0 auto;
                    font-weight: 500;
                    padding-top: 0.625rem;
                    padding-bottom: 0.625rem;
                    padding-left: 1.25rem;
                    padding-right: 1.25rem;
                    border-radius: 1.5rem;
                }

                [data-supertokens~="container"] {
                  background-color: #F9F5F3;
                  box-shadow: none;
                }

                [data-supertokens~="link"] {
                  color: #E9351A;
                }

                [data-supertokens~="superTokensBranding"] {
                  background-color: #F9F5F3;
                }
            `,
          },
          signInForm: {
            style: `
                [data-supertokens~=button] {
                    background-color: #0a121b;
                    border: 0px;
                    width: 75%;
                    margin: 0 auto;
                    font-weight: 500;
                    padding-top: 0.625rem;
                    padding-bottom: 0.625rem;
                    padding-left: 1.25rem;
                    padding-right: 1.25rem;
                    border-radius: 1.5rem;
                }

                [data-supertokens~="container"] {
                  background-color: #F9F5F3;
                  box-shadow: none;
                }

                [data-supertokens~="link"] {
                  color: #E9351A;
                }

                [data-supertokens~="superTokensBranding"] {
                  background-color: #F9F5F3;
                }
            `,
          },
        },
        getRedirectionURL: async (context) => {
          if (context.action === 'SUCCESS') {
            if (context.redirectToPath !== undefined) {
              // we are navigating back to where the user was before they authenticated
              return context.redirectToPath;
            }
            return '/dashboard';
          }
          if (context.action === 'RESET_PASSWORD') {
            console.log('context', context);
            return '/auth/reset-password';
          }
          return '/';
        },
      }),
      SessionReact.init(),
    ],
    languageTranslations: {
      // This object contains all translation related options
      translations: defaultTranslationsEmailPassword,
      /*
       * This optional property sets the default and fallback language.
       * It can be any string that will be used to fetch translations from the above object.
       * Defaults to "en"
       */
      defaultLanguage: 'fr',
    },
    windowHandler: (oI: any) => {
      return {
        ...oI,
        location: {
          ...oI.location,
          setHref: (href: string) => {
            Router.push(href);
          },
        },
      };
    },
  };
};
