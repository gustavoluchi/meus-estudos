type Props = {
  name: string;
  picture?: string | null;
};

const Avatar = ({name, picture}: Props) => {
  return (
    <div className="flex items-center">
      {picture && (
        <picture>
          <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
        </picture>
      )}
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
