import {UserType} from 'interfaces/user';
import Link from 'next/link';
import Avatar from './avatar';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author?: UserType;
  slug: string;
};

const PostPreview = ({title, coverImage, date, excerpt, author, slug}: Props) => {
  return (
    <div>
      {coverImage && (
        <div className="mb-5">
          <CoverImage title={title} src={coverImage} />
        </div>
      )}
      <h3 className="mb-3 text-3xl leading-snug">
        <Link
          as={`/${author?.username ?? author?.gh_username}/posts/${slug}`}
          href="/[User]/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <DateFormatter dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      {author?.name && <Avatar name={author?.name} picture={author?.image} />}
    </div>
  );
};

export default PostPreview;
