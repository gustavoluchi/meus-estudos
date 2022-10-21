import {SecondHalfNavbar} from 'modules/structure/SecondHalfNavbar';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-between navbar shrink-0 grow">
      <div className="w-full">
        <h1 className="mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
          <Link href="/">
            <a className="hover:underline">Meus Estudos</a>
          </Link>
        </h1>
      </div>
      <SecondHalfNavbar hideNewText />
    </div>
  );
};

export default Header;
