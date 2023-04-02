import {prisma} from '@/shared/infra/prisma';

function selectHelper(fields: string[] = []) {
  let select: any = undefined;
  if (fields?.length > 0) {
    select = {};
    fields.forEach(field => (select[field] = true));
  }
  return select;
}

export async function getManyPosts(howMany: number = 4) {
  return prisma.post.findMany({
    // orderBy: {updatedAt: 'desc'},
    take: howMany,
    include: {User: true}
    // where: {
    //   userId
    // }
  });
}

export async function getMyPosts(howMany: number = 4) {
  return prisma.post.findMany({
    // orderBy: {updatedAt: 'desc'},
    take: howMany,
    include: {User: true}
    // where: {
    //   userId:
    // }
  });
}

export function getPosts() {
  // const select = selectHelper(fields);
  return prisma.post.findMany({
    orderBy: {updatedAt: 'desc'},
    where: {published: true},
    include: {User: true}
  });
}

export async function getPostBySlug(slug: string) {
  // const realSlug = slug.replace(/\.md$/, '');
  // const fullPath = join(postsDirectory, `${realSlug}.md`);
  // const fileContents = fs.readFileSync(fullPath, 'utf8');
  // const select = selectHelper(fields);
  return prisma.post.findFirst({where: {slug}, include: {User: true}});

  // type Items = {
  //   [key: string]: string;
  // };

  // const items: Items = {};

  // Ensure only the minimal needed data is exposed
  // fields.forEach(field => {
  //   if (field === 'slug') {
  //     items[field] = realSlug;
  //   }
  //   if (field === 'content') {
  //     items[field] = content;
  //   }

  //   if (typeof data[field] !== 'undefined') {
  //     items[field] = data[field];
  //   }
  // });

  // return post;
}
