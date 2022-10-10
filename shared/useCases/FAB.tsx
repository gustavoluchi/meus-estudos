import Image from 'next/image';

export const FAB = ({title, phone}: {title?: string | null; phone: string}) => {
  console.log(title);
  const url = new URL(`https://wa.me/${phone}`);
  const introText = `Olá, li seu texto${
    title && ` "${title}"`
  } no site meusestudos.com.br. Tenho interesse em agendar uma aula.`;
  url.searchParams.append('text', introText);
  return (
    <div
      className="absolute tooltip tooltip-left right-32 bottom-40"
      data-tip="Entre em contato e agende sua aula."
    >
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a
        aria-label="entre em contato"
        className="ml-1 btn btn-link"
        href={url.toString()}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/whatsapp.png"
          alt="Platforms Starter Kit"
          height="40"
          width="40"
          quality="100"
        />
      </a>
    </div>
  );
};
