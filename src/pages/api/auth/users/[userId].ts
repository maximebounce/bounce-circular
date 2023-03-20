// import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import supertokens from 'supertokens-node';
import type { SessionRequest } from 'supertokens-node/framework/express';
import { superTokensNextWrapper } from 'supertokens-node/nextjs';
import { verifySession } from 'supertokens-node/recipe/session/framework/express';
import UserMetadata from 'supertokens-node/recipe/usermetadata';

import { backendConfig } from '../../../../config/backendConfig';

supertokens.init(backendConfig());

export default async function handler(req: any, res: any) {
  const { method } = req;
  const { session } = req as SessionRequest;

  switch (method) {
    case 'PUT':
      await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: 'http://localhost:3000',
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
      try {
        if (session) {
          const userId = session.getUserId();
          await UserMetadata.updateUserMetadata(userId, {
            clubId: '87b5a0d5-5306-4b1b-9b55-dbbd649d16ca',
          });
          res.json({ message: 'successfully updated user metadata' });
        }
      } catch (err) {
        res.status(400).end(`Metadata not updated`);
      }

      break;
    default:
      res.status(405).end(`Method ${method} not allowed`);
  }
}
