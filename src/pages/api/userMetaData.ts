import NextCors from 'nextjs-cors';
import supertokens from 'supertokens-node';
import { superTokensNextWrapper } from 'supertokens-node/nextjs';
import EmailPassword from 'supertokens-node/recipe/emailpassword';
import { verifySession } from 'supertokens-node/recipe/session/framework/express';
import UserMetadata from 'supertokens-node/recipe/usermetadata';

import { appInfo } from '../../config/appInfo';
import { backendConfig } from '../../config/backendConfig';

supertokens.init(backendConfig());

export default async function userMetaData(req: any, res: any) {
  console.log('userMetaData', userMetaData);
  // NOTE: We need CORS only if we are querying the APIs from a different origin
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: appInfo.websiteDomain,
    credentials: true,
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
  });

  // we first verify the session
  await superTokensNextWrapper(
    async (next) => {
      return verifySession()(req, res, next);
    },
    req,
    res
  );

  // if it comes here, it means that the session verification was successful
  const userId = req.session.getUserId();
  const { metadata } = await UserMetadata.getUserMetadata(userId);
  const user = await EmailPassword.getUserById(userId);
  const userWithMetaData = {
    ...metadata,
    ...user,
  };
  console.log('metadata', userWithMetaData);
  return res.json(userWithMetaData);
}
