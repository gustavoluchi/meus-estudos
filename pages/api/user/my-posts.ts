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
  const session = await getServerSession(req, res, authOptions);
  if (session === null) return res.status(401).json({error: 'You must be logged in.'});
  invariant(session.user !== undefined);
  if (req.method === 'GET') {
    const result = await prisma.post.findMany({
      // orderBy: {updatedAt: 'desc'},
      take: 5, //TODO: how many + pagination
      where: {
        userId: session.user.id
      }
    });
    if (result === null) return res.status(404).json({error: '??'}); //TODO: error
    return res.json(result);
  }
}
