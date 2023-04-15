import {prisma} from '@/shared/infra/prisma';
import type {NextApiRequest, NextApiResponse} from 'next';
import {getServerSession} from 'next-auth';
import invariant from 'tiny-invariant';
import {authOptions} from '../auth/[...nextauth]';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      error: new Error(`The HTTP ${req.method} method is not supported at this route.`)
    });
  }
  const {id} = req.query;
  invariant(typeof id === 'string', `id must be one string.`);
  const session = await getServerSession(req, res, authOptions);
  if (session === null) return res.status(400).json({error: 'You must be logged in.'});
  const result = await prisma.user.findUnique({
    where: {
      id
    }
  });
  if (result === null) return res.status(404).json({error: 'user not found.'});
  const {gh_username, email, image, name, username, phone} = result;
  return res.json({gh_username, email, image, name, username, phone});
}
