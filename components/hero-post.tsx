import {PostType} from 'interfaces/post';
import Link from 'next/link';
import Avatar from './avatar';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';

const HeroPost = ({infos}: {infos: PostType}) => {
  const {title, createdAt, image, description: excerpt, slug, User} = infos;
  return (
    <section>
      {image && (
        <div className="mb-8 md:mb-16">
          <CoverImage title={title ?? 'erro titulo'} src={image} />
        </div>
      )}
      <div className="mb-20 md:gap-x-16 lg:gap-x-8 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-5xl">
            <Link
              as={`/${User?.username ?? User?.gh_username}/posts/${slug}`}
              href="/[User]/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <DateFormatter dateString={createdAt} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          <Avatar name={User?.name ?? 'erro'} picture={User?.image} />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
