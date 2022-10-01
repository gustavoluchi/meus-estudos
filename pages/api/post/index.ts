// pages/api/post/index.ts

import {prisma} from '@/shared/infra/prisma';
import {getSession} from 'next-auth/react';

export default async function handle(req: any, res: any) {
  const {User, site, ...rest} = req.body as any;
  const session: any = await getSession({req});
  console.log('serveer', User, session);
  const result = await prisma.post.create({
    data: {
      ...rest,
      User: {connect: {id: session?.user?.id}}
    }
  });
  return res.json(result);
}
