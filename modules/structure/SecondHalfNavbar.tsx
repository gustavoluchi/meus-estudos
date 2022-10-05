import {PencilSquareIcon} from '@heroicons/react/24/outline';
import NavbarAvatar from 'modules/auth/view/NavbarAvatar';
import {themeList} from 'modules/theme/themeList';
import Link from 'next/link';

export const SecondHalfNavbar = () => {
  return (
    <section className="flex justify-end w-full">
      <div className="flex justify-end w-full h-full">
        <Link href="painel/textos/novo">
          <button className="gap-2 mr-2 btn btn-md btn-primary">
            Novo texto
            <PencilSquareIcon className="w-6 h-6" />
          </button>
        </Link>
        <select
          data-choose-theme
          title="selecione seu tema"
          id="theme-select"
          className="max-w-xs mr-4 select"
          defaultValue=""
        >
          <option disabled value="">
            Selecione seu tema:
          </option>
          {themeList.map(theme => (
            <option value={theme} key={theme}>
              {theme}
            </option>
          ))}
        </select>
        <NavbarAvatar />
      </div>
    </section>
  );
};
