import {requestBuilder} from '@/shared/infra/requestBuilder';
import {HTTP_METHODS} from '@/shared/utils/httpMethods';
import {Prisma} from '@prisma/client';
import {PostType} from 'interfaces/post';

export const postService = {
  create: (data: Prisma.PostUncheckedCreateInput) => {
    return requestBuilder({
      url: '/api/post',
      method: HTTP_METHODS.POST,
      data
    });
  },
  update: (data: Prisma.PostUncheckedUpdateInput, pid: string) => {
    return requestBuilder({
      url: `/api/post/${pid}`,
      method: HTTP_METHODS.PUT,
      data
    });
  },
  findById: (id: string, signal?: AbortSignal) => {
    return requestBuilder<PostType>({
      url: `/api/post/${id}`,
      method: HTTP_METHODS.GET,
      signal
    });
  }
};
