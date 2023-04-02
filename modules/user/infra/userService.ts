import {requestBuilder} from '@/shared/infra/requestBuilder';
import {Prisma} from '@prisma/client';
import {PostType} from 'interfaces/post';

const BASE_URL = '/api/user/';
export const userService = {
  create: (data: Prisma.UserUncheckedCreateInput) => {
    return requestBuilder({
      url: BASE_URL,
      method: 'POST',
      data
    });
  },
  update: (data: Prisma.UserUncheckedUpdateInput) => {
    return requestBuilder({
      url: `${BASE_URL}my-info`,
      method: 'PUT',
      data
    });
  },
  findById: (userId: string) => {
    return requestBuilder({
      url: `${BASE_URL}${userId}`,
      method: 'GET'
    });
  },
  myInfo: () => {
    return requestBuilder({
      url: `${BASE_URL}my-info`,
      method: 'GET'
    });
  },
  myPosts: () => {
    return requestBuilder<PostType[]>({
      url: `${BASE_URL}my-posts`,
      method: 'GET'
    });
  }
};
