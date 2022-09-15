import {ISODateString} from 'next-auth';

export type UserType = {
  id: string;
  name: string | null;
  username: string | null;
  gh_username: string | null;
  email: string | null;
  password: string | null;
  image: string | null;
  role: string | null;
  emailVerified: ISODateString | null;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};
