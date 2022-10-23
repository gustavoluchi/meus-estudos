import {UserType} from 'interfaces/user';
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

const PostPreviewV2 = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}: Props) => {
  return (
    <div className="shadow-xl card w-96 bg-base-100">
      {coverImage && (
        <CoverImage slug={slug} title={title} src={coverImage} User={author} />
      )}
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {/* <div className="badge badge-secondary">NOVO</div> */}
        </h2>
        <p>{excerpt}</p>
        <div className="flex items-center justify-between">
          <p>
            <DateFormatter dateString={date} />
          </p>
          <div className="justify-end pt-4 card-actions">
            {author?.name && (
              <Avatar name={author?.name} picture={author?.image} />
            )}
            {/* <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div> */}
          </div>
        </div>
      </div>
    </div>
    //   <h3 className="mb-3 text-3xl leading-snug">
    //     <Link
    //       as={`/${author?.username ?? author?.gh_username}/posts/${slug}`}
    //       href="/[User]/posts/[slug]"
    //     >
    //       <a className="hover:underline"></a>
    //     </Link>
    //   </h3>
    //   <div className="mb-4 text-lg">
    //
    //   </div>

    // </div>
  );
};

export default PostPreviewV2;
