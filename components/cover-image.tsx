import cn from 'classnames';
import {UserType} from 'interfaces/user';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  src: string;
  slug?: string;
  User?: UserType;
};

const CoverImage = ({title, src, slug, User}: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-lg transition-shadow duration-200': slug
      })}
      width={100}
      height={100}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link
          as={`/${User?.gh_username}/posts/${slug}`}
          href="/[User]/posts/[slug]"
        >
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
