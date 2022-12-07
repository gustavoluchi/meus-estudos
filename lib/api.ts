import {prisma} from '@/shared/infra/prisma';

function selectHelper(fields: string[] = []) {
  let select: any = undefined;
  if (fields.length > 0) {
    select = {};
    fields.forEach(field => (select[field] = true));
  }
  return select;
}

// const postsDirectory = join(process.cwd(), '_posts');

export async function getManyPosts(howMany: number = 4) {
  return prisma.post.findMany({
    // orderBy: {updatedAt: 'desc'},
    take: howMany,
    include: {User: true}
  });
}

export function getPostSlugs() {
  // const select = selectHelper(fields);
  return prisma.post.findMany({
    orderBy: {updatedAt: 'desc'},
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
