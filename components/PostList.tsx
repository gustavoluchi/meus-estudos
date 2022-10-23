import type {PostType} from '../interfaces/post';
import PostPreviewV2 from './post-previewV2';

type Props = {
  posts: PostType[];
};

const PostList = ({posts}: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-2xl font-bold leading-tight tracking-tighter">
        Textos publicados
      </h2>
      <div className="grid grid-cols-1 mb-32 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
        {posts.map(post => (
          <PostPreviewV2
            key={post.slug}
            title={post.title ?? ''}
            coverImage={post.image ?? ''}
            date={post.createdAt}
            author={post?.User}
            slug={post.slug}
            excerpt={post.description ?? ''}
          />
        ))}
      </div>
    </section>
  );
};

export default PostList;
