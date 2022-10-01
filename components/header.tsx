import {SecondHalfNavbar} from 'modules/structure/SecondHalfNavbar';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="navbar flex shrink-0 grow justify-between">
      <div className="w-full">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
          <Link href="/">
            <a className="hover:underline">Meus Estudos</a>
          </Link>
        </h2>
      </div>
      <SecondHalfNavbar />
    </div>
  );
};

export default Header;
