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

const PostCard = ({title, coverImage, date, excerpt, author, slug}: Props) => {
  return (
    <Link
      as={`/${author?.username ?? author?.gh_username}/posts/${slug}`}
      href="/[User]/posts/[slug]"
      aria-label={title}
    >
      <div className="transition-shadow duration-200 shadow-lg cursor-pointer card w-96 bg-base-100 hover:shadow-2xl">
        {coverImage && <CoverImage title={title} src={coverImage} />}
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{excerpt}</p>
          <div className="flex items-center justify-between">
            <p>
              <DateFormatter dateString={date} />
            </p>
            <div className="justify-end pt-4 card-actions">
              {author?.name && (
                <Avatar name={author?.name} picture={author?.image} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;

{
  /* <div className="badge badge-outline">Fashion</div>
  <div className="badge badge-outline">Products</div> */
}
{
  /* <div className="badge badge-secondary">NOVO</div> */
}
