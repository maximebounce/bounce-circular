export const websiteDomain =
  process.env.APP_URL ||
  process.env.NEXT_PUBLIC_APP_URL ||
  `http://localhost:3000`;

export const appInfo = {
  // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
  appName: 'boilerplate-circular-nextjs',
  apiDomain: websiteDomain,
  websiteDomain,
  apiBasePath: '/api/auth',
  websiteBasePath: '/auth',
};
