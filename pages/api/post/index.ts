// pages/api/post/index.ts

import {prisma} from '@/shared/infra/prisma';
import type {NextApiRequest, NextApiResponse} from 'next';
import {getSession} from 'next-auth/react';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const {User, site, ...rest} = req.body;
  const session: any = await getSession({req});
  const result = await prisma.post.create({
    data: {
      ...rest,
      User: {connect: {id: session?.user?.id}}
    }
  });
  return res.status(201).json(result);
}
