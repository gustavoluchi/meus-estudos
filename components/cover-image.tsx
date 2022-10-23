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
      layout="fill"
      objectFit="contain"
    />
  );
  return (
    <div className="relative flex items-start w-full bg-base-200 h-72 sm:mx-0">
      {slug ? (
        <Link
          as={`/${User?.username ?? User?.gh_username}/posts/${slug}`}
          href="/[User]/posts/[slug]"
          aria-label={title}
        >
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
