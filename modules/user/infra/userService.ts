import {requestBuilder} from '@/shared/infra/requestBuilder';
import {Prisma} from '@prisma/client';

const BASE_URL = '/api/user/';
export const userService = {
  create: (data: Prisma.PostUncheckedCreateInput) => {
    return requestBuilder({
      url: BASE_URL,
      method: 'POST',
      data
    });
  },
  findById: (userId: string) => {
    return requestBuilder({
      url: `${BASE_URL}${userId}`,
      method: 'GET'
    });
  }
};
