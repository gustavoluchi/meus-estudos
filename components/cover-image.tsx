import Image from 'next/image';

type Props = {
  title: string;
  src: string;
};

const CoverImage = ({title, src}: Props) => {
  return (
    <div className="relative flex items-start w-full bg-base-200 h-72 sm:mx-0">
      <Image
        src={src}
        alt={`Imagem de fundo para ${title}`}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default CoverImage;
