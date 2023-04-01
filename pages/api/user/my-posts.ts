import {getSession} from '@/lib/auth/session';
import {prisma} from '@/shared/infra/prisma';
import type {NextApiRequest, NextApiResponse} from 'next';
import invariant from 'tiny-invariant';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  console.log('oi', req, res);
  if (req.method !== 'GET' && req.method !== 'PUT') {
    return res.status(405).json({
      error: new Error(`The HTTP ${req.method} method is not supported at this route.`)
    });
  }
  try {
    const session = await getSession({req});
    console.log(session);
    if (session === null) return res.status(401).json({error: 'You must be logged in.'});
    invariant(session.user !== undefined);
    if (req.method === 'GET') {
      const result = await prisma.user.findUnique({
        where: {
          id: session.user.id
        }
      });
      if (result === null) return res.status(404).json({error: 'user not found.'});
      const {password, ...finalRes} = result;
      return res.json(finalRes);
    }
    if (req.method === 'PUT') {
      const result = await prisma.user.update({
        where: {
          id: session.user.id
        },
        data: req.body
      });
      if (result === null) return res.status(404).json({error: 'user not found.'});
      const {password, ...finalRes} = result;
      return res.json(finalRes);
    }
  } catch (err) {
    console.log('aee', err);
  }
}
