import {prisma} from '@/shared/infra/prisma';
import {HTTP_METHODS} from '@/shared/utils/httpMethods';
import type {NextApiRequest, NextApiResponse} from 'next';
import {getServerSession} from 'next-auth';
import invariant from 'tiny-invariant';
import {authOptions} from '../auth/[...nextauth]';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'PUT') {
    //TODO: add delete && req.method !== 'DELETE'
    return res.status(405).json({
      error: new Error(`The HTTP ${req.method} method is not supported at this route.`)
    });
  }
  const {id} = req.query;
  invariant(typeof id === 'string', `id must be one string.`);
  const session = await getServerSession(req, res, authOptions);
  if (session === null) return res.status(400).json({error: 'You must be logged in.'});
  if (req.method === HTTP_METHODS.GET) {
    const result = await prisma.post.findUniqueOrThrow({where: {id}});
    if (session.user?.id !== result.userId)
      return res.status(403).json({error: `You can only access your own posts.'`});
    return res.json(result);
  }
  if (req.method === HTTP_METHODS.PUT) {
    const {site, ...rest} = req.body;
    const result = await prisma.post.update({
      data: {...rest, siteId: req.body.site?.id},
      where: {id}
    });
    return res.status(201).json(result);
  }
}
