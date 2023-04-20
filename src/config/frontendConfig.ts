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
                font-family: "Sohne", sans-serif;
              }

              [data-supertokens~=button] {
                    background-color: #0a121b;
                    border: 0px;
                    width: 90%;
                    margin: 0 auto;
                    font-weight: 500;
                    padding-top: 0.6rem;
                    padding-bottom: 0.6rem;
                    padding-left: 1.25rem;
                    padding-right: 1.25rem;
                    border-radius: 1.5rem;
                    font-family: "Sohne", sans-serif;
                    font-size: 0.85rem;
                }

                [data-supertokens~="inputContainer"] {
                  font-family: "Sohne", sans-serif;
                }

                [data-supertokens~="input"]{
                  font-family: "Sohne", sans-serif;
                }
            `,
          },
          submitNewPasswordForm: {
            style: `
              [data-supertokens~="container"] {
                background-color: #F9F5F3;
                box-shadow: none;
                font-family: "Sohne", sans-serif;
              }

              [data-supertokens~=button] {
                    background-color: #0a121b;
                    border: 0px;
                    width: 90%;
                    margin: 0 auto;
                    font-weight: 500;
                    padding-top: 0.55rem;
                    padding-bottom: 0.55rem;
                    padding-left: 1.25rem;
                    padding-right: 1.25rem;
                    border-radius: 1.5rem;
                    font-family: "Sohne", sans-serif;
                    font-size: 0.9rem;
                }

                [data-supertokens~="inputContainer"] {
                  font-family: "Sohne", sans-serif;
                }

                [data-supertokens~="input"]{
                  font-family: "Sohne", sans-serif;
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
                placeholder: '',
              },
              {
                id: 'lastName',
                label: 'last_name',
                placeholder: '',
              },
            ],
            style: `
                [data-supertokens~="input"]{
                  font-family: "Sohne", sans-serif;
                }

                [data-supertokens~=button] {
                    background-color: #0a121b;
                    border: 0px;
                    width: 50%;
                    margin: 0 auto;
                    font-weight: 500;
                    padding-top: 0.55rem;
                    padding-bottom: 0.55rem;
                    padding-left: 1.25rem;
                    padding-right: 1.25rem;
                    border-radius: 1.5rem;
                    font-family: "Sohne", sans-serif;
                    font-size: 0.9rem;
                }

                [data-supertokens~="container"] {
                  background-color: #F9F5F3;
                  box-shadow: none;
                  font-family: "Sohne", sans-serif;
                }

                [data-supertokens~="inputContainer"] {
                  font-family: "Sohne", sans-serif;
                  placeholder:none;
                }

                [data-supertokens~="input"]{
                  font-family: "Sohne", sans-serif;
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
            formFields: [
              {
                id: 'email',
                label: 'Email',
                placeholder: '',
              },
              {
                id: 'password',
                label: 'Mot de passe',
                placeholder: '',
              },
            ],
            style: `
                [data-supertokens~=button] {
                    background-color: #0a121b;
                    border: 0px;
                    width: 75%;
                    margin: 0 auto;
                    font-weight: 500;
                    padding-top: 0.55rem;
                    padding-bottom: 0.55rem;
                    padding-left: 1.25rem;
                    padding-right: 1.25rem;
                    border-radius: 1.5rem;
                    font-family: "Sohne", sans-serif;
                    font-size: 0.9rem;
                }

                [data-supertokens~="container"] {
                  background-color: #F9F5F3;
                  box-shadow: none;
                }

                [data-supertokens~="inputContainer"] {
                  font-family: "Sohne", sans-serif;
                }

                [data-supertokens~="input"]{
                  font-family: "Sohne", sans-serif;
                }

                [data-supertokens~="link"] {
                  color: #E9351A;
                }

                [data-supertokens~="superTokensBranding"] {
                  background-color: #F9F5F3;
                }

                [data-supertokens~=headerSubtitle] {
                  display: none;
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
