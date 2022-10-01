import {requestBuilder} from '@/shared/infra/requestBuilder';
import {Prisma} from '@prisma/client';

export function postService() {
  return {
    create: (data: Prisma.PostUncheckedCreateInput) => {
      console.log('data!', data);
      return requestBuilder({
        url: '/api/post',
        method: 'POST',
        data
      });
    }
  };
}
