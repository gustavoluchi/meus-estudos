import Image from 'next/image';
import Link from 'next/link';

export const FAB = ({title, phone}: {title?: string | null; phone: string}) => {
  const url = new URL(`https://wa.me/${phone}`);
  const introText = `Olá, li seu texto${
    title && ` "${title}"`
  } no site meusestudos.com.br. Tenho interesse em agendar uma aula.`;
  url.searchParams.append('text', introText);
  return (
    <div
      className="fixed tooltip tooltip-left right-4 bottom-4 lg:right-32 lg:bottom-40"
      data-tip="Entre em contato e agende sua aula."
    >
      <Link
        aria-label="entre em contato"
        className="ml-1 btn btn-link"
        href={url.toString()}
        target="_blank"
        rel="noopener noreferrer"
      >
        <a>
          <Image
            src="/assets/whatsapp.png"
            alt="Platforms Starter Kit"
            height="40"
            width="40"
            quality="100"
            className="duration-150 ease-linear hover:scale-105 active:scale-95"
          />
        </a>
      </Link>
    </div>
  );
};
