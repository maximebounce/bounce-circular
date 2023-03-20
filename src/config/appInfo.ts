export const appInfo = {
  // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
  appName: 'boilerplate-circular-nextjs',
  apiDomain:
    process.env.NEXT_PUBLIC_ENV === 'PRODUCTION'
      ? window.location.origin
      : 'http://localhost:3000',
  websiteDomain:
    process.env.NEXT_PUBLIC_ENV === 'PRODUCTION'
      ? window.location.origin
      : 'http://localhost:3000',
  apiBasePath: '/api/auth',
  websiteBasePath: '/auth',
};
