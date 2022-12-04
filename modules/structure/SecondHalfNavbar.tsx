import {PencilSquareIcon} from '@heroicons/react/24/outline';
import NavbarAvatar from 'modules/auth/view/NavbarAvatar';
import {themeList} from 'modules/theme/themeList';
import {useSession} from 'next-auth/react';
import Link from 'next/link';
import {useEffect} from 'react';
import {themeChange} from 'theme-change';

export const SecondHalfNavbar = ({hideNewText}: {hideNewText?: boolean}) => {
  const {status} = useSession();
  useEffect(() => {
    themeChange(false);
  }, []);
  const showNewTextButton = !hideNewText && status === 'authenticated';
  return (
    <section className="flex justify-end w-full">
      <div className="flex justify-end w-full h-full">
        {showNewTextButton && (
          <Link href="painel/textos/novo">
            <button type="button" className="gap-2 mr-2 btn btn-md btn-primary">
              Novo texto
              <PencilSquareIcon className="w-6 h-6" />
            </button>
          </Link>
        )}
        <select
          data-choose-theme
          title="selecione seu tema"
          id="theme-select"
          className="max-w-xs mr-4 select"
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
