import {ISODateString} from 'next-auth';
import {UserType} from './user';

export interface PostType {
  id: string;
  title: string | null;
  subtitle: string;
  description: string | null;
  content: string | null;
  slug: string;
  image: string | null;
  imageBlurhash: string | null;
  createdAt: ISODateString;
  updatedAt: ISODateString;
  published: boolean;
  siteId: string | null;
  userId: string | null;
  User?: UserType;
}
