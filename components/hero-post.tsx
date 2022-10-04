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
          <CoverImage
            title={title ?? 'erro titulo'}
            src={image}
            slug={slug}
            User={User}
          />
        </div>
      )}
      <div className="md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/${User?.gh_username}/posts/${slug}`}
              href="/[User]/posts/[slug]"
            >
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={createdAt} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={User?.name ?? 'erro'} picture={User?.image} />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
